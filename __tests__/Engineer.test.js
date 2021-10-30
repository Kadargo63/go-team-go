// using Engineer constructor
const Engineer = require('../lib/Engineer');

// creating an engineer object
test('creates an Engineer object', () => {
    const engineer = new Engineer('Guillermo', 33, 'guillermo.rodriguez@elmachote.com', 'grodriguez');

    expect(engineer.github).toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Guillermo', 33, 'guillermo.rodriguez@elmachote.com', 'grodriguez');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const engineer = new Engineer('Guillermo', 33, 'guillermo.rodriguez@elmachote.com');

    expect(engineer.getRole()).toEqual("Engineer");
});