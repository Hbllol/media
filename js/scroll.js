    var timer = null;
    var backTop = $('#scrollTop');
    backTop.click(function(){
      cancelAnimationFrame(timer);
        timer = requestAnimationFrame(function fn(){
        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(oTop > 0){
        scrollBy(0,-80);
        timer = requestAnimationFrame(fn);
        }else{
        cancelAnimationFrame(timer);
        } 
       });
    })