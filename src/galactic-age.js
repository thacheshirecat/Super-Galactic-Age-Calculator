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
}
