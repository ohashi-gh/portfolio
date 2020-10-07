'use strict';

// バーガーメニュー表示
$(".burger-btn").on("click",function(){
  $(".burger-btn").toggleClass("close");
  $(".nav-wrapper").fadeToggle(250);
  $("body").toggleClass("noscroll");
});
if( $(window).width() < 768 ){
  $(".headeritem>a").on("click",function(){
    $(".nav-wrapper").fadeOut(250);
    $(".burger-btn").removeClass("close");
    $("body").removeClass("noscroll");
  });
};

// headerスクロール時表示
var menuHeight = $(".headerinner").height();
var startPos = 0;
$(window).scroll(function(){
  var currentPos = $(this).scrollTop();
  if (currentPos > startPos) {
    if($(window).scrollTop() >=  100) {
      $(".headerinner").css("top", "-" + menuHeight + "px");
    }
  } else {
    $(".headerinner").css("top", 0 + "px");
  }
  startPos = currentPos;
});

// 参考url https://www.to-r.net/media/smooth_scrolling_2019/
// hedaerクリック時スクロール移動
document.addEventListener("click", e => {
  const target = e.target;
  // clickした要素がclass属性、js-smooth-scrollを含まない場合は処理を中断
  if (!target.classList.contains("js-smooth-scroll")) return;
  e.preventDefault();
  const targetId = target.hash;
  const targetElement = document.querySelector(targetId);
  // 画面上部から要素までの距離
  const rectTop = targetElement.getBoundingClientRect().top;
  // 現在のスクロール距離
  const offsetTop = window.pageYOffset;
  // スクロール位置に持たせるバッファ
  const buffer = 10;
  const top = rectTop + offsetTop - buffer;

  window.scrollTo({
    top,
    behavior: "smooth"
  });
});


// モーダルウィンドウ
{
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const mask2 = document.getElementById('mask2');
  const modal = document.getElementById('modal');
  const body = document.getElementById('body');

  open.addEventListener('click' , () => {
    modal.classList.remove('hidden');
    mask2.classList.remove('hidden');
    body.classList.add('noscroll');
  });

  close.addEventListener('click' , () => {
    modal.classList.add('hidden');
    mask2.classList.add('hidden');
    document.body.classList.remove('noscroll');
  });

  mask2.addEventListener('click' , () => {
    close.click();
    });
}