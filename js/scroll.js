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

    var windowHeight = $(window).height();
    console.log(windowHeight);
    $('.broadside').css('height',windowHeight);
    $('.broadsidetell').css({
      'position':'absolute',
      'top':'50%',
      'margin-top':'-200px'
    })
    $('.scrollTop').css('bottom','50px')
    $('.banner-img').css('height',$('.banner-bag').height()+50)