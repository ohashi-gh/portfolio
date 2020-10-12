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

// スクロール時表示
var menuHeight = $(".headerinner").height();
var startPos = 0;
$(window).scroll(function(){
  // headerスクロール時
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

// パララックス
$(window).on('scroll', function(){

  var scrollTop = $(window).scrollTop();
  var bgPosition = scrollTop / 2; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）
  // 横1033px以上のみパララックス
  var ww = window.innerWidth;
  if(ww > 1033){
    if(bgPosition){
      $('#about').css('background-position', 'center top -'+ bgPosition + 'px');
    }
  }
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
  // mvモーダル
  const open02 = document.getElementById('open02');
  const close02 = document.getElementById('close02');
  const mask02 = document.getElementById('mask02');
  const modal02 = document.getElementById('modal02');

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

  // mvモーダル
  open02.addEventListener('click' , () => {
    modal02.classList.remove('hidden');
    mask02.classList.remove('hidden');
    body.classList.add('noscroll');
  });

  // 閉じるクリック
  close02.addEventListener('click' , () => {
    modal02.classList.add('hidden');
    mask02.classList.add('hidden');
    document.body.classList.remove('noscroll');
  });
  // 黒マスククリック
  mask02.addEventListener('click' , () => {
    close02.click();
    });

}

// 参考url http://ishi-note.com/6814.html
// スクロールフェードイン
window.addEventListener("DOMContentLoaded", function() {
  window.onscroll = function (){
    var myFade = document.getElementsByClassName("fadein");
    for(var i = 0; i < myFade.length; i++){
      var targetElement = myFade[i].getBoundingClientRect(); //ターゲット要素の高さ
      var scroll = document.documentElement.scrollTop || document.body.scrollTop;  //スクロール
      var windowHeight = window.innerHeight;  //ウィンドウの高さ
      if (scroll > scroll + targetElement.top - windowHeight + 200){
        myFade[i].style.opacity = "1";
        myFade[i].style.transform = "translateY(0)";
      }
    }
  }
}, false);