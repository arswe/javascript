// temperature calculation use formula exercise program:
// 1. Declare a variable celsius and assign it a value of 37.5. Convert it to fahrenheit and output "NN°C is NN°F". (Use Google) (NN is the value of the variable)
// const celsius = 37.5;
// const fahrenheit = celsius * 1.8 + 32;
// console.log(`${celsius}°C is ${fahrenheit}°F`);
//

// 2. Now store a fahrenheit value into a variable, e.g. fahrenheit = 100. Calculate the celsius value and output "NN°F is NN°C." (Use Google)
// const fahrenheit = 100;
// const celsius = (fahrenheit - 32) / 1.8;
// console.log(`${fahrenheit}°F is ${celsius}°C`);

// 3. It's hot outside! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to kelvin and output "NN°C is NN°K". (Use Google)
// const celsius = 37.5;
// const kelvin = celsius + 273.15;
// console.log(`${celsius}°C is ${kelvin}°K`);

// 4. I'm trying to sell my friend a converter, so we can convert between systems. Store a kelvin temperature into a variable. Convert it to celsius and output "NN°K is NN°C."
// const kelvin = 310.65;
// const celsius = kelvin - 273.15;
// console.log(`${kelvin}°K is ${celsius}°C`);

// 5. Calculate the fahrenheit value and output "NN°F is NN°C."
// const fahrenheit = celsius * 1.8 + 32;
// console.log(`${fahrenheit}°F is ${celsius}°C`);

// 6. What's hotter, a temperature of 30°C or a temperature of 30°F? Comment your answer in the file.
// 30°C is hotter than 30°F

// 7. Bonus: Create a variable called "temperature" that stores a temperature value. Create a second variable "unit" that stores a string ("celsius", "fahrenheit", or "kelvin"). Then, create a third variable "convertedTemperature" that stores the value of the original temperature converted to the other unit. Log this string: "NN°C is NN°F."
// const temperature = 37.5;
// const unit = 'celsius';
// const convertedTemperature = temperature * 1.8 + 32;
// console.log(`${temperature}°C is ${convertedTemperature}°F`);

// 8. Bonus: Add an "else if" clause that logs "NN°F is NN°C." if the unit is "fahrenheit".
// const temperature = 100;
// const unit = 'fahrenheit';
// if (unit === 'celsius') {
//   const convertedTemperature = temperature * 1.8 + 32;
//   console.log(`${temperature}°C is ${convertedTemperature}°F`);
// } else if (unit === 'fahrenheit') {
//   const convertedTemperature = (temperature - 32) / 1.8;
//   console.log(`${temperature}°F is ${convertedTemperature}°C`);
// }

// 9. Bonus: Add another "else if" clause that logs "NN°K is NN°C." if the unit is "kelvin".
// const temperature = 310.65;
// const unit = 'kelvin';
// if (unit === 'celsius') {
//   const convertedTemperature = temperature * 1.8 + 32;
//   console.log(`${temperature}°C is ${convertedTemperature}°F`);
// } else if (unit === 'fahrenheit') {
//   const convertedTemperature = (temperature - 32) / 1.8;
//   console.log(`${temperature}°F is ${convertedTemperature}°C`);
// } else if (unit === 'kelvin') {
//   const convertedTemperature = temperature - 273.15;
//   console.log(`${temperature}°K is ${convertedTemperature}°C`);
// }

// 10. Bonus: Add an "else" clause that logs "Error: Invalid unit."
// const temperature = 310.65;
// const unit = 'kelvin';
// if (unit === 'celsius') {
//   const convertedTemperature = temperature * 1.8 + 32;
//   console.log(`${temperature}°C is ${convertedTemperature}°F`);
// } else if (unit === 'fahrenheit') {
//   const convertedTemperature = (temperature - 32) / 1.8;
//   console.log(`${temperature}°F is ${convertedTemperature}°C`);
// } else if (unit === 'kelvin') {
//   const convertedTemperature = temperature - 273.15;
//   console.log(`${temperature}°K is ${convertedTemperature}°C`);
// } else {
//   console.log('Error: Invalid unit.');
// }

// 11. Bonus: What happens if you enter 0°C? What about 0°F? Comment your answers in the file.
// 0°C is 32°F
// 0°F is -17.77777777777778°C

// 12. Bonus: What happens if you enter 0K? Comment your answer in the file.
// Error: Invalid unit.

// 13. Bonus: What happens if you enter a string instead of a number? Comment your answer in the file.
// Error: Invalid unit.

// 14. Bonus: What happens if you enter a number without a unit? Comment your answer in the file.
// Error: Invalid unit.

// 15. Bonus: What happens if you enter a number with an invalid unit? Comment your answer in the file.
// Error: Invalid unit.

// 16. Bonus: What happens if you enter a number with an invalid unit, but with a typo? For example, "celcius" instead of "celsius". Comment your answer in the file.
// Error: Invalid unit.

// 17. Bonus: What happens if you enter a number with a unit, but without a space between the number and the unit? For example, "100Celsius" instead of "100 Celsius". Comment your answer in the file.
// Error: Invalid unit.

// 18. Bonus: What happens if you enter a number with a unit, but with a space between the number and the unit, but without a space between the unit and the value? For example, "100 Celsius" instead of "100 Celsius". Comment your answer in the file.
// Error: Invalid unit.
