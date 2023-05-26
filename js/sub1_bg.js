//해상도별 비주얼 이미지 변경
//------javascript------
var screenSize, screenHeight;
const mainContent = document.getElementById("content");
const contentH2 = document.querySelector("#content h2");
const imgBG = document.getElementById('imgBG');

function screen_size() {
  screenSize = $(window).width(); //스크린의 너비
  screenHeight = $(window).height(); //스크린의 높이

  mainContent.style.marginTop = `${screenHeight}px`;

  const titleHeight = contentH2.height;
  contentH2.style.top = `-(${screenHeight}/2)-titleHeight`;

  if (screenSize > 768) {
    imgBG.src = `./images/sub_main1.jpg`; // big img
  }else{
    imgBG.src = `./images/sub_main1_2.jpg`; // small img
  }
}

screen_size(); //최초 실행시 호출

window.addEventListener('resize', function(){
    screen_size();
})

//------jQuery------
/*
function screen_size() {
     $("#content").css('margin-top',screenHeight);

  var titleHeight = $('#content h2').height();   //타이틀 제목 높이
  $('#content h2').css('top', -(screenHeight/2)-titleHeight);  // 해상도별 높이 고정

  if( screenSize > 768){
      $("#imgBG").attr('src','./images/sub_main2.jpg');  //큰이미지

    }else{
      $("#imgBG").attr('src','./images/sub_main2_2.jpg'); //작은이미지
    }
}

$(window).resize(function () {
  //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
  screen_size();
});
*/
    

//typing 효과
//------javascript------
const content = "ABOUT".split("");
let typingBool = false;
let typingIdx = 0;

contentH2.innerHTML = '';  //비우고

function typing (){
    if(typingIdx < content.length){
        contentH2.append(content[typingIdx]);
        typingIdx++;
    }else{
        clearInterval(clear1);
        contentH2.classList.add('glitch');
    }
}
let clear1 =  setInterval(typing, 200);


//------jQuery------
/*
const content = "ABOUT".split("");
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
*/

