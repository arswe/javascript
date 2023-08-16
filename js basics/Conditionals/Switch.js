//  JavaScript Switch Statement example:

// The getDay() method returns the weekday as a number between 0 and 6.

let day;

switch (new Date().getDay()) {
  case 0:
    console.log('Monday');
    break;
  case 1:
    console.log('Tuesday');
    break;
  case 2:
    console.log('Wednesday');
    break;
  case 3:
    console.log('Thursday');
    break;
  case 4:
    console.log('Friday');
    break;
  case 5:
    console.log('Saturday');
    break;
  case 6:
    console.log('Sunday');
    break;
  default:
    console.log('Invalid day');
    break;
}
