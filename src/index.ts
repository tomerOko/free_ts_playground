console.log("hallokkkk;lkj;lkjl;kjkkkfdsdkkw")

enum days_of_weak{
  Monday=1, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday,
}

enum month_of_the_year {
  January=1,February,March,April,May,June,July,August,September,October,November,December,
}

interface date_interface {
  day:days_of_weak,
  day_as_nummber: number,
  month: month_of_the_year,
  year: number
}

class birthday implements date_interface{
  constructor (public day:days_of_weak, public day_as_nummber: number, public month: month_of_the_year, public year: number, public name:string){}
}

const my_bithday:birthday = new birthday(days_of_weak.Friday, 10, month_of_the_year.June, 1993, 'tomy')

const my_barmitzva : date_interface = {
day: days_of_weak.Friday,
day_as_nummber: 5,
month: month_of_the_year.June,
year: 2006,
}

console.log(my_barmitzva)
console.log(my_bithday)


