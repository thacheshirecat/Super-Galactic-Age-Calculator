export class GalacticAge
{
  constructor(earthAge, earthYear, earthMonth, earthDay, earthSeconds, mercurySeconds, mercuryYears, venusSeconds, venusYears, marsSeconds, marsYears, jupiterSeconds, jupiterYears, earthLifeExpectancy, mercuryLifeExpectancy, venusLifeExpectancy, marsLifeExpectancy, jupiterLifeExpectancy)
  {
    this.earthAge = earthAge;
    this.earthYear = earthYear;
    this.earthMonth = earthMonth;
    this.earthDay = earthDay;
    this.earthSeconds = earthSeconds;
    this.mercurySeconds = mercurySeconds;
    this.mercuryYears = mercuryYears;
    this.venusSeconds = venusSeconds;
    this.venusYears = venusYears;
    this.marsSeconds = marsSeconds;
    this.marsYears = marsYears;
    this.jupiterSeconds = jupiterSeconds;
    this.jupiterYears = jupiterYears;
    this.earthLifeExpectancy = earthLifeExpectancy;
    this.mercuryLifeExpectancy = mercuryLifeExpectancy;
    this.venusLifeExpectancy = venusLifeExpectancy;
    this.marsLifeExpectancy = marsLifeExpectancy;
    this.jupiterLifeExpectancy = jupiterLifeExpectancy;
  }
  EarthAgeToEarthSeconds()
  {
    this.earthSeconds = ((((this.earthAge * 365) * 24) * 60) * 60);
  }
  CompareDatesInSeconds(laterDate)
  {
    let yearDifference = (((((laterDate.earthYear - this.earthYear) * 365) * 24) * 60) * 60);
    let monthDifference = (((((laterDate.earthMonth - this.earthMonth) * 30) * 24) * 60) * 60);
    let dayDifference = ((((laterDate.earthDay - this.earthDay) * 24) * 60) * 60);

    let differenceInSeconds = yearDifference + monthDifference + dayDifference;
    laterDate.earthAge = differnceInSeconds;

    return differenceInSeconds;
  }
  EarthSecondsToEarthYears()
  {
    this.earthAge = parseFloat(((((this.earthSeconds / 60) / 60) / 24) / 365).toFixed(2));
  }
  MercuryAgeInSeconds()
  {
    this.mercurySeconds = parseFloat((this.earthSeconds / 0.24).toFixed(2));
  }
  MercurySecondsToMercuryYears()
  {
    this.mercuryYears = parseFloat(((((this.mercurySeconds / 60) / 60) / 24) / 365).toFixed(2));
  }
  VenusAgeInSeconds()
  {
    this.venusSeconds = parseFloat((this.earthSeconds / 0.62).toFixed(2));
  }
  VenusSecondsToVenusYears()
  {
    this.venusYears = parseFloat(((((this.venusSeconds / 60) / 60) / 24) / 365).toFixed(2));
  }
  MarsAgeInSeconds()
  {
    this.marsSeconds = parseFloat((this.earthSeconds / 1.88).toFixed(2));
  }
  MarsSecondsToMarsYears()
  {
    this.marsYears = parseFloat(((((this.marsSeconds / 60) / 60) / 24) / 365).toFixed(2));
  }
  JupiterAgeInSeconds()
  {
    this.jupiterSeconds = parseFloat((this.earthSeconds / 11.86).toFixed(2));
  }
  JupiterSecondsToJupiterYears()
  {
    this.jupiterYears = parseFloat(((((this.jupiterSeconds / 60) / 60) / 24) / 365).toFixed(2));
  }
  SetEarthLifeExpectancy(age)
  {
    this.earthLifeExpectancy = age;
  }
  FindOtherPlanetLifeExpectancies()
  {

  }

}
