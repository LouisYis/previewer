(function(factory) {
    if (typeof define === "function" && define.amd) {
        // AMD. Register as anonymous module.
        define(["jquery"], factory);
    } else {
        // Browser globals.
        factory(jQuery);
    }
}(function($) {

    "use strict";

    var location = window.location,
        Previewer = function(element, option) {
            var setting;

            this.$element = $(element);
            setting = this.$element.attr("previewer");
            this.open = typeof setting !== "undefined";
            this.device = option || setting || "phone";
            this.init();
        };

    Previewer.prototype = {
        construstor: Previewer,

        init: function() {
            var device;

            if (window.parent !== window.self && window.parent.previewerInitialized) {
                return;
            }

            window.previewerInitialized = true;
            device = location.search.match(/previewer\=?(phone|tablet|laptop|desktop)?/i);

            if (device){
                this.open = true;
                this.device = device[1] || this.device;
            }

            if (this.open) {
                this.enable();
            }
        },

        enable: function() {
            if (!this.active) {
                this.$previewer = $(Previewer.template);
                this.$viewport = this.$previewer.find(".previewer-viewport");
                this.$element.addClass("previewer-open").prepend(this.$previewer);
                this.$previewer.addClass("previewer-" + this.device);
                this.addListener();
                this.redirect();
                this.active = true;
            }
        },

        disable: function() {
            if (this.active) {
                this.removeListener();
                this.$previewer.remove();
                this.$element.removeClass("previewer-open");
                this.$previewer = null;
                this.$viewport = null;
                this.active = false;
            }
        },

        addListener: function() {
            this.$previewer.on("click", $.proxy(this.click, this));
            this.$viewport.on("load", this.load); // No proxy
        },

        removeListener: function() {
            this.$previewer.off("click", this.click);
            this.$viewport.off("load", this.load);
        },

        click: function(e) {
            if (e.target.className === "previewer-close") {
                this.disable();
            }
        },

        load: function() {
            var contentDocument,
                height;

            try {
                contentDocument = this.contentDocument || this.contentWindow.document;

                if (contentDocument) {
                    height = $(contentDocument.body).outerHeight() + 200;
                }
            } catch (e) {
                console.log(e.message);
            }

            height && $(this).height(height);
        },

        redirect: function() {
            var url = location.href,
                timestamp = "timestamp=" + (new Date()).valueOf();

            // Add timestamp for IE
            url += url.indexOf("?") === -1 ? "?" + timestamp : timestamp;
            this.$viewport.attr("src", url);
        }
    };

    Previewer.template = [
        '<div class="previewer">',
            '<div class="previewer-sidebar">',
                '<button class="previewer-close" title="Close">&times;</button>',
                '<ul class="previewer-nav">',
                    '<li title="Phone"><a href="?previewer=phone"><i class="previewer-icon-phone"></i></a></li>',
                    '<li title="Tablet"><a href="?previewer=tablet"><i class="previewer-icon-tablet"></i></a></li>',
                    '<li title="Laptop"><a href="?previewer=laptop"><i class="previewer-icon-laptop"></i></a></a></li>',
                    '<li title="Desktop"><a href="?previewer=desktop"><i class="previewer-icon-desktop"></i></a></a></li>',
                '</ul>',
            '</div>',
            '<div class="previewer-mainbody">',
                '<iframe class="previewer-viewport" scrolling="no"></iframe>',
            '</div>',
        '</div>'
    ].join("");

    // Register as jQuery plugin
    $.fn.previewer = function(option) {
        this.each(function() {
            if (this.tagName.toLowerCase() === "body") {
                $(this).data("previewer", new Previewer(this, option));
            }
        });
    };

    $.fn.previewer.Constructor = Previewer;

    $(function() {
        $("body").previewer();
    });
}));
