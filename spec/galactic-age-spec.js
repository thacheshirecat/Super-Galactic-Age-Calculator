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
    let testLaterDate = new GalacticAge(0, 2018, 7, 3);
    let testEarlierDate = new GalacticAge(0, 2015, 11, 25);
    expect(82339200).toEqual(testEarlierDate.CompareDatesInSeconds(testLaterDate));
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
    testAge.VenusSecondsToVenusYears()
    expect(49.7).toEqual(testAge.venusYears);
  });
  it('should test if the MarsSecondsToMarsYears method correctly converts a GalacticAges marsSeconds to a Mars age', function()
  {
    let testAge = new GalacticAge(30, 1987, 10, 10, 971827200);
    testAge.MarsAgeInSeconds();
    testAge.MarsSecondsToMarsYears()
    expect(16.39).toEqual(testAge.marsYears);
  });
  it('should test if the JupiterSecondsToJupiterYears method correctly converts a GalacticAges jupiterSeconds to a Jupiter age', function()
  {
    let testAge = new GalacticAge(30, 1987, 10, 10, 971827200);
    testAge.JupiterAgeInSeconds();
    testAge.JupiterSecondsToJupiterYears()
    expect(2.6).toEqual(testAge.jupiterYears);
  });

});
