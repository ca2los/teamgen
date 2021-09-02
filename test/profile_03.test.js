    // 03. TEST PROFILE: Designer
    // This program will test the profile_03.js file and look for errors.
    
    const Designer = require('../js/profile_03');
    
    test('Get ROLE with the function get_role()', () => {
        const test_role = 'Designer';
        const designer = new Designer('Togusa',10101,'togusa@ghostintheshell.com');
        expect(designer.get_role()).toBe(test_role);
    });
    
    test('Get OFFICE with the function get_office()', () => {
        const test_office = 102;
        const designer = new Designer('Togusa',10101,'togusa@ghostintheshell.com',test_office);
        expect(designer.get_office()).toBe(test_office);
    });
    
    test('Get GITHUB with the function get_github()', () => {
        const test_github = 'designer_togusa';
        const designer = new Designer('Togusa',10101,'togusa@ghostintheshell.com',72,test_github);
        expect(designer.get_github()).toBe(test_github);
    });
    
    test('Get GITHUB with the function get_linkedin()', () => {
        const test_linkedin = 'designer_togusa';
        const designer = new Designer('Togusa',10101,'togusa@ghostintheshell.com',72,'designer',test_linkedin);
        expect(designer.get_linkedin()).toBe(test_linkedin);
    });
    
    test('Get DESIGN with the function get_design()', () => {
        const test_project = 'SAC Team';
        const designer = new Designer('Togusa',10101,'togusa@ghostintheshell.com',72,'designer','togusa',test_project);
        expect(designer.get_design()).toBe(test_project);
    });