
var screenSize, screenHeight;

function screen_size(){
    screenSize = $(window).width(); //스크린의 너비
    screenHeight = $(window).height();  //스크린의 높이

    $("#content").css('margin-top',screenHeight);

    var titleHeight = $('#content h2').height();   //타이틀 제목 높이
    $('#content h2').css('top', -(screenHeight/2)-titleHeight);  // 해상도별 높이 고정
    
    if( screenSize > 768){
        $("#imgBG").attr('src','./images/sub_main4.jpg');  //큰이미지
        
      }else{
        $("#imgBG").attr('src','./images/sub_main4_2.jpg'); //작은이미지
      }
    
    }
    
  
screen_size();  //최초 실행시 호출

$(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
    screen_size();
}); 

$('.down').click(function(){
    screenHeight = $(window).height();
    $('html,body').animate({'scrollTop':screenHeight}, 1000);
});
    
   
//typing

const content = "GALLERY".split("");
//let typingBool = false;
let typingIdx = 0;
$("#content h2").empty();

function typing () {
    if (typingIdx < content.length) {
        $("#content h2").append(content[typingIdx]);
        typingIdx++; 
    } 
    else{ 
          clearInterval(clear1);  //한번 모두 타이핑 처리 후 멈춤
          $('#content h2').addClass('glitch'); // 타이핑 이후 글리치 효과 적용  
        //typingIdx = 0;
        //$("#content h2").empty();  // 다시 계속해서 loop
        
    } 
}
let clear1 =  setInterval(typing, 200); 


// 별빛 배경

    var stars=1200;
    var $stars=$(".stars");
    var r=1200;
    for(var i=0;i<stars;i++){
      var $star=$("<div/>").addClass("star");
      $stars.append($star);
    }
    $(".star").each(function(){
      var cur=$(this);
      var s=0.2+(Math.random()*1);
      var curR=r+(Math.random()*300);
      cur.css({ 
        transformOrigin:"0 0 "+curR+"px",
        transform:" translate3d(0,0,-"+curR+"px) rotateY("+(Math.random()*360)+"deg) rotateX("+(Math.random()*-50)+"deg) scale("+s+","+s+")"
         
      })
    })

    
// 코스튬 start버튼 로딩 화면
$('.costume_box .play_ani').click(function(e){
  e.preventDefault();

  $(this).delay(500).fadeOut(500);  //버튼 사라지고

  $('.costume_set li:eq(0)').addClass('active2');  //이미지 무빙
  $('.costume_set li:eq(0)').addClass('text');  //텍스트 무빙

  setTimeout(function(){
    $('.costume_set li:eq(0)').removeClass('active2');  //이미지 무빙 hide
    $('.costume_set li:eq(0)').removeClass('text');  //텍스트 무빙 hide
    $('.costume_set li:eq(0)').addClass('active');  //화면 배경 전환
  }, 4000);

 
    
    //$('.costume_set li:eq(0)').delay(4500).removelass('active2');  //이미지 hide
    //$('.costume_set li:eq(0)').delay(4500).removeClass('text');  //텍스트 hide


 setTimeout(function(){
    $('.costume_set li:eq(0)').delay(1000).addClass('hide');  //1초 후 배경 숨기기
    $('.costume_set li:eq(0)').removeClass('active');
  }, 4700);

  // $('.costume_set li:eq(0)').delay(2000).removeClass('active2');  //이미지 무빙

  // $('.costume_set li:eq(0)').delay(2000).addClass('active');  //화면 배경 전환

  // setTimeout(function(){
  //   $('.costume_set li:eq(0)').delay(1000).addClass('hide');  //1초 후 배경 숨기기
  //   $('.costume_set li:eq(0)').removeClass('active');
  // }, 3000);
});



// 코스튬 뷰
var cnt=0;  // 0 1 2 3 4 5 6 7
var total=0;  // 8
$('.costume_box .costume_set li:eq(0)').fadeIn('slow');
total=$('.costume_box .costume_set li').size();  // 8

// console.log(total);



$('.cos_btn .next').click(function(e){
    e.preventDefault();

    cnt++;  // 0 1 2 3 ...카운트 증가
    if(cnt==total){
    cnt=0;
    }
    $('.costume_set li img').css('transform','scale(1)');
    $('.costume_box .costume_set li').hide();
    $('.costume_box .costume_set li:eq('+cnt+')').fadeIn('slow');
    
});

$('.cos_btn .pre').click(function(e){
    e.preventDefault();

    cnt--;  // 7 6 5 4 ...카운트 감소
    if(cnt==-1){
    cnt=total-1;  // 7
    }
    $('.costume_set li img').css('transform','scale(1)');
    $('.costume_box .costume_set li').hide();  
    $('.costume_box .costume_set li:eq('+cnt+')').fadeIn('slow');
    
});


// 돋보기 클릭시 이미지 확대
$('.costume_box .img_scale').toggle(function(e){
  e.preventDefault();

  $('.costume_set li img').css('transform','scale(1.3)');
},function(){
  $('.costume_set li img').css('transform','scale(1)');
});

// 좋아요 클릭시 하트 모션
$('.costume_box .goodcheck').click(function(e){
  e.preventDefault();

  $('.costume_set li i').fadeIn('fast');
  $('.costume_set li i').fadeOut('slow');
});



