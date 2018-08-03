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
    this.earthAge = differenceInSeconds;

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
    this.mercuryLifeExpectancy = parseFloat((this.earthLifeExpectancy / 0.24).toFixed(2));
    this.venusLifeExpectancy = parseFloat((this.earthLifeExpectancy / 0.62).toFixed(2));
    this.marsLifeExpectancy = parseFloat((this.earthLifeExpectancy / 1.88).toFixed(2));
    this.jupiterLifeExpectancy = parseFloat((this.earthLifeExpectancy / 11.86).toFixed(2));
  }
  YearsLeftToLiveOnMercury()
  {
    let life = (this.mercuryYears - this.mercuryLifeExpectancy).toFixed(2);
    if(life < 0)
    {
      let newLife = Math.abs(life);
      return "You have " + newLife + " Mercury Years left to live on Mercury.";
    }
    else
    {
        return "You have outlived the Mercury Life Expectancy by " + life + " years!";
    }
  }
  YearsLeftToLiveOnVenus()
  {
    let life = (this.venusYears - this.venusLifeExpectancy).toFixed(2);
    if(life < 0)
    {
      let newLife = Math.abs(life);
      return "You have " + newLife + " Venus Years left to live on Venus.";
    }
    else
    {
        return "You have outlived the Venus Life Expectancy by " + life + " years!";
    }
  }
  YearsLeftToLiveOnMars()
  {
    let life = (this.marsYears - this.marsLifeExpectancy).toFixed(2);
    if(life < 0)
    {
      let newLife = Math.abs(life);
      return "You have " + newLife + " Mars Years left to live on Mars.";
    }
    else
    {
        return "You have outlived the Mars Life Expectancy by " + life + " years!";
    }
  }
  YearsLeftToLiveOnJupiter()
  {
    let life = (this.jupiterYears - this.jupiterLifeExpectancy).toFixed(2);
    if(life < 0)
    {
      let newLife = Math.abs(life);
      return "You have " + newLife + " Jupiter Years left to live on Jupiter.";
    }
    else
    {
        return "You have outlived the Jupiter Life Expectancy by " + life + " years!";
    }
  }

}
