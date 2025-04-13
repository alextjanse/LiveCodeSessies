#include "button.h"
#include "led.h"
#include "timer.h"

Button button1(7);
Button button2(6);
Button button3(5);

LED led1(4);
LED led2(3);
LED led3(2);

Timer timer1(1000, false);
Timer timer2(1500, false);
Timer timer3(2000, false);

void setup() {
  Serial.begin(9600);
  Serial.println("Hello, world!");
  
  button1.setup();
  button2.setup();
  button3.setup();

  led1.setup();
  led2.setup();
  led3.setup();
}

void loop() {
  button1.update();
  button2.update();
  button3.update();

  if (button1.isPressed()) {
    Serial.println("Button 1 pressed");
    led1.turnOn();
    timer1.reset();
  }

  if (button2.isPressed()) {
    Serial.println("Button 2 pressed");
    led2.turnOn();
    timer2.reset();
  }

  if (button3.isPressed()) {
    Serial.println("Button 3 pressed");
    led3.turnOn();
    timer3.reset();
  }

  if (timer1.trigger()) {
    Serial.println("LED 1 off");
    led1.turnOff();
  }

  if (timer2.trigger()) {
    Serial.println("LED 2 off");
    led2.turnOff();
  }

  if (timer3.trigger()) {
    Serial.println("LED 3 off");
    led3.turnOff();
  }
}
