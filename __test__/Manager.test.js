const Manager = require('../lib/Manager');

test('create manager', () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe('object');
});