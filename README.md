# Team Profile Generator
This is a simple command-line application designed to help you create a team profile page. It prompts you to input information about each member of your team, such as their name, role, ID, email, and role-specific details. The roles available are "Engineer," "Intern," and "Manager."

## How to Use
Make sure you have Node.js installed on your system.

Clone or download this repository.

Open your terminal and navigate to the project directory.

Install the required dependencies by running: npm install
To start the application, run: node index.js

Follow the prompts to enter the information for each team member.

## Code Overview

The main functionality of the application is handled by the JavaScript code in app.js. Here's a brief explanation of the key parts:

The application utilizes Node.js modules like inquirer, path, and fs for user input and file operations.

The render function in page-template.js generates an HTML file using the provided information.

The different roles (Manager, Engineer, Intern) are handled in separate functions (createManager, addEngineer, addIntern) using the inquirer prompts.

The information provided by the user is used to create instances of the corresponding classes (Manager, Engineer, Intern) which are defined in the lib directory.

The buildTeam function creates the output directory and writes the generated HTML file.

## Important Notes
Make sure to provide valid information for each team member.

The generated HTML file will be located in the output folder.

If you want to add more team members, simply follow the prompts.

Enjoy creating your team profile page! If you have any questions or encounter issues, feel free to reach out for assistance.

