    // 03. TEST PROFILE: Intern
    // This program will test the profile_04.js file and look for errors.
    
    const Intern = require('../js/profile_04');
    
    test('Get ROLE with the function get_role()', () => {
        const test_role = 'Intern';
        const intern = new Intern('Hideo',10101,'hideo@ghostintheshell.com');
        expect(intern.get_role()).toBe(test_role);
    });
    
    test('Get OFFICE with the function get_office()', () => {
        const test_office = 102;
        const intern = new Intern('Hideo',10101,'hideo@ghostintheshell.com',test_office);
        expect(intern.get_office()).toBe(test_office);
    });
    
    test('Get GITHUB with the function get_github()', () => {
        const test_github = 'intern_hideo';
        const intern = new Intern('Hideo',10101,'hideo@ghostintheshell.com',72,test_github);
        expect(intern.get_github()).toBe(test_github);
    });
    
    test('Get GITHUB with the function get_linkedin()', () => {
        const test_linkedin = 'intern_hideo';
        const intern = new Intern('Hideo',10101,'hideo@ghostintheshell.com',72,'intern',test_linkedin);
        expect(intern.get_linkedin()).toBe(test_linkedin);
    });
    
    test('Get SCHOOL with the function get_school()', () => {
        const test_project = 'SAC Team';
        const intern = new Intern('Hideo',10101,'hideo@ghostintheshell.com',72,'intern','hideo',test_project);
        expect(intern.get_school()).toBe(test_project);
    });