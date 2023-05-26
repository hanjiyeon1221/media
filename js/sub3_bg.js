//해상도별 비주얼 이미지 변경
//------javascript------
var screenSize, screenHeight;
const mainContent = document.getElementById("content");
const contentH2 = document.querySelector("#content h2");
const imgBG = document.getElementById("imgBG");

function screen_size() {
  screenSize = $(window).width(); //스크린의 너비
  screenHeight = $(window).height(); //스크린의 높이

  mainContent.style.marginTop = `${screenHeight}px`;

  const titleHeight = contentH2.height;
  contentH2.style.top = `-(${screenHeight}/2)-titleHeight`;

  if (screenSize > 768) {
    imgBG.src = `./images/sub_main3.jpg`; // big img
  } else {
    imgBG.src = `./images/sub_main3_2.jpg`; // small img
  }
}

screen_size(); //최초 실행시 호출

window.addEventListener("resize", function () {
  screen_size();
});

//typing
//------javascript------
const content = "TRAILER".split("");
let typingBool = false;
let typingIdx = 0;

contentH2.innerHTML = ""; //비우고

function typing() {
  if (typingIdx < content.length) {
    contentH2.append(content[typingIdx]);
    typingIdx++;
  } else {
    clearInterval(clear1);
    contentH2.classList.add("glitch");
  }
}
let clear1 = setInterval(typing, 200);

/* 웨이브 애니메이션 */
// modified version of random-normal
function normalPool(o) {
  var r = 0;
  do {
    var a = Math.round(normal({ mean: o.mean, dev: o.dev }));
    if (a < o.pool.length && a >= 0) return o.pool[a];
    r++;
  } while (r < 100);
}
function randomNormal(o) {
  if (
    ((o = Object.assign({ mean: 0, dev: 1, pool: [] }, o)),
    Array.isArray(o.pool) && o.pool.length > 0)
  )
    return normalPool(o);
  var r,
    a,
    n,
    e,
    l = o.mean,
    t = o.dev;
  do {
    r = (a = 2 * Math.random() - 1) * a + (n = 2 * Math.random() - 1) * n;
  } while (r >= 1);
  return (e = a * Math.sqrt((-2 * Math.log(r)) / r)), t * e + l;
}

const NUM_PARTICLES = 600;
const PARTICLE_SIZE = 0.5; // View heights
const SPEED = 20000; // Milliseconds

let particles = [];

function rand(low, high) {
  return Math.random() * (high - low) + low;
}

function createParticle(canvas) {
  const colour = {
    r: 255,
    g: randomNormal({ mean: 125, dev: 20 }),
    b: 50,
    a: rand(0, 1),
  };
  return {
    x: -2,
    y: -2,
    diameter: Math.max(
      0,
      randomNormal({ mean: PARTICLE_SIZE, dev: PARTICLE_SIZE / 2 })
    ),
    duration: randomNormal({ mean: SPEED, dev: SPEED * 0.1 }),
    amplitude: randomNormal({ mean: 16, dev: 2 }),
    offsetY: randomNormal({ mean: 0, dev: 10 }),
    arc: Math.PI * 2,
    startTime: performance.now() - rand(0, SPEED),
    colour: `rgba(${colour.r}, ${colour.g}, ${colour.b}, ${colour.a})`,
  };
}

function moveParticle(particle, canvas, time) {
  const progress =
    ((time - particle.startTime) % particle.duration) / particle.duration;
  return {
    ...particle,
    x: progress,
    y:
      Math.sin(progress * particle.arc) * particle.amplitude + particle.offsetY,
  };
}

function drawParticle(particle, canvas, ctx) {
  canvas = document.getElementById("particle-canvas");
  const vh = canvas.height / 100;

  ctx.fillStyle = particle.colour;
  ctx.beginPath();
  ctx.ellipse(
    particle.x * canvas.width,
    particle.y * vh + canvas.height / 2,
    particle.diameter * vh,
    particle.diameter * vh,
    0,
    0,
    2 * Math.PI
  );
  ctx.fill();
}

function draw(time, canvas, ctx) {
  // Move particles
  particles.forEach((particle, index) => {
    particles[index] = moveParticle(particle, canvas, time);
  });

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the particles
  particles.forEach((particle) => {
    drawParticle(particle, canvas, ctx);
  });

  // Schedule next frame
  requestAnimationFrame((time) => draw(time, canvas, ctx));
}

function initializeCanvas() {
  let canvas = document.getElementById("particle-canvas");
  canvas.width = canvas.offsetWidth * window.devicePixelRatio;
  canvas.height = canvas.offsetHeight * window.devicePixelRatio;
  let ctx = canvas.getContext("2d");

  window.addEventListener("resize", () => {
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx = canvas.getContext("2d");
  });

  return [canvas, ctx];
}

function startAnimation() {
  const [canvas, ctx] = initializeCanvas();

  // Create a bunch of particles
  for (let i = 0; i < NUM_PARTICLES; i++) {
    particles.push(createParticle(canvas));
  }

  requestAnimationFrame((time) => draw(time, canvas, ctx));
}

// Start animation when document is loaded
(function () {
  if (document.readystate !== "loading") {
    startAnimation();
  } else {
    document.addEventListener("DOMContentLoaded", () => {
      startAnimation();
    });
  }
})();

//비디오 클립 팝업
//------javascript------
const list1 = document.querySelector(".clip_box").children[0].children[0];
const list2 = document.querySelector(".clip_box").children[0].children[1];
const video1 = "https://www.youtube-nocookie.com/embed/JUFVLW3kpm8";
const video2 = "https://www.youtube-nocookie.com/embed/VdDj2qDFCqs";
const player = document.getElementById("youtube-player");
const videoPop = document.querySelector(".video_pop");
const videoBack = document.querySelector(".modal_box");
const popClose = document.querySelector(".pop_close");

//console.log(list1)

function clickVideo(src) {
  player.src = src;
  videoPop.style.display = "block";
  videoBack.style.display = "block";
}

list1.addEventListener("click", function (e) {
  e.preventDefault();

  clickVideo(video1);
});

list2.addEventListener("click", function (e) {
  e.preventDefault();

  clickVideo(video2);
});

function setClose() { // video & modal 닫기
  videoPop.style.display = "none";
  videoBack.style.display = "none";
  player.src = "";
}

videoBack.addEventListener("click", function (e) { //mobal 클릭시,
  e.preventDefault();
  setClose();
});

popClose.addEventListener("click", function (e) { // X 클릭시,
  e.preventDefault();
  setClose();
});

//------jQuery------
/*
    function clickVideo (list, src){
        $('#youtube-player').attr('src',src);
        $(list).parents('ul').siblings('.video_pop').fadeIn('slow');
        $(list).parents('ul').siblings('.modal_box').show();
    }

    $(list1).on('click', function (e) {
    e.preventDefault();

    clickVideo(list1, video1);
    // $('body').css('overflow', 'hidden');  //화면 고정 (스크롤X)
    });

    $(list2).on('click', function (e) {
    e.preventDefault();

    clickVideo(list2, video2);
    // $('body').css('overflow', 'hidden');  //화면 고정 (스크롤X)
    });


    
    $(`.modal_box,.pop_close`).on('click', function (e) {
    e.preventDefault();
    
    $(`.modal_box,.pop_close`).next('.video_pop').hide();
    $('.modal_box').hide();
    $('#youtube-player').attr("src","");  //닫으면 속성값 제거

    });
*/
