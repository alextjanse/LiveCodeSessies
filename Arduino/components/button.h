#ifndef BUTTON_H
#define BUTTON_H

#include <Arduino.h>
#include "timer.h"

enum BUTTON_STATE { RELEASED, PRESSED, LONG_PRESSED };

class Button {
  private:
    uint8_t pin;
    BUTTON_STATE state;
    BUTTON_STATE prev_state;
    bool prev_read_state;
    Timer* rebounce_timer;
    Timer* long_press_timer;

  public:
    Button(uint8_t pin);
    ~Button();
    void setup();
    void update();
    bool isReleased();
    bool isDown();
    bool isPressed();
    bool isLongPressed();
};

#endif