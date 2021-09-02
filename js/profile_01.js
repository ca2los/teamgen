    // 01. PROFILE: Manager

    const Profile = require('./generator');

    class Manager extends Profile {
        constructor(name,serial,email,office,github,linkedin,team) {
            super(name,serial,email);
            this.office = office;
            this.github = github;
            this.linkedin = linkedin;
            this.team = team; 
        }
        get_role() {
            return "Manager";
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
        get_team() {
            return this.team;
        }
    }

    module.exports = Manager;