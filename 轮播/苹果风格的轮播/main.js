let $buttons = $('.button');
let $slide = $('#slide');
let $images = $('#slide>img');
let current = 0;

makeFade(0,$images.length-1);
$slide.css({transform:'translateX(-690px)'});
bindButtons();

$('#next').on('click',function(){
    goToslide(current+1)
});
$('#previous').on('click',function(){
    goToslide(current-1)
});

let timer = setInterval(function(){
    goToslide(current+1);
},2000)

$('#window').on('mouseenter',function(){
    window.clearInterval(timer);
    console.log('我进来了')
}).on('mouseleave',function(){
        timer = setInterval(function(){
        goToslide(current+1);
    },2000)
    console.log('我出去了')
})

function makeFade(first,last){
    let $firstcopy = $images.eq(first).clone(true);
    let $lastcopy = $images.eq(last).clone(true);
    $slide.append($firstcopy);
    $slide.prepend($lastcopy); 
}


function bindButtons(){
    $('#buttons').on('click','.button',function(e){
        let $button = $(e.currentTarget);
        let index = $button.index();
        goToslide(index);
    })
}


function goToslide(index) {
    if(index > $buttons.length-1){
        index = 0;
    }else if(index<0){
        index =  $buttons.length - 1;
    }
    if(current === $buttons.length-1&& index === 0){
        $slide.css({transform:'translateX('+ (-($buttons.length+1)*690) +'px)'})
         .one('transitionend',function(){
            $slide.hide()
                .offset();
            $slide.css({transform:'translateX(' + (-(index+1)*690) + 'px)'})
                 .show();
         })
    }else if(current === 0&& index === $buttons.length-1){
        $slide.css({transform:'translateX(0px)'})
        .one('transitionend',function(){
            $slide.hide()
                .offset();
            $slide.css({transform:'translateX(' + (-(index+1)*690) + 'px)'})
            .show();
        })
    }else{
        $slide.css({transform:'translateX(' + (-(index+1)*690) + 'px)'});
    }
    current = index;
    $buttons.eq(current).siblings().removeClass('active')
    $buttons.eq(current).addClass('active');
}