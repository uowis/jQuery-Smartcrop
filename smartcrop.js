(function($){

    var transformPicture = function($container, $image, crop_dimensions) {
      if (crop_dimensions.cRatio < crop_dimensions.iRatio) {
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

    var refreshImageSizes = function($container, $image, crop_dimensions) {
      crop_dimensions.iWidth = $image.width();
      crop_dimensions.iHeight = $image.height();
      crop_dimensions.iRatio =  crop_dimensions.iWidth / crop_dimensions.iHeight;
      transformPicture($container, $image, crop_dimensions);
    }

    var refreshContainerSizes = function($container, $image, crop_dimensions) {
      crop_dimensions.cWidth = $container.width();
      crop_dimensions.cHeight = $container.height();
      crop_dimensions.cRatio = crop_dimensions.cWidth / crop_dimensions.cHeight;
      transformPicture($container, $image, crop_dimensions);
    }

    var crop = function($container) {

        var $image = $("img", $container);

        $container.addClass( "smart-crop-container" );

        var containerWidth = $container.width();
        var containerHeight = $container.height();

        var imageWidth = $image.width();
        var imageHeight = $image.height();

        var container_ratio = containerWidth / containerHeight;
        var image_ratio = $image.width() / $image.height();

        var crop_dimensions = {   cWidth:   containerWidth,
                                  cHeight:  containerHeight,
                                  iWidth:   imageWidth,
                                  iHeight:  imageHeight,
                                  cRatio:   container_ratio,
                                  iRation:  image_ratio
        };


        $image.load(refreshImageSizes.bind(null,$container,$image,crop_dimensions));

        $( window ).resize(refreshContainerSizes.bind(null,$container,$image,crop_dimensions));
    }

    $.fn.smartCrop = function() {

        return this.each(function() {
            crop($(this));
        });
    };
}(jQuery));
