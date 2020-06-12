window.addEventListener('DOMContentLoaded',function(){

  'use strict'

  const cont = document.querySelectorAll('.service__body__content'),
        item = document.querySelectorAll('.service__body__header__item'),
        head = document.querySelector('.service__body__header');

        function hideTab(a){
          for(let i = a; i < cont.length;i++){
            cont[i].classList.remove('show');
            cont[i].classList.add('hide');
          }
        }

        hideTab(1);

        function showTab(b){
          if(cont[b].classList.contains('hide')){
            cont[b].classList.remove('hide');
            cont[b].classList.add('show');
          }
        }

        head.addEventListener('click',e=>{
          let target = e.target;
          if(target && target.classList.contains('service__body__header__item')){
            for(let i = 0; i < item.length;i++){
              if(target == item[i]){
                hideTab(0);
                showTab(i);
                break;
              }
              console.log(target)
            }
          }
        })


})



$('.header__burger').click(function(event){
    $('.header__burger,.header__body__contain__bottom').toggleClass('active')
    $('body').toggleClass('lock')
})

$('.team__body__contain').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll:1,
  prevArrow:'<img class="sl"  src="img/arrow_left.png" width="56px" height="56px"  "  slick-prev "></img>',
  nextArrow:'<img class="sl" src="img/arrow_right.png" width="56px" height="56px"  slick-next "></img>',
  responsive: [
      {
          breakpoint: 1290,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
  
          }
        },
        {
          breakpoint: 1212,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
  
          }
        },
        {
          breakpoint: 785,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
  
          }
        },
    

]        
});

$('.feedback__body__contain').slick({
  infinite: true,
    slidesToShow: 1,
    slidesToScroll:1,
    prevArrow:'<img src="img/arrow_left.png" width="56px" height="56px"  "  slick-prev "></img>',
    nextArrow:'<img src="img/arrow_right.png" width="56px" height="56px"  slick-next "></img>',
         
});

$('.latest__body__contain').slick({
  infinite: true,
    slidesToShow: 3,
    slidesToScroll:1,
    prevArrow:'<img src="img/arrow_left.png" width="56px" height="56px"  "  slick-prev "></img>',
    nextArrow:'<img src="img/arrow_right.png" width="56px" height="56px"  slick-next "></img>',
    responsive: [
      {
          breakpoint: 1034,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
  
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
  
          }
        },
        
]        
});


$('.provide__body__contain').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll:1,
    prevArrow:'<img src="img/arrow_left.png" width="56px" height="56px"  "  slick-prev "></img>',
    nextArrow:'<img src="img/arrow_right.png" width="56px" height="56px"  slick-next "></img>',
    responsive: [
        {
            breakpoint: 1290,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
    
            }
          },
          {
            breakpoint: 1030,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
    
            }
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
    
            }
          },
      
  
]        
  });

  
$(function() {
    var Accordion = function(el, multiple) {
      this.el = el || {};
      // more then one submenu open?
      this.multiple = multiple || false;
      
      var dropdownlink = this.el.find('.dropdownlink');
      dropdownlink.on('click',
                      { el: this.el, multiple: this.multiple },
                      this.dropdown);
    };
    
    Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el,
          $this = $(this),
          //this is the ul.submenuItems
          $next = $this.next();
      
      $next.slideToggle();
      $this.parent().toggleClass('open');
      
      if(!e.data.multiple) {
        //show only one menu at the same time
        $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
      }
    }
    
    var accordion = new Accordion($('.accordion-menu'), false);

    
  })




  let btns = document.querySelectorAll('.slick-arrow');

  for(let i = 0; i < btns.length;i++){
      btns[i].classList.add((`item${i}`))
  }

  

