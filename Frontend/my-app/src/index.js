import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// ---> below is the setup for clerk

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.js'
// import './index.css'
// import { ClerkProvider } from '@clerk/clerk-react'

// // Import your Publishable Key
// const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key")
// }

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
//     <App />
//   </ClerkProvider>
)