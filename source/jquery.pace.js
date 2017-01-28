/************************************************
 * jQuery Pace
 *  - by Phil Wood
 *
 * Change the scroll speed of dom elements
 ************************************************/

(function( $ ) {
 
    $.fn.extend({

    	pace : function( options ) {

            // Default Options

    		var defaults = {
                'direction' : 'vertical',
                'reverse'   : false
            };
    		var options = $.extend( defaults, options );
    		var $window = $(window);
    		var instances = [];
            var pace = this;

            // Iterate through selected elements

    		$(this).each(function() {
		        instances.push(new pace.paceElement( $(this) ));
		    });

            // Update elements on scroll

		    window.onscroll = function() {
		        var scrollTop = $window.scrollTop();
		        instances.forEach(function( inst ){
		            pace.updateElement(inst, scrollTop, options);
		        });
		    };

            // Return object to allow chaining

            return pace;
    	},

        paceElement : function( el ) {

            // Create an instance of the element

            this.el = el;
            this.speed = parseFloat( this.el.attr('data-scroll-speed') );
        },

        updateElement : function( inst, scrollTop, options ) {

            // Map the options

            var direction = ({
                    "vertical"  : "translateY",
                    "horizontal" : "translateX"
                })[options.direction];
            var symbol = ({
                    "true"  : "+",
                    "false" : "-"
                })[options.reverse];

            // Calculate position

            var pos = scrollTop / inst.speed;

            // Update Css

            inst.el.css( 'transform', direction + '(' + symbol + pos + 'px)' );
        }
    });

}( jQuery ));