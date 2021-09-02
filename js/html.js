    // 06. HTML Generator

    const team_generator = team => {

        const generate_manager = manager => {
            return `
                <section class="box">
                    <ul class="title">
                        <li class="name">${manager.get_name()}</li>
                        <li class="employee">${manager.get_role()}</li>
                    </ul>
                    <ul class="data">
                        <li class="serial">ID: ${manager.get_serial()}</li>
                        <li class="email">${manager.get_email()}</li>
                        <li class="github"><a href="https://github.com/${manager.get_github()}" target="_blank">@${manager.get_github()}</a></li>
                        <li class="linkedin"><a href="https://www.linkedin.com/in/${manager.get_linkedin()}" target="_blank">@${manager.get_linkedin()}</a></li>
                        <li class="office">Office: ${manager.get_office()}</li>
                        <li class="extra">Team ${manager.get_team()}</li>
                    </ul>
                </section>
            `;
        };

        const generate_engineer = engineer => {
            return `
                <section class="box">
                    <ul class="title">
                        <li class="name">${engineer.get_name()}</li>
                        <li class="employee">${engineer.get_role()}</li>
                    </ul>
                    <ul class="data">
                        <li class="serial">ID: ${engineer.get_serial()}</li>
                        <li class="email">${engineer.get_email()}</li>
                        <li class="github"><a href="https://github.com/${engineer.get_github()}" target="_blank">@${engineer.get_github()}</a></li>
                        <li class="linkedin"><a href="https://www.linkedin.com/in/${engineer.get_linkedin()}" target="_blank">@${engineer.get_linkedin()}</a></li>
                        <li class="office">Office: ${engineer.get_office()}</li>
                        <li class="extra">Developing ${engineer.get_project()}</li>
                    </ul>
                </section>
            `;
        };

        const generate_designer = designer => {
            return `
                <section class="box">
                    <ul class="title">
                        <li class="name">${designer.get_name()}</li>
                        <li class="employee">Software ${designer.get_role()}</li>
                    </ul>
                    <ul class="data">
                        <li class="serial">ID: ${designer.get_serial()}</li>
                        <li class="email">${designer.get_email()}</li>
                        <li class="github"><a href="https://github.com/${designer.get_github()}" target="_blank">@${designer.get_github()}</a></li>
                        <li class="linkedin"><a href="https://www.linkedin.com/in/${designer.get_linkedin()}" target="_blank">@${designer.get_linkedin()}</a></li>
                        <li class="office">Office: ${designer.get_office()}</li>
                        <li class="extra">BackEnd ${designer.get_design()}</li>
                    </ul>
                </section>
            `;
        };

        const generate_intern = intern => {
            return `
                <section class="box">
                    <ul class="title">
                        <li class="name">${intern.get_name()}</li>
                        <li class="employee">${intern.get_role()}</li>
                    </ul>
                    <ul class="data">
                        <li class="serial">ID: ${intern.get_serial()}</li>
                        <li class="email">${intern.get_email()}</li>
                        <li class="github"><a href="https://github.com/${intern.get_github()}" target="_blank">@${intern.get_github()}</a></li>
                        <li class="linkedin"><a href="https://www.linkedin.com/in/${intern.get_linkedin()}" target="_blank">@${intern.get_linkedin()}</a></li>
                        <li class="office">Office: ${intern.get_office()}</li>
                        <li class="extra">School: ${intern.get_school()}</li>
                    </ul>
                </section>
            `;
        };

        const html = [];
        html.push(team
            .filter(employee => employee.get_role() === "Manager")
            .map(manager => generate_manager(manager))
        );
        html.push(team
            .filter(employee => employee.get_role() === "Engineer")
            .map(engineer => generate_engineer(engineer))
            .join("")
        );
        html.push(team
            .filter(employee => employee.get_role() === "Designer")
            .map(designer => generate_designer(designer))
            .join("")
        );
        html.push(team
            .filter(employee => employee.get_role() === "Intern")
            .map(intern => generate_intern(intern))
            .join("")
        );
        return html.join("");
    }

    module.exports = team => {
        return `
        <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                    <title>Team Generator</title>
                    <link rel="icon" type="image/png" href="./img/favicon.png">
                    <link rel="stylesheet" type="text/css" href="./css/styles.min.css">
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto+Slab&display=swap" rel="stylesheet">
                </head>
                <body>
                    <header>
                        <section>
                            <ul>
                                <li>
                                    <a href="https://github.com/ca2los/agenda">
                                        <img src="./img/github_icon_black.png" alt="GitHub Logo"/>
                                    </a>
                                </li>
                                <li>
                                    <p>
                                        <a href="https://github.com/ca2los/weather">/ca2los</a>
                                    </p>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <ul>
                                <li>
                                    <button type="reset" onclick="location.href='https://github.com/ca2los/weather'">GitHub Repository</button>
                                </li>
                            </ul>
                        </section>
                    </header>
                    <main>
                        <section class="header-team"><h1>Team Generator</h1></section>
                        ${team_generator(team)}
                    </main>
                    <footer>
                        <section class="container">
                            <section class="columns">
                                <img src="./img/avatar.jpg" alt="Profile photo">
                            </section>
                            <section class="columns">
                                <h1><a href="https://github.com/ca2los" target="_blank">ca2los</a></h1>
                                <button type="reset" onclick="location.href='https://github.com/ca2los/weather'">GitHub Repository</button>
                                <p><strong>Description:</strong> Figuring out...</p>
                            </section>
                        </section>
                    </footer>
                </body>
            </html>
        `;
    };