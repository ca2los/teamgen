    // 02. PROFILE: Engineer

    const Profile = require('./generator');

    class Engineer extends Profile {
        constructor(name,serial,email,office,github,linkedin,project) {
            super(name,serial,email);
            this.office = office;
            this.github = github;
            this.linkedin = linkedin;
            this.project = project;
        }
        get_role() {
            return "Engineer";
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
        get_project() {
            return this.project;
        }
    }

    module.exports = Engineer;