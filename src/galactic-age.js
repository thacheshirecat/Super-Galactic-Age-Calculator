export class GalacticAge
{
  constructor(earthAge, earthYear, earthMonth, earthDay)
  {
    this.earthAge = earthAge;
    this.earthYear = earthYear;
    this.earthMonth = earthMonth;
    this.earthDay = earthDay;
  }
  GetAgeInSeconds()
  {
    let ageInSeconds = ((((this.earthAge * 365) * 24) * 60) * 60);
    return ageInSeconds;
  }
  CompareDatesInSeconds(earlierDate)
  {
    let yearDifference = (((((this.earthYear - earlierDate.earthYear) * 365) * 24) * 60) * 60);
    let monthDifference = (((((this.earthMonth - earlierDate.earthMonth) * 30) * 24) * 60) * 60);
    let dayDifference = ((((this.earthDay - earlierDate.earthDay) * 24) * 60) * 60);

    let differenceInSeconds = yearDifference + monthDifference + dayDifference;

    return differenceInSeconds;
  }
}
