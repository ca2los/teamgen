    // 03. PROFILE: Public Relations
    
    const Profile = require('./generator');

    class Designer extends Profile {
        constructor(name,serial,email,office,github,linkedin,design) {
            super(name,serial,email);
            this.office = office;
            this.github = github;
            this.linkedin = linkedin;
            this.design = design;
        }
        get_role() {
            return "Designer";
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
        get_design() {
            return this.design;
        }
    }

    module.exports = Designer;