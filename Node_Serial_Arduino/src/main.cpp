#include <Arduino.h>

#define INTERVAL 1000

void __readAnalog();
void __readDigital();
void __printValues();

uint8_t digital_values[13];
uint16_t analog_values[6];
char buffer[50];

void setup() {
  Serial.begin(9600);
  for(int i = 1; i <= 13; i++) {
    pinMode(i, INPUT);
  }
}

void loop() {
  __readAnalog();
  __readDigital();
  __printValues();
  delay(INTERVAL);
}

void __readDigital() {
  for(int i = 0; i < 14; i++) {
    digital_values[i] = digitalRead(i);
  }
}

void __readAnalog() {
  for(int i = 0; i < 6; i++) {
    analog_values[i] = analogRead(i);
  }
}

void __printValues() {
  sprintf(buffer, "%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d",
    digital_values[0],
    digital_values[1],
    digital_values[2],
    digital_values[3],
    digital_values[4],
    digital_values[5],
    digital_values[6],
    digital_values[7],
    digital_values[8],
    digital_values[9],
    digital_values[10],
    digital_values[11],
    digital_values[12],
    digital_values[13],
    analog_values[0],
    analog_values[1],
    analog_values[2],
    analog_values[3],
    analog_values[4],
    analog_values[5]);
  Serial.println(buffer);
}
