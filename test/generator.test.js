    // 00. TEST PROFILE: Core
    // This program will test the generator.js file and look for errors.

    const Profile = require('../js/generator');

    test('Initialize the Profile test',() => {
        const profile = new Profile();
        expect(typeof(profile)).toBe('object');
    });

    /*test('Test NAME with the value...', () => {
        const test_name = 'Motoko';
        const profile = new Profile(test_name);
        expect(profile.name).toBe(test_name);
    });
    test('Test SERIAL with the value...', () => {
        const test_serial = 10101;
        const profile = new Profile(test_serial);
        expect(profile.serial).toBe(test_serial);
    });
    test('Test E-MAIL with the value...', () => {
        const test_email = 'motoko@ghostintheshell.com';
        const profile = new Profile(test_email);
        expect(profile.email).toBe(test_email);
    });*/

    test('Get NAME with the function get_name()', () => {
        const test_name = 'Motoko';
        const profile = new Profile(test_name);
        expect(profile.get_name()).toBe(test_name);
    });

    test('Get SERIAL with the function get_serial()', () => {
        const test_serial = 10101;
        const profile = new Profile('Motoko',test_serial);
        expect(profile.get_serial()).toBe(test_serial);
    });

    test('Get E-MAIL with the function get_email()', () => {
        const test_email = 'motoko@ghostintheshell.com';
        const profile = new Profile('Motoko',10101,test_email);
        expect(profile.get_email()).toBe(test_email);
    });

    test('Get ROLE with the function get_role()', () => {
        const test_role = 'Employee';
        const profile = new Profile('Motoko',10101,'motoko@ghostintheshell.com');
        expect(profile.get_role()).toBe(test_role);
    });