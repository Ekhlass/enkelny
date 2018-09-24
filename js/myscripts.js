








 jQuery(window).load(function(){
                         var handclick = false;
                         $(".pb_slider .navigation-right").mousedown(function(){handclick = true;});
                         $(".pb_slider .navigation-left").mousedown(function(){handclick = true;});
                         setInterval(function(){if (!handclick) $("#pb_slider92 .navigation-right").click();}, 10000);
                     });