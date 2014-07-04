jQuery-Smartcrop
=================

Plugin Jquery to crop physically picture in a container like a "background : cover" css style

##Include js and css
Include js before plugin using and after jQuerry includes:
```Html
  <script type="text/javascript" src="//code.jquery.com/jquery-1.11.1.min.js"></script>
  <script type="text/javascript" src="smartcrop.js"></script>
  <script type="text/javascript">
    $(function () {
        $("<container_selector>").smartCrop();
    });
  </script>
```

##Using SmartCrop
Use the smartcrop plugin on domready listener on the img parent container :

Exemple :

```JavaScript
  $(function () {
      $("[data-smartcrop-container]").smartCrop();
  });
```

For this element:

```Html
   <div data-smartcrop-container>
        <img src=""/>
    </div>
```


##Don't override css
Some css style are essential, respect css which you should found on smartcrop.css

##Test him
[An example](http://uowis.fr/SmartCrop/example/example.html "Example")
