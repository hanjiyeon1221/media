// gnb menu
//--------javascript----------
const navbtn = document.querySelector('.btn');
const gnbmenu = document.getElementById('gnb');
const modalbox = document.querySelector('.box')
// --네비 버튼 클릭,
navbtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  let documentHeight = window.innerHeight;
  //console.log(documentHeight)
  gnbmenu.style.height = documentHeight + 'px';
 
  gnbmenu.animate([
    {right: 0, opacity: 1}
  ], {
      duration: 200,
      fill: "forwards"
  });

  modalbox.style.cssText = `display: block; height: ${documentHeight}px`
});

// --닫기 버튼 클릭,
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();

  gnbmenu.animate([
    {right: '-100%', opacity: 0}
  ], {
      duration: 200,
      fill: "forwards"
  });

  modalbox.style.cssText = `display: none;`;
});

//--------jQuery----------

// $(".btn").click(function () {
//   // e.preventDefault();
//   var documentHeight = $(document).height();
//   $("#gnb").css('height', documentHeight);

//   $("#gnb").animate({
//       right: 0,
//       opacity: 1
//   }, 'fast');
//   $(".box").show();
// });

// $(".close").click(function () {
//   // e.preventDefault();
//   $("#gnb").animate({
//       right: '-100%',
//       opacity: 0
//   }, 'fast');
//   $(".box").hide();
// });




//resize 적용 (웹브라우저 크기 조절시 반응)

//--------javascript----------
// function screen_size(){
//     let current=0;
//     let screenSize = window.innerWidth;
//     let documentHeight = window.innerHeight;

//     if(screenSize > 768){
//       current = 1;
//       gnbmenu.style.cssText = `right: 0, opacity: 1`;
//       modalbox.style.display = 'none';
//       gnbmenu.style.height = 'auto';
//     }
//     if(current==1 && screenSize <= 768){
//       gnbmenu.style.cssText = `right: -100%, opacity: 0`;
//       modalbox.style.display = 'none';
//       current = 0;
//       gnbmenu.style.height = `${documentHeight}px`;
      
//     }
// }

// window.addEventListener('resize', () => {
//   screen_size();
// });


//--------jQuery----------
var current=0;
$(window).resize(function(){    
  var screenSize = $(window).width(); 
  if( screenSize > 768){
    current=1;
    $("#gnb").css({right:0,opacity:1});
    $(".box").hide();
    $("#gnb").css('height', 'auto');
  }
  
  if(current==1 && screenSize <= 768){
      $("#gnb").css({right:'-100%',opacity:0});
      $(".box").hide();
      current=0;

      documentHeight = $(document).height();
      $("#gnb").css('height', documentHeight);
  }
}); 
  

/* quick top */
// $(document).on('click', '.top', function(e){
//     e.preventDefault();
//     $('html,body').animate({'scrollTop':0});
// });

$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
  var scroll = $(window).scrollTop(); //스크롤의 거리
  var winh = $(window).height()/2;
 
  // $('.text').text(scroll);

  if(scroll>winh){ //화면높이/2 이상의 거리가 발생되면
      $('.top').fadeIn('slow'); 
  }else{
      $('.top').fadeOut('fast');
  }
});

$('.top').click(function(e){
 e.preventDefault();
  //상단으로 부드럽게 이동
 $("html,body").stop().animate({"scrollTop":0},1000); 
});



//main footer BELLE effect
(d => {
  const word = d.querySelector(".word");

  const shadow = e => {
  const { x, y } = e;
  const gBCR = word.getBoundingClientRect();
  const w = this;
  const xM = (x - gBCR.left - gBCR.width / 2) / gBCR.width * 5;
  const yM = (y - gBCR.top - gBCR.height / 2) / gBCR.height * 5;
  
  transform(xM, yM);
  };

  const transform = (x, y) => {
  word.style.textShadow = `${x}px ${-y}px 0px rgb(102, 249, 255, 0.7),
              ${-x}px ${y}px 0px rgb(255, 35, 251, 0.7),
              ${y}px ${-x}px 0px rgb(255, 255, 73, 0.7),
              ${-y}px ${x}px 0px rgb(102, 249, 255, 0.7)`;
  };

  window.addEventListener("mousemove", shadow);
})(document);


// 마우스 커서 효과

// declares variables for big circle and small circle in cursor
var cursorBig = document.querySelector('.big');
var cursorSmall = document.querySelector('.small');
var a = document.querySelectorAll('a');

// positions the two circles in a desired placement
document.addEventListener('mousemove', function(e){
var x = e.clientX;
var y = e.clientY;
cursorBig.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
var x = e.clientX;
var y = e.clientY;
cursorSmall.style.left = x + 'px';
cursorSmall.style.top = y + 'px';
});

// adds class when cursor clicks
document.addEventListener('mousedown', function(){
cursorBig.classList.add('click');
cursorSmall.classList.add('hover__small')
});

// removes class when cursor stops clicking
document.addEventListener('mouseup', function(){
cursorBig.classList.remove('click')
cursorSmall.classList.remove('hover__small')
});

// adds and removes class when mouse hovers and stops hovering
a.forEach(item => {
item.addEventListener('mouseover', () => {
cursorBig.classList.add('hover__big');
cursorSmall.classList.add('hover__small');
});
item.addEventListener('mouseleave', () => {
cursorBig.classList.remove('hover__big');
cursorSmall.classList.remove('hover__small');
});
})
