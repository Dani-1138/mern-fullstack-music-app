# MERN Fullstack Music Playlist App with Redux, emotion(Styled-Component), and Redux-Saga

This is a fully functional music playlist application built using the MERN stack, Redux for state management, emotion(Styled-Components) for styling, and Redux-Saga for API handling and also firebase for store music and image of song.

## In this app I used the following:-
MongoDB - store all music information
Express and node - backend control
React - frontend
Redux - efffective management state of application and sharing data between components
Redux-saga - as a middleware to manage side effects such as API calls, handling multiple asynchronous actions, and sharing data among different components.
## Prerequisites
Styled-components - provide dynamic styling capabilities, allowing the styles to change based on the state of the component or other factors. This makes them useful for creating visually appealing and responsive user interfaces that can adapt to different situations. use them in a component-based way, enabling better reusability and maintainability of styling code.
Firebase - for store music and image of song.

- Node.js: https://nodejs.org/en/
- MongoDB: https://www.mongodb.com/
- Firebase: https://firebase.google.com/

## Installation

1. Clone the repository:

$ git clone https://github.com/Dani-1138/mern-fullstack-music-playlist.git


2. Install dependencies:

$ npm install


3. Create a .env file at the root directory of the project with the following contents:

DATABASE=development
PORT=3000
DATABASE_URL=mongodb://localhost:27017/your-database-name
SECRET_KEY=your-secret-key


4. Start the development server:

$ npm run dev


5. Build the application for production:

$ npm run build


## Features

- Creating, editing, and deleting playlists.
- Uploading songs
- Adding and removing songs from playlists.
- Adding and removing songs from favorite
- Searching for songs by title, category and artist.
- Access songs in different way like by category, language
- sort and can access recently released(uploaded) songs) 

## Dependencies

- axios: For making HTTP requests to the backend API.
- react-redux: For binding Redux state to React components.
- redux-saga: For handling side effects such as API requests.
- styled-components: For styling React components.
- firebase: for storage
- react-router-dom: for routing service
- 
-......
## File Structure

├── client
│   ├── public
│   └── src
│       ├── components
│       ├── pages
│       ├── redux
│       ├──----------sagas
│       ├──---------- actions
│       ├──————reducers
│       ├──————store
│       ├── App.jsx
│       └── app.js
├── server
│   ├── configration
│   ├── routes
│   ├── models
│   └── app.js
├── .env

Author - Daniel Demeke 
        Arbaminch university 4th year software engineering student
        danieldemeke92@gmail.com
        
deployed on netlify: https://dani-music.netlify.app/

# This app is created for the purpose of internship project test from addissoftware


