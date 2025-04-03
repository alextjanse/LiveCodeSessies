#include "led.h"

LED::LED(uint8_t pin) {
  this->pin = pin;
  this->on = false;
}

void LED::setup() {
  pinMode(this->pin, OUTPUT);
}

void LED::turnOn() {
  this->on = true;
  digitalWrite(this->pin, this->on);
}

void LED::turnOff() {
  this->on = false;
  digitalWrite(this->pin, this->on);
}

void LED::toggle() {
  this->on = !this->on;
  digitalWrite(this->pin, this->on);
}