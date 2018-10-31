
function happyHolidays(string) {
  return string("Happy Holidays!")
}

function happyHolidaysTo(name) {
  return string("Happy holidays to ""${name}"" !")
}

function happyHolidayTo(holiday,name) {
  return string(`Happy ${holiday}, ${name}!`)
}
function holidayCountdown(holiday,days) {
  return string(`It's ${days} days until ${holiday}!`)
}
