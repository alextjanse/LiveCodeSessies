#include "timer.h"

Timer::Timer(unsigned long time, bool repeat) {
  this->time = time;
  this->repeat = repeat;
  this->active = false;
  this->trigger_time = millis() + time;
}

void Timer::start() {
  this->active = true;
  this->trigger_time = millis() + this->time;
}

void Timer::reset(unsigned long new_time = 0) {
  if (new_time > 0) {
    this->time = new_time;
  }

  start();
}

void Timer::stop() {
  this->active = false;
}

bool Timer::trigger() {
  if (!this->active) {
    return false;
  }

  unsigned long current_time = millis();

  if (current_time > trigger_time) {
    if (this->repeat) {
      this->trigger_time = current_time + this->time;
    } else {
      this-> active = false;
    }

    return true;
  }

  return false;
}