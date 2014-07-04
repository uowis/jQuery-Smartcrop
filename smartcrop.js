(function($)
{
    $.fn.smartCrop=function() {

        this.each(function() {

            $container =  $(this);
            $image = $("img", this);

            $container.addClass( "smart-crop-container" );

            var containerWidth = $container.width();
            var containerHeight = $container.height();

            var imageWidth = $image.width();
            var imageHeight = $image.height();

            var container_ratio = containerWidth / containerHeight;
            var image_ratio = $image.width() / $image.height();

            function refreshImageSizes() {
                imageWidth = $image.width();
                imageHeight = $image.height();
                image_ratio = imageWidth / imageHeight;
                crop();
            }

            function refreshContainerSizes() {
                containerWidth = $container.width();
                containerHeight = $container.height();
                container_ratio = containerWidth / containerHeight;
                crop();
            }

            function crop() {
                if (container_ratio < image_ratio) {
                    $image.css({
                        'max-width': 'none',
                        'max-height': '100%'
                    });
                }
                else {
                    $image.css({
                        'max-width': '100%',
                        'max-height': 'none'
                    });
                }

                var offsetX = (($image.width() - $container.width()) * -.5);
                var offsetY = (($image.height() - $container.height()) * -.5);

                $image.css({
                    'left': offsetX.toString() + 'px',
                    'top': offsetY.toString() + 'px'
                });
            }

            $image.load( function() {
                refreshImageSizes();
            })

            $( window ).resize(function() {
                refreshContainerSizes();
            })
        });

    };
})(jQuery);
