var stompClient = null;

const contextPath = getContextPath();
function setConnected(connected) {
  $("#connect").prop("disabled", connected);
  $("#disconnect").prop("disabled", !connected);
  if (connected) {
    $("#conversation").show();
  } else {
    $("#conversation").hide();
  }
  $("#message").html("");
}

function connect() {
  console.log(contextPath);
  var socket = new SockJS(contextPath + "websocket"); // WebSocket通信開始
  stompClient = Stomp.over(socket);
  stompClient.connect({}, function (frame) {
    setConnected(true);
    console.log("Connected: " + frame);
    // /receive/messageエンドポイントでメッセージを受信し、表示する
    stompClient.subscribe("/receive/message", function (response) {
      showMessage(JSON.parse(response.body));
    });
  });
}

function disconnect() {
  if (stompClient !== null) {
    stompClient.disconnect();
  }
  setConnected(false);
  console.log("Disconnected");
}

function sendMessage() {
  // /send/messageエンドポイントにメッセージを送信する
  stompClient.send(
    "/send/message",
    {},
    JSON.stringify({ name: $("#name").val(), statement: $("#statement").val() })
  );
  $("#statement").val("");
}

function showMessage(message) {
  // 受信したメッセージを整形して表示
  $("#message").append(
    "<tr><td>" + message.name + ": " + message.statement + "</td></tr>"
  );
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
    sendMessage();
  });
});

setTimeout("connect()", 3000);
function getContextPath() {
  var path = "./";
  var e = document.createElement("span");
  e.innerHTML = '<a href="' + path + '" />';
  url = e.firstChild.href;
  console.log(url);
  var p = url.split("/");
  return url;
  //    return '/' + p[3] + '/';
}
