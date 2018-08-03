import { GalacticAge } from './../src/galactic-age';

describe('GalacticAge', function()
{
  it('should test if the GetAgeInSeconds method correctly returns the correct estimated number of seconds someone has been alive on earth', function()
  {
    let testAge = new GalacticAge(30)
    expect(946080000).toEqual(testAge.GetAgeInSeconds());
  });
});
