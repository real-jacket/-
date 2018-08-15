let $buttons = $('.button')
let $slide = $('#slide')
let $images = $('img')

let $firstcopy = $images.eq(0).clone(true);
let $lastcopy = $images.eq($images.length - 1).clone(true);
$slide.append($firstcopy);
$slide.prepend($lastcopy);

$slide.css({transform:'translateX(-690px)'});

let current = 0;
$buttons.eq(0).on('click',function(e){
    if(current === 3){
        $slide.css({transform:'translateX(-3450px)'})
        .one('transitionend',function(){
            $slide.hide()
                .offset();
            $slide.css({transform:'translateX(-690px)'})
                .show();
        })
    }else{
        $slide.css({transform:'translateX(-690px)'});
    }
    $(e.currentTarget).siblings().removeClass('active')
    $(e.currentTarget).addClass('active');
    current = 0;
})

$buttons.eq(1).on('click',function(e){
    $slide.css({transform:'translateX(-1380px)'});
    $(e.currentTarget).siblings().removeClass('active')
    $(e.currentTarget).addClass('active');
    current = 1;
})
$buttons.eq(2).on('click',function(e){
    $slide.css({transform:'translateX(-2070px)'});
    $(e.currentTarget).siblings().removeClass('active')
    $(e.currentTarget).addClass('active');
    current = 2;
})
$buttons.eq(3).on('click',function(e){
    if(current === 0){
        $slide.css({transform:'translateX(0px)'})
        .one('transitionend',function(){
            $slide.hide()
                .offset();
            $slide.css({transform:'translateX(-2760px)'})
            .show();
        })
    }else{
        $slide.css({transform:'translateX(-2760px)'});
    }
    $(e.currentTarget).siblings().removeClass('active')
    $(e.currentTarget).addClass('active');
    current = 3;
    
})