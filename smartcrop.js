(function($){

    var transformPicture = function(cropData) {
      if (cropData.cRatio < cropData.iRatio) {
        var offsetX = ((cropData.cHeight * cropData.iRatio) - cropData.cWidth) * -.5;
        cropData.image.css({
          'width': 'auto',
          'height': '100%',
          'left': offsetX.toString() + 'px',
          'top': '0',
          'position': 'absolute',
          'max-width': 'none',
          'max-height': 'none',
          'min-width':  '100%',
          'min-height': '100%'
        });
      }
      else {
        var offsetY = (( cropData.cWidth / cropData.iRatio) - cropData.cHeight) * -.5;
        cropData.image.css({
          'width': '100%',
          'height': 'auto',
          'left': '0',
          'top': offsetY.toString() + 'px',
          'position': 'absolute',
          'max-width':  'none',
          'max-height': 'none',
          'min-width':  '100%',
          'min-height': '100%'
        });
      }
    }

    var refreshImageSizes = function(cropData) {
      if(!cropData.isResize){
        cropData.isResize = true;
        cropData.iWidth = cropData.image.width();
        cropData.iHeight = cropData.image.height();
        cropData.iRatio =  cropData.iWidth / cropData.iHeight;
        transformPicture(cropData);
      }
    }

    var refreshContainerSizes = function(cropData) {
      cropData.cWidth = cropData.container.width();
      cropData.cHeight = cropData.container.height();
      cropData.cRatio = cropData.cWidth / cropData.cHeight;
      transformPicture( cropData);
    }

    var crop = function($container) {
        var cropData = {   container:  $container,
                                  image:    $("img", $container),
                                  isResize: false,
                                  cWidth:   $container.width(),
                                  cHeight:  $container.height()
        };
        cropData.container.addClass( "smart-crop-container" );
        cropData.cRatio = cropData.cWidth / cropData.cHeight;
        cropData.image.load(refreshImageSizes.bind(null,cropData));

        $( window ).load(refreshImageSizes.bind(null,cropData));

        $( window ).resize(refreshContainerSizes.bind(null,cropData));
    }

    $.fn.smartCrop = function() {
        return this.each(function() {
            crop($(this));
        });
    };
}(jQuery));
