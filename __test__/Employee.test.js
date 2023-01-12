const Employee = require('../lib/Employee');

test('create employee', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
});