
function happyHolidays() {
  return ("Happy Holidays!")
}
happyHolidays()

function happyHolidaysTo(name) {
  return string("Happy holidays to ""${name}"" !")
}
happyHolisaysTo("Karen")
happyHolisaysTo("Davide")

function happyHolidayTo(holiday,name) {
  return string(`Happy ${holiday}, ${name}!`)

}
happyHolidayTo(Christmas, Karen)

function holidayCountdown(holiday,days) {
  return string(`It's ${days} days until ${holiday}!`)
}
