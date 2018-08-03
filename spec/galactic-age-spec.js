import { GalacticAge } from './../src/galactic-age';

describe('GalacticAge', function()
{
  it('should test if the GetAgeInSeconds method returns the correct estimated number of seconds someone has been alive on earth based on their age alone', function()
  {
    let testAge = new GalacticAge(30)
    expect(946080000).toEqual(testAge.GetAgeInSeconds());
  });
  it('should test if the CompareDatesInSeconds method correctly returns the correct estimated number of seconds between two given dates', function()
  {
    let testLaterDate = new GalacticAge(0, 2018, 7, 3)
    let testEarlierDate = new GalacticAge(0, 2015, 11, 25)
    expect(82339200).toEqual(testLaterDate.CompareDatesInSeconds(testEarlierDate));
  });

});
