    // 00. PROFILE: Core
    
    class Profile {
        constructor(name,serial,email) {
            this.name = name;
            this.serial = serial;
            this.email = email;
        }

        get_name() {
            return this.name;
        }
        get_serial() {
            return this.serial;
        }
        get_email() {
            return this.email;
        }
        get_role() {
            return "Employee";
        }
    }

    module.exports = Profile;

    // The 'Profile' class holding the 'constructor' operator is setting the parameters to start building specific roles.
    // The 'team' function prints the data into the console to check if the data has been returned.