import { GalacticAge } from './../src/galactic-age';

describe('GalacticAge', function()
{
  it('should test if the EarthAgeToEarthSeconds method returns the correct estimated number of seconds someone has been alive on earth based on their age alone', function()
  {
    let testAge = new GalacticAge(30);
    testAge.EarthAgeToEarthSeconds();
    expect(946080000).toEqual(testAge.earthSeconds);
  });
  it('should test if the CompareDatesInSeconds method correctly returns the correct estimated number of seconds between two given dates', function()
  {
    let testLaterDate = new GalacticAge(0, 2018, 8, 3);
    let testEarlierDate = new GalacticAge(0, 1987, 10, 10);
    expect(971827200).toEqual(testEarlierDate.CompareDatesInSeconds(testLaterDate));
  });
  it('should test if the EarthSecondsToEarthYears method correctly returns the number of earth years baseed on how many earth seconds are in a GalacticAge', function()
  {
    let testDate = new GalacticAge(0, 0, 0, 0, 82339200);
    testDate.EarthSecondsToEarthYears()
    expect(2.61).toEqual(testDate.earthAge);
  });
  it('should test if the MercuryAgeInSeconds method correctly converts a GalacticAges earthSeconds to Mercury seconds', function()
  {
    let testAge = new GalacticAge(30, 1987, 10, 10, 971827200);
    testAge.MercuryAgeInSeconds();
    expect(4049280000).toEqual(testAge.mercurySeconds);
  });
  it('should test if the VenusAgeInSeconds method correctly converts a GalacticAges earthSeconds to Venus seconds', function()
  {
    let testAge = new GalacticAge(30, 1987, 10, 10, 971827200);
    testAge.VenusAgeInSeconds();
    expect(1567463225.81).toEqual(testAge.venusSeconds);
  });
  it('should test if the MarsAgeInSeconds method correctly converts a GalacticAges earthSeconds to Mars seconds', function()
  {
    let testAge = new GalacticAge(30, 1987, 10, 10, 971827200);
    testAge.MarsAgeInSeconds();
    expect(516929361.7).toEqual(testAge.marsSeconds);
  });
  it('should test if the JupiterAgeInSeconds method correctly converts a GalacticAges earthSeconds to Jupiter seconds', function()
  {
    let testAge = new GalacticAge(30, 1987, 10, 10, 971827200);
    testAge.JupiterAgeInSeconds();
    expect(81941585.16).toEqual(testAge.jupiterSeconds);
  });
  it('should test if the MercurySecondsToMercuryYears method correctly converts a GalacticAges mercurySeconds to a Mercury age', function()
  {
    let testAge = new GalacticAge(30, 1987, 10, 10, 971827200);
    testAge.MercuryAgeInSeconds();
    testAge.MercurySecondsToMercuryYears();
    expect(128.4).toEqual(testAge.mercuryYears);
  });
  it('should test if the VenusSecondsToVenusYears method correctly converts a GalacticAges venusSeconds to a Venus age', function()
  {
    let testAge = new GalacticAge(30, 1987, 10, 10, 971827200);
    testAge.VenusAgeInSeconds();
    testAge.VenusSecondsToVenusYears();
    expect(49.7).toEqual(testAge.venusYears);
  });
  it('should test if the MarsSecondsToMarsYears method correctly converts a GalacticAges marsSeconds to a Mars age', function()
  {
    let testAge = new GalacticAge(30, 1987, 10, 10, 971827200);
    testAge.MarsAgeInSeconds();
    testAge.MarsSecondsToMarsYears();
    expect(16.39).toEqual(testAge.marsYears);
  });
  it('should test if the JupiterSecondsToJupiterYears method correctly converts a GalacticAges jupiterSeconds to a Jupiter age', function()
  {
    let testAge = new GalacticAge(30, 1987, 10, 10, 971827200);
    testAge.JupiterAgeInSeconds();
    testAge.JupiterSecondsToJupiterYears();
    expect(2.6).toEqual(testAge.jupiterYears);
  });
  it('should test if the FindOtherPlanetLifeExpectancies method correctly converts a GalacticAges earthLifeExpectancy into all other planets life expectancies', function()
  {
    let testAge = new GalacticAge(30, 1987, 10, 10, 971827200);
    testAge.MercuryAgeInSeconds();
    testAge.MercurySecondsToMercuryYears();
    testAge.VenusAgeInSeconds();
    testAge.VenusSecondsToVenusYears();
    testAge.MarsAgeInSeconds();
    testAge.MarsSecondsToMarsYears();
    testAge.JupiterAgeInSeconds();
    testAge.JupiterSecondsToJupiterYears();
    testAge.SetEarthLifeExpectancy(65);
    testAge.FindOtherPlanetLifeExpectancies();
    expect(270.83).toEqual(testAge.mercuryLifeExpectancy);
    expect(104.84).toEqual(testAge.venusLifeExpectancy);
    expect(34.57).toEqual(testAge.marsLifeExpectancy);
    expect(5.48).toEqual(testAge.jupiterLifeExpectancy);
  });
  it('should test if the YearsLeftToLiveOnMercury method correctly returns how many years someone younger than the life expectancy has left to live, as well as how many years past life expectancy someone older is', function()
  {
    let testAge1 = new GalacticAge(30, 1987, 10, 10, 971827200);
    let testAge2 = new GalacticAge(70, 1947, 10, 10, 2233267200);
    testAge1.MercuryAgeInSeconds();
    testAge1.MercurySecondsToMercuryYears();
    testAge1.SetEarthLifeExpectancy(65);
    testAge1.FindOtherPlanetLifeExpectancies();
    testAge2.MercuryAgeInSeconds();
    testAge2.MercurySecondsToMercuryYears();
    testAge2.SetEarthLifeExpectancy(65);
    testAge2.FindOtherPlanetLifeExpectancies();
    expect("You have 142.43 Mercury Years left to live on Mercury.").toEqual(testAge1.YearsLeftToLiveOnMercury());
    expect("You have outlived the Mercury Life Expectancy by 24.24 years!").toEqual(testAge2.YearsLeftToLiveOnMercury());
  });
  it('should test if the YearsLeftToLiveOnVenus method correctly returns how many years someone younger than the life expectancy has left to live, as well as how many years past life expectancy someone older is', function()
  {
    let testAge1 = new GalacticAge(30, 1987, 10, 10, 971827200);
    let testAge2 = new GalacticAge(70, 1947, 10, 10, 2233267200);
    testAge1.VenusAgeInSeconds();
    testAge1.VenusSecondsToVenusYears();
    testAge1.SetEarthLifeExpectancy(65);
    testAge1.FindOtherPlanetLifeExpectancies();
    testAge2.VenusAgeInSeconds();
    testAge2.VenusSecondsToVenusYears();
    testAge2.SetEarthLifeExpectancy(65);
    testAge2.FindOtherPlanetLifeExpectancies();
    expect("You have 55.14 Venus Years left to live on Venus.").toEqual(testAge1.YearsLeftToLiveOnVenus());
    expect("You have outlived the Venus Life Expectancy by 9.38 years!").toEqual(testAge2.YearsLeftToLiveOnVenus());
  });
  it('should test if the YearsLeftToLiveOnMars method correctly returns how many years someone younger than the life expectancy has left to live, as well as how many years past life expectancy someone older is', function()
  {
    let testAge1 = new GalacticAge(30, 1987, 10, 10, 971827200);
    let testAge2 = new GalacticAge(70, 1947, 10, 10, 2233267200);
    testAge1.MarsAgeInSeconds();
    testAge1.MarsSecondsToMarsYears();
    testAge1.SetEarthLifeExpectancy(65);
    testAge1.FindOtherPlanetLifeExpectancies();
    testAge2.MarsAgeInSeconds();
    testAge2.MarsSecondsToMarsYears();
    testAge2.SetEarthLifeExpectancy(65);
    testAge2.FindOtherPlanetLifeExpectancies();
    expect("You have 18.18 Mars Years left to live on Mars.").toEqual(testAge1.YearsLeftToLiveOnMars());
    expect("You have outlived the Mars Life Expectancy by 3.10 years!").toEqual(testAge2.YearsLeftToLiveOnMars());
  });
  it('should test if the YearsLeftToLiveOnJupiter method correctly returns how many years someone younger than the life expectancy has left to live, as well as how many years past life expectancy someone older is', function()
  {
    let testAge1 = new GalacticAge(30, 1987, 10, 10, 971827200);
    let testAge2 = new GalacticAge(70, 1947, 10, 10, 2233267200);
    testAge1.JupiterAgeInSeconds();
    testAge1.JupiterSecondsToJupiterYears();
    testAge1.SetEarthLifeExpectancy(65);
    testAge1.FindOtherPlanetLifeExpectancies();
    testAge2.JupiterAgeInSeconds();
    testAge2.JupiterSecondsToJupiterYears();
    testAge2.SetEarthLifeExpectancy(65);
    testAge2.FindOtherPlanetLifeExpectancies();
    expect("You have 2.88 Jupiter Years left to live on Jupiter.").toEqual(testAge1.YearsLeftToLiveOnJupiter());
    expect("You have outlived the Jupiter Life Expectancy by 0.49 years!").toEqual(testAge2.YearsLeftToLiveOnJupiter());
  });
});
