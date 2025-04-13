#include "button.h"

Button::Button(uint8_t pin) {
  this->pin = pin;
  this->prev_state = RELEASED;
  this->state = RELEASED;
  this->prev_read_state = HIGH;
  this->rebounce_timer = new Timer(30, false);
  this->long_press_timer = new Timer(1000, false);
}

Button::~Button() {
  delete this->rebounce_timer;
  delete this->long_press_timer;
}

void Button::setup() {
  pinMode(this->pin, INPUT_PULLUP);
}

void Button::update() {
  bool read_state = digitalRead(this->pin);

  if (read_state != this->prev_read_state) {
    this->rebounce_timer->reset();
  }

  this->prev_read_state = read_state;
  this->prev_state = this->state;

  if (this->rebounce_timer->trigger()) {
    if (read_state == LOW) {
      this->state = PRESSED;
      this->long_press_timer->reset();
    } else {
      this->state = RELEASED;
      this->long_press_timer->stop();
    }
  }

  if (this->state == PRESSED && this->long_press_timer->trigger()) {
    this->state = LONG_PRESSED;
  }
}

bool Button::isReleased() {
  return this->state == RELEASED;
}

bool Button::isDown() {
  return this->state == PRESSED;
}

bool Button::isPressed() {
  return this->state == PRESSED && this->prev_state == RELEASED;
}

bool Button::isLongPressed() {
  return this->state == LONG_PRESSED;
}