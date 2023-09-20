## Sign Language Translator - React Web Application

## Description
This project demonstrates an implementation of a javascript web applicationn using React. 
The application is a sign language translator that allows a user to create a user by entering a username. 
If a user already exists locally in a browser then that user is the one being signed in otherwise the application creates a new user with the entered username and a unique id.
Then the user can go to a page called translation which allows the user to enter a word consisting of letters a-z and display a hand icon for each letter in the entered word.
The word that the user enters is also stored for that particular user profile.
Furthermore, the user can also navigate to a profile page which displays 10 of the entered words. 
On this page the user is also able to navigate back to the translation page, clear all the stored translations and sign out. 
When the user signs out all the stored translations are removed.

## Project Structure 
The source code of the project is structured in the following way:
 - assets directory: contains all the icons used in the application.
 - routes directory: contains the navigation bar and all the pages of the application that are all functional components.
 - contexts directory: contains a single context which contains a UserContext and a UserProvider allowing all children components to set and get the state of a user object by using react useContext.
 - components directory: contains all the functional components and their corresponding style components that have been used in the application.
 - util directory: contains a single javascript file with functions used to interact with the web API.

In the project all of the components have been created such that they could be reused and only display the information needed and thereby also update when state changes. 
Therefore, the components serve as the building block of the page components in the routes directory. In the index.js file the App component is wrapped inside of the UserProvider which allows all its children to gain access to the user object state using react's useContext. Thus, the components can set and get the user object. Additionally, the components all use functions inside of the web-api.js to set and get the user from the web API. Lastly, some of the components import images files from the assets directory.

## Project Setup
Click on the link to run the application via Github pages:

Runnin the project on a locale machine require the following steps:
1. Clone the repository from the main branch.
2. Open the project in a javascript editor. E.g. Visual Studio Code.

The following Dependencies must be installed using Node Package Manager (npm):
1. In the terminal run 'npm install' followed by the dependencies listed below:
 - styled-components
 - react-router-dom
 - react
 - react-hook-form

## Run Instrucions
1. In the terminal run 'npm start'.
2. Go to the following 'http://localhost:3000' path in a web browser. 

## Application Usage
1. Enter a username of minimum 5 characters and press the 'Login' button. 
  - This will redirect you to the page called translation.
  - The username will appear after the text saying 'Welcome,'.
2. Enter a word of minimum 1 character and press the 'Translate' button.
   - Below the input field a sequence of hand icons will appear corresponding to the text given as an input.
   - When clicking on the 'Translate' button the word entered is stored for the user signed in.
3. By clicking on the icon, next to the text saying 'Click image to view profile', you will be redirected to the profile page.
4. On the profile page a list of 10 entered words will appear with hand icons corresponding to each letter for an entered word.
  - By clicking the 'Clear Translations' button all previous entere will be removed.
  - By clicking on the 'Back' button you will be redirected to the Translation page.
  - By clicking on the 'Logout' button you will be redirected to the Login page and the stored words are removed for the user signed in.

## Authors
Name: Sigurd Schelde Andersen
E-Mail: sigurdschelde@gmail.com

Name: Alexander Jonstrup
E-Mail: Alexander.Jonstrup@outlook.com
