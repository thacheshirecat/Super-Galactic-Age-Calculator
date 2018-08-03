import { GalacticAge } from './../src/galactic-age';

describe('GalacticAge', function()
{
  it('should test if the GetAgeInSeconds method returns the correct estimated number of seconds someone has been alive on earth based on their age alone', function()
  {
    let testAge = new GalacticAge(30);
    expect(946080000).toEqual(testAge.GetAgeInSeconds());
  });
  it('should test if the CompareDatesInSeconds method correctly returns the correct estimated number of seconds between two given dates', function()
  {
    let testLaterDate = new GalacticAge(0, 2018, 7, 3);
    let testEarlierDate = new GalacticAge(0, 2015, 11, 25);
    expect(82339200).toEqual(testEarlierDate.CompareDatesInSeconds(testLaterDate));
  });
  it('should test if the ConvertBackToYears method correctly returns the number of years baseed on how many seconds are in a GalacticAge', function()
  {
    let testDate = new GalacticAge(0, 0, 0, 0, 82339200);
    expect(2.61).toEqual(testDate.ConvertBackToYears());
  });
  it('should test if the MercuryAgeInSeconds method correctly converts a GalacticAges earthSeconds to Mercury seconds', function()
  {
    let testAge = (30, 1987, 10, 10, 971827200);
    expect(4049280000).toEqual(testAge.MercuryAgeInSeconds())
  });
  it('should test if the VenusAgeInSeconds method correctly converts a GalacticAges earthSeconds to Venus seconds', function()
  {
    let testAge = (30, 1987, 10, 10, 971827200);
    expect(1567463225.80).toEqual(testAge.VenusAgeInSeconds())
  });
  it('should test if the MarsAgeInSeconds method correctly converts a GalacticAges earthSeconds to Mars seconds', function()
  {
    let testAge = (30, 1987, 10, 10, 971827200);
    expect(516929361.70).toEqual(testAge.MarsAgeInSeconds())
  });
  it('should test if the JupiterAgeInSeconds method correctly converts a GalacticAges earthSeconds to Jupiter seconds', function()
  {
    let testAge = (30, 1987, 10, 10, 971827200);
    expect(81941585.16).toEqual(testAge.JupiterAgeInSeconds())
  });

});
