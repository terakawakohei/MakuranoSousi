package jp.kobe_u.cs.daikibo.SharedTimer.Message;

public class TimerEvent {
      private String event;

  public TimerEvent() {
  }

  public TimerEvent(String event) {
    this.event = event;
  }

  public String getEvent() {
    return event;
  }

  public void setEvent(String event) {
    this.event = event;
  }
}
