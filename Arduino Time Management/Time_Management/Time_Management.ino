const int PIN_BUTTON_RED = 5;
const int PIN_BUTTON_BLUE = 6;
const int PIN_BUTTON_WHITE = 7;
const int PIN_BUTTON_BLACK = 8;

int button_state_red_prev;
int button_state_blue_prev;
int button_state_white_prev;
int button_state_black_prev;

const int PIN_LED_RED = 10;
const int PIN_LED_BLUE = 11;
const int PIN_LED_GREEN = 12;
const int PIN_LED_MODE = 13;

bool led_red_on;
bool led_blue_on;
bool led_green_on;

unsigned long current_time;

unsigned long led_red_start_time;
unsigned long led_blue_start_time;
unsigned long led_green_start_time;

bool run_parallel;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);

  pinMode(PIN_BUTTON_RED, INPUT_PULLUP);
  pinMode(PIN_BUTTON_BLUE, INPUT_PULLUP);
  pinMode(PIN_BUTTON_WHITE, INPUT_PULLUP);
  pinMode(PIN_BUTTON_BLACK, INPUT_PULLUP);

  pinMode(PIN_LED_RED, OUTPUT);
  pinMode(PIN_LED_BLUE, OUTPUT);
  pinMode(PIN_LED_GREEN, OUTPUT);
  pinMode(PIN_LED_MODE, OUTPUT);

  led_red_on = false;
  led_blue_on = false;
  led_green_on = false;

  run_parallel = false;
}

void loop() {
  int button_state_black_curr = digitalRead(PIN_BUTTON_BLACK);

  if (button_state_black_curr == LOW && button_state_black_prev == HIGH) {
    run_parallel = !run_parallel;
    digitalWrite(PIN_LED_MODE, run_parallel);
  }

  button_state_black_prev = button_state_black_curr;

  if (run_parallel) {
    loop_parallel();
  } else {
    loop_sequential();
  }
}

void loop_sequential() {
  int button_state_red_curr = digitalRead(PIN_BUTTON_RED);
  int button_state_blue_curr = digitalRead(PIN_BUTTON_BLUE);
  int button_state_white_curr = digitalRead(PIN_BUTTON_WHITE);

  if (button_state_red_curr == LOW && button_state_red_prev == HIGH) {
    Serial.println("red button pressed");

    digitalWrite(PIN_LED_RED, HIGH);
    delay(1000);
    digitalWrite(PIN_LED_RED, LOW);
  }

  if (button_state_blue_curr == LOW && button_state_blue_prev == HIGH) {
    Serial.println("blue button pressed");

    digitalWrite(PIN_LED_BLUE, HIGH);
    delay(1000);
    digitalWrite(PIN_LED_BLUE, LOW);
  }

  if (button_state_white_curr == LOW && button_state_white_prev == HIGH) {
    Serial.println("white button pressed");

    digitalWrite(PIN_LED_GREEN, HIGH);
    delay(1000);
    digitalWrite(PIN_LED_GREEN, LOW);
  }

  button_state_red_prev = button_state_red_curr;
  button_state_blue_prev = button_state_blue_curr;
  button_state_white_prev = button_state_white_curr;
}

void loop_parallel() {
  current_time = millis();

  int button_state_red_curr = digitalRead(PIN_BUTTON_RED);
  int button_state_blue_curr = digitalRead(PIN_BUTTON_BLUE);
  int button_state_white_curr = digitalRead(PIN_BUTTON_WHITE);

  if (button_state_red_curr == LOW && button_state_red_prev == HIGH) {
    Serial.println("red button pressed");

    digitalWrite(PIN_LED_RED, HIGH);
    led_red_on = true;
    led_red_start_time = current_time;
  }

  if (button_state_blue_curr == LOW && button_state_blue_prev == HIGH) {
    Serial.println("blue button pressed");

    digitalWrite(PIN_LED_BLUE, HIGH);
    led_blue_on = true;
    led_blue_start_time = current_time;
  }

  if (button_state_white_curr == LOW && button_state_white_prev == HIGH) {
    Serial.println("white button pressed");

    digitalWrite(PIN_LED_GREEN, HIGH);
    led_green_on = true;
    led_green_start_time = current_time;
  }

  if (led_red_on && current_time - led_red_start_time >= 1000) {
    digitalWrite(PIN_LED_RED, LOW);
    led_red_on = false;
  }

  if (led_blue_on && current_time - led_blue_start_time >= 1000) {
    digitalWrite(PIN_LED_BLUE, LOW);
    led_blue_on = false;
  }

  if (led_green_on && current_time - led_green_start_time >= 1000) {
    digitalWrite(PIN_LED_GREEN, LOW);
    led_green_on = false;
  }

  button_state_red_prev = button_state_red_curr;
  button_state_blue_prev = button_state_blue_curr;
  button_state_white_prev = button_state_white_curr;
}
