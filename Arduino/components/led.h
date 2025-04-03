#ifndef LED_H
#define LED_H

#include <Arduino.h>

class LED {
  private:
    uint8_t pin;
    bool on;

  public:
    LED(uint8_t pin);
    void setup();
    void turnOn();
    void turnOff();
    void toggle();
};

#endif