# Instruction to install and run application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Initial Installs

In root terminal use the commands
1. `npm install`
2. `npm install @mui/material @emotion/react @emotion/styled`

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Design decisions
## Graphical User Interface (GUI)
I choose to build my GUI using MUI for quick and appealing user experience. Building a centered panel for the user to select the needed Guest, Company, and Message (If they don't want to create a personalized message).

# Language and Tools
## I wrote application using React.js, JavaScript, and MUI. 
Why React?
- React is a component-base architecture that allows developer to break down complex UIs into small parts, build, test, and redeploy to a larger parent application. For this assignment, I felt that this UI would be a small part of a larger program, making React an optimal choice. 

Why JavaScript?
- JavaScript is primarily used to create dynamic websites. Facebook and now Meta design React to use JavaScript or more exactly JavaScript XML (JSX).

Why MUI?
- MUI is a great tool to build user interfaces fast and efficiently.

# How I verify correctness?
I tend to listen a lot to my terminals while writing code; wether thats writing console.logs or interpreting errors and warning. 

Once the application is in a working state; I quickly attempt to break it by putting in incorrect inputs or disregarding the typical route a user would interact with my application. This helps me locate and address problems on solo projects but in a group setting; I like test oriented application development using jest. 

# What did I not get to?
For objective 6; "enter in a new message" made me want to write new messages into the JSON file of MessageTemplates. I think the functionality would be a huge plus; however, the feature could clutter the MessageTemplates with poor quality messages. This would allow me to demonstrate the ability to manipulate json files via creating, updating, and deleting messages. 

Beyond the scope of the project; I would like to incorporate SMS api to send the user generated message to the guest. Using Node.js and Twilio api; this goal would be attainable in two to three more hours of reading documentation and programming.  


