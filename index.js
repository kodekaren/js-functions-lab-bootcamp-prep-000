var string = "Happy Holidays!"
function happyHolidays() {
  return string()
}// write your code below!
function happyHolidaysTo(name) {
  return string("Happy holidays to ""${name}"" !")
}
function happyHolidayTo(holiday,name) {
  return string(`Happy ${holiday}, ${name}!`)
}
function holidayCountdown(holiday,days) {
  return string(`It's ${days} days until ${holiday}!`)
}
