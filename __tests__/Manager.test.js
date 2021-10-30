// using Manager constructor
const Manager = require('../lib/Manager');

// creating manager object
test('creates a Manager object', () => {
    const manager = new Manager('Guillermo', 33, 'guillermo.rodriguez@elmachote.com', 4);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Guillermo', 33, 'guillermo.rodriguez@elmachote.com');

    expect(manager.getRole()).toEqual("Manager");
});