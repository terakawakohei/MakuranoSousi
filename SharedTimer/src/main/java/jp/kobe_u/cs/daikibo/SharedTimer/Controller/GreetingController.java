package jp.kobe_u.cs.daikibo.SharedTimer.Controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

import jp.kobe_u.cs.daikibo.SharedTimer.Message.Greeting;
import jp.kobe_u.cs.daikibo.SharedTimer.Message.HelloMessage;
import jp.kobe_u.cs.daikibo.SharedTimer.Message.TimerEvent;

@Controller
public class GreetingController {


  @MessageMapping("/hello")
  @SendTo("/topic/greetings")
  public String greeting(TimerEvent event) throws Exception {
    return event.getEvent();
  }

}