const model = require('../../models');

describe('Generate', () => {
  beforeEach(async () => {
    await model.shops.truncate();
  });

  it('should make two entries in the database', async () => {
    // await model.shops.generate('S');
    await model.shops.generate('Barista');
    expect(await model.shops.count()).toEqual(1);
  });


  it('should make 4 entries in the database ', async () => {
    await model.shops.generate('Starbucks');
    await model.shops.generate('Barista');
    await model.shops.generate('CafeDay');
    await model.shops.generate('MochaShop');
    expect(await model.shops.count()).toEqual(4);
  });
  it('should throw error if null is passed', async () => {
    expect(await model.shops.generate(null)).toEqual(new Error('Length is invalid'));
  });
  it('should throw error if length of name is less than 4', async () => {
    await model.shops.generate('Ba');
    expect(await model.shops.generate('B')).toEqual(new Error('Length is invalid'));
  });
});
