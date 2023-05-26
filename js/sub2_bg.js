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
    imgBG.src = `./images/sub_main2.jpg`; // big img
  }else{
    imgBG.src = `./images/sub_main2_2.jpg`; // small img
  }
}

screen_size(); //최초 실행시 호출

window.addEventListener('resize', function(){
    screen_size();
})


//typing
//------javascript------
const content = "CHARACTER".split("");
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


/* UI 체인지 버튼 */
//------javascript------
const changeBtn = document.querySelector('.change_btn');
const changeImg = document.querySelectorAll('.rotate_img');  //같은 클래스를 가진 태그가 2개, all로 잡고 배열ind 빼주기
const name1 = document.querySelector('.name1');
const name2 = document.querySelector('.name2');

let btnActive = false;  //가정법-버튼 실행 안됨 -> 빈 문자열 ("")이라면 객체의 초기값은 false

changeBtn.addEventListener('click', function(){

    if(btnActive) {  //true
        changeBtn.classList.remove('active');
        changeImg[0].classList.remove('active');
        changeImg[1].classList.remove('active');
        name1.innerHTML = 'SUZU';
        name1.style.color = '#9fb7dd';
        name2.innerHTML = 'KEI';
        name2.style.color = '#9fb7dd';
        btnActive = false;

    } else {  //false
        changeBtn.classList.add('active');
        changeImg[0].classList.add('active');
        changeImg[1].classList.add('active');
        name1.innerHTML = 'BELLE';
        name1.style.color = '#fec1c6';
        name2.innerHTML = 'DRAGON';
        name2.style.color = '#77a5e7';
        btnActive = true;
    }

})

//------jQuery------
// $(".change_btn").toggle(
//   function () {
//     $(".change_btn, .rotate_img").addClass("active");
//     $(".name1").html("BELLE").css("color", "#fec1c6");
//     $(".name2").html("DRAGON").css("color", "#77a5e7");
//   },
//   function () {
//     $(".change_btn, .rotate_img").removeClass("active");
//     $(".name1").html("SUZU").css("color", "#9fb7dd");
//     $(".name2").html("KEI").css("color", "#9fb7dd");
//   }
// );
