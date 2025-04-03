#ifndef TIMER_H
#define TIMER_H

#include <Arduino.h>

class Timer {
  private:
    unsigned long time;
    unsigned long trigger_time;
    bool repeat;
    bool active;

  public:
    Timer(unsigned long time, bool repeat);
    void reset(unsigned long new_time = 0);
    void start();
    void stop();
    bool trigger();
};

#endif