    // 04. PROFILE: Public Relations
    
    const Profile = require('./generator');
    
    class Intern extends Profile {
        constructor(name,serial,email,office,github,linkedin,school) {
            super(name,serial,email);
            this.office = office;
            this.github = github;
            this.linkedin = linkedin;
            this.school = school;
        }
        get_role() {
            return "Intern";
        }
        get_office() {
            return this.office;
        }
        get_github() {
            return this.github;
        }
        get_linkedin() {
            return this.linkedin;
        }
        get_school() {
            return this.school;
        }
    }
    
    module.exports = Intern;