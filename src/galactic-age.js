export class GalacticAge
{
  constructor(earthAge, earthYear, earthMonth, earthDay, earthSeconds, mercurySeconds, venusSeconds, marsSeconds, jupiterSeconds)
  {
    this.earthAge = earthAge;
    this.earthYear = earthYear;
    this.earthMonth = earthMonth;
    this.earthDay = earthDay;
    this.earthSeconds = earthSeconds;
    this.mercurySeconds = mercurySeconds;
    this.venusSeconds = venusSeconds;
    this.marsSeconds = marsSeconds;
    this.jupiterSeconds = jupiterSeconds;

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
  ConvertBackToEarthYears()
  {
    let ageInYears = ((((this.earthSeconds / 60) / 60) / 24) / 365);
    return parseFloat(ageInYears.toFixed(2));
  }
  MercuryAgeInSeconds()
  {
    this.mercurySeconds = parseFloat((this.earthSeconds / 0.24).toFixed(2));
    return this.mercurySeconds;
  }
  VenusAgeInSeconds()
  {
    this.venusSeconds = parseFloat((this.earthSeconds / 0.62).toFixed(2));
    return this.venusSeconds;
  }
  MarsAgeInSeconds()
  {
    this.marsSeconds = parseFloat((this.earthSeconds / 1.88).toFixed(2));
    return this.marsSeconds;
  }
  JupiterAgeInSeconds()
  {
    this.jupiterSeconds = parseFloat((this.earthSeconds / 11.86).toFixed(2));
    return this.jupiterSeconds;
  }

}
