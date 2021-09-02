    // 05. INQUIRER: Ask and retrieve data

    // Import the Class objects & Constructor data
    const Manager = require('./js/profile_01');
    const Engineer = require('./js/profile_02');
    const Designer = require('./js/profile_03');
    const Intern = require('./js/profile_04');

    // Import the Libraries
    const inquirer = require('inquirer');
    const fs = require('fs');
    const path = require('path');

    const OUTPUT_DIR = path.resolve(__dirname, "dev");
    const outputPath = path.join(OUTPUT_DIR, 'index.html');
    const render = require('./js/html.js');

    // Empty arrays to retrieve data from the program
    const teamMembers = [];

    // Questions
    function appMenu() {

        function team_name() {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name_team',
                    message: 'Name of the team:'
                }
            ]).then(() => {
                team_create();
            })
        }

        function team_create() {
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'type_team_member',
                    message: 'Select the type of team member you want to add?',
                    choices: [
                        'Manager',
                        'Engineer',
                        'Designer',
                        'Intern',
                        'No team members for the moment'
                    ]
                }
            ]).then(user_select => {
                switch (user_select.type_team_member) {
                    case 'Manager':
                        team_manager();
                        break;
                    case 'Engineer':
                        team_engineer();
                        break;
                    case 'Designer':
                        team_designer();
                        break;
                    case 'Intern':
                        team_intern();
                        break;
                    default:
                        buildTeam();
                }
            });
        }

        function team_manager() {
            console.log("Please build your team");
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name_manager',
                    message: 'Name of the manager:'
                },
                {
                    type: 'input',
                    name: 'serial_manager',
                    message: 'Employee ID:'
                },
                {
                    type: 'input',
                    name: 'email_manager',
                    message: 'E-mail:'
                },
                {
                    type: 'input',
                    name: 'office_manager',
                    message: 'Office number:'
                },
                {
                    type: 'input',
                    name: 'github_manager',
                    message: 'GitHub account: @'
                },
                {
                    type: 'input',
                    name: 'linkedin_manager',
                    message: 'LinkedIn account: @'
                },
                {
                    type: 'input',
                    name: 'squad_manager',
                    message: 'In charge of team:'
                }
            ]).then(answers => {
                const manager = new Manager(
                    answers.name_manager,
                    answers.serial_manager,
                    answers.email_manager,
                    answers.office_manager,
                    answers.github_manager,
                    answers.linkedin_manager,
                    answers.squad_manager,
                );
                teamMembers.push(manager);
                team_create();
            });
        }

        function team_engineer() {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name_engineer',
                    message: 'Name of the engineer:'
                },
                {
                    type: 'input',
                    name: 'serial_engineer',
                    message: 'Employee ID:'
                },
                {
                    type: 'input',
                    name: 'email_engineer',
                    message: 'E-mail:'
                },
                {
                    type: 'input',
                    name: 'office_engineer',
                    message: 'Office number:'
                },
                {
                    type: 'input',
                    name: 'github_engineer',
                    message: 'GitHub account: @'
                },
                {
                    type: 'input',
                    name: 'linkedin_engineer',
                    message: 'LinkedIn account: @'
                },
                {
                    type: 'input',
                    name: 'project_engineer',
                    message: 'Current backend project:'
                }
            ]).then(answers => {
                const engineer = new Engineer(
                    answers.name_engineer,
                    answers.serial_engineer,
                    answers.email_engineer,
                    answers.office_engineer,
                    answers.github_engineer,
                    answers.linkedin_engineer,
                    answers.project_engineer,
                );
                teamMembers.push(engineer);
                team_create();
            });
        }

        function team_designer() {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name_designer',
                    message: 'Name of the designer:'
                },
                {
                    type: 'input',
                    name: 'serial_designer',
                    message: 'Employee ID:'
                },
                {
                    type: 'input',
                    name: 'email_designer',
                    message: 'E-mail:'
                },
                {
                    type: 'input',
                    name: 'office_designer',
                    message: 'Office number:'
                },
                {
                    type: 'input',
                    name: 'github_designer',
                    message: 'GitHub account: @'
                },
                {
                    type: 'input',
                    name: 'linkedin_designer',
                    message: 'LinkedIn account: @'
                },
                {
                    type: 'input',
                    name: 'project_designer',
                    message: 'Current software design:'
                }
            ]).then(answers => {
                const designer = new Designer(
                    answers.name_designer,
                    answers.serial_designer,
                    answers.email_designer,
                    answers.office_designer,
                    answers.github_designer,
                    answers.linkedin_designer,
                    answers.project_designer,
                );
                teamMembers.push(designer);
                team_create();
            });
        }

        function team_intern() {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name_intern',
                    message: 'Name of the intern:'
                },
                {
                    type: 'input',
                    name: 'serial_intern',
                    message: 'Employee ID:'
                },
                {
                    type: 'input',
                    name: 'email_intern',
                    message: 'E-mail:'
                },
                {
                    type: 'input',
                    name: 'office_intern',
                    message: 'Office number:'
                },
                {
                    type: 'input',
                    name: 'github_intern',
                    message: 'GitHub account: @'
                },
                {
                    type: 'input',
                    name: 'linkedin_intern',
                    message: 'LinkedIn account: @'
                },
                {
                    type: 'input',
                    name: 'school_intern',
                    message: 'Current school:'
                }
            ]).then(answers => {
                const intern = new Intern(
                    answers.name_intern,
                    answers.serial_intern,
                    answers.email_intern,
                    answers.office_intern,
                    answers.github_intern,
                    answers.linkedin_intern,
                    answers.school_intern,
                );
                teamMembers.push(intern);
                team_create();
            });
        }

        function buildTeam() {
            if (!fs.existsSync(OUTPUT_DIR)) {
                fs.mkdirSync(OUTPUT_DIR)
            }
            fs.writeFileSync(outputPath, render(teamMembers), 'utf-8');
        }

        team_name();
    }
    appMenu();