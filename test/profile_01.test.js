    // 01. TEST PROFILE: Manager
    // This program will test the profile_01.js file and look for errors.

    const Manager = require('../js/profile_01');

    test('Get ROLE with the function get_role()', () => {
        const test_role = 'Manager';
        const manager = new Manager('Motoko',10101,'motoko@ghostintheshell.com');
        expect(manager.get_role()).toBe(test_role);
    });

    test('Get OFFICE with the function get_office()', () => {
        const test_office = 102;
        const manager = new Manager('Motoko',10101,'motoko@ghostintheshell.com',test_office);
        expect(manager.get_office()).toBe(test_office);
    });

    test('Get GITHUB with the function get_github()', () => {
        const test_github = 'major_motoko';
        const manager = new Manager('Motoko',10101,'motoko@ghostintheshell.com',72,test_github);
        expect(manager.get_github()).toBe(test_github);
    });

    test('Get GITHUB with the function get_linkedin()', () => {
        const test_linkedin = 'major_motoko';
        const manager = new Manager('Motoko',10101,'motoko@ghostintheshell.com',72,'major',test_linkedin);
        expect(manager.get_linkedin()).toBe(test_linkedin);
    });

    test('Get GITHUB with the function get_team()', () => {
        const test_team = 'SAC Team';
        const manager = new Manager('Motoko',10101,'motoko@ghostintheshell.com',72,'major','motoko',test_team);
        expect(manager.get_team()).toBe(test_team);
    });