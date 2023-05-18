
    var screenSize, screenHeight;
  
    function screen_size(){
        screenSize = $(window).width(); //스크린의 너비
        screenHeight = $(window).height();  //스크린의 높이
  
        $("#content").css('margin-top',screenHeight);

        var titleHeight = $('#content h2').height();   //타이틀 제목 높이
        $('#content h2').css('top', -(screenHeight/2)-titleHeight);  // 해상도별 높이 고정

        if( screenSize > 768){
            $("#imgBG").attr('src','./images/sub_main2.jpg');  //큰이미지
            
          }else{
            $("#imgBG").attr('src','./images/sub_main2_2.jpg'); //작은이미지
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

const content = "CHARACTER".split("");
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
          $('#content h2').addClass('glitch');
        //typingIdx = 0;
        //$("#content h2").empty();  // 다시 계속해서 loop
        
    } 
}
let clear1 =  setInterval(typing, 200); 



// UI 체인지 버튼

$('.change_btn').toggle(function(){
    $('.change_btn, .rotate_img').addClass('active');
    $('.name1').html('BELLE').css('color', '#fec1c6');
    $('.name2').html('DRAGON').css('color', '#77a5e7');;


}, function(){
    $('.change_btn, .rotate_img').removeClass('active');
    $('.name1').html('SUZU').css('color', '#9fb7dd');
    $('.name2').html('KEI').css('color', '#9fb7dd');
    
})
