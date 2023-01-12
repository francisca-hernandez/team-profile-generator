const Engineer = require('../lib/Engineer');

test('create engineer', () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe('object');
});