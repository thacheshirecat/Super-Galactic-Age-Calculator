export class GalacticAge
{
  constructor(earthAge, earthYear, earthMonth, earthDay, earthSeconds)
  {
    this.earthAge = earthAge;
    this.earthYear = earthYear;
    this.earthMonth = earthMonth;
    this.earthDay = earthDay;
    this.earthSeconds = earthSeconds;
  }
  GetAgeInSeconds()
  {
    let ageInSeconds = ((((this.earthAge * 365) * 24) * 60) * 60);
    this.earthSeconds = ageInSeconds;
    return ageInSeconds;
  }
  CompareDatesInSeconds(laterDate)
  {
    let yearDifference = (((((laterDate.earthYear - this.earthYear) * 365) * 24) * 60) * 60);
    let monthDifference = (((((laterDate.earthMonth - this.earthMonth) * 30) * 24) * 60) * 60);
    let dayDifference = ((((laterDate.earthDay - this.earthDay) * 24) * 60) * 60);

    let differenceInSeconds = yearDifference + monthDifference + dayDifference;
    this.earthSeconds = differenceInSeconds;
    return differenceInSeconds;
  }
  ConvertBackToYears()
  {
    let ageInYears = ((((this.earthSeconds / 60) / 60) / 24) / 365);
    return parseFloat(ageInYears.toFixed(2));
  }
}
