let start_button = document.querySelector(".btn-primary");
let stop_button = document.querySelector(".btn-danger");
let def_timer = document.querySelector(".def_timer");
let start_time;
let el_time;
let timer_id;

stop_button.disabled = true;
//Stopボタンを無効化する
var stompClient = null;
function setConnected(connected) {
  $("#connect").prop("disabled", connected);
  $("#disconnect").prop("disabled", !connected);
  if (connected) {
    $("#conversation").show();
  } else {
    $("#conversation").hide();
  }
  $("#greetings").html("");
}
function connect() {
  var socket = new SockJS("/gs-guide-websocket");
  stompClient = Stomp.over(socket);
  stompClient.connect({}, function (frame) {
    setConnected(true);
    console.log("Connected: " + frame);
    stompClient.subscribe("/topic/greetings", function (event) {
      //更新が起こるたび，ここが呼ばれる？
      //GreetingControllerで作成したGreeting型がjsonで帰ってくる

      console.log("購読");
      console.log(event.body);
      if (event.body == "start") {
        start();
      } else if (event.body == "stop") {
        stop();
      }
    });
  });
}

start_button.addEventListener("click", () => {
  //timer_buttonをクリックしたときは以下の挙動をする
  sendEvent("start");
  console.log("timer_id=" + timer_id + "をスタートしました");
});

function start() {
  start_time = Date.now();
  //ボタンを押したときの現在時刻を取得
  start_button.disabled = true;
  stop_button.disabled = false;
  timer_id = setInterval(go_timer, 10);
  console.log("timer_id=" + timer_id + "をスタートしました");
}

stop_button.addEventListener("click", () => {
  sendEvent("stop");
});

function stop() {
  console.log("stopが動くよ!現在のtimeridは" + timer_id);
  start_button.disabled = false;
  stop_button.disabled = true;
  clearInterval(timer_id);
}

function add_zero(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}
//1桁のときに10の位に文字列の"0"を足す関数

function arrange_time() {
  let sec = Math.floor((el_time % 60000) / 1000);
  //商の余りを使うことで60を超えたら自動的に0になる
  let min = Math.floor((el_time % 3600000) / 60000);
  let hour = Math.floor(el_time / 3600000);

  sec = add_zero(sec);
  //上で作ったadd_zeroのvalueにsecを入れたものをsecに入れた
  min = add_zero(min);
  hour = add_zero(hour);

  def_timer.innerHTML = `${hour}:${min}:${sec}`;
  //html内にあるdef_timerを書き換える
}

let go_timer = () => {
  let time_now = Date.now();
  el_time = time_now - start_time;
  arrange_time();
};
function sendEvent(event) {
  stompClient.send("/app/hello", {}, JSON.stringify({ event: event }));
}
$(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
  });
  $("#connect").click(function () {
    connect();
  });
  $("#disconnect").click(function () {
    disconnect();
  });
  $("#send").click(function () {
    sendEvent();
  });
});
