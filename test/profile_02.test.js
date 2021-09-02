    // 02. TEST PROFILE: Engineer
    // This program will test the profile_02.js file and look for errors.
    
    const Engineer = require('../js/profile_02');
    
    test('Get ROLE with the function get_role()', () => {
        const test_role = 'Engineer';
        const engineer = new Engineer('Batou',10101,'batou@ghostintheshell.com');
        expect(engineer.get_role()).toBe(test_role);
    });
    
    test('Get OFFICE with the function get_office()', () => {
        const test_office = 102;
        const engineer = new Engineer('Batou',10101,'batou@ghostintheshell.com',test_office);
        expect(engineer.get_office()).toBe(test_office);
    });
    
    test('Get GITHUB with the function get_github()', () => {
        const test_github = 'engineer_batou';
        const engineer = new Engineer('Batou',10101,'batou@ghostintheshell.com',72,test_github);
        expect(engineer.get_github()).toBe(test_github);
    });
    
    test('Get GITHUB with the function get_linkedin()', () => {
        const test_linkedin = 'engineer_batou';
        const engineer = new Engineer('Batou',10101,'batou@ghostintheshell.com',72,'engineer',test_linkedin);
        expect(engineer.get_linkedin()).toBe(test_linkedin);
    });
    
    test('Get PROJECT with the function get_project()', () => {
        const test_project = 'SAC Team';
        const engineer = new Engineer('Batou',10101,'batou@ghostintheshell.com',72,'engineer','motoko',test_project);
        expect(engineer.get_project()).toBe(test_project);
    });