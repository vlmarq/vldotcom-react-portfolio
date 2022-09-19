import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import App from './App'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBvtCh3FUJFVSsCWwu9Zw4GHAzshpRJsPA',
	authDomain: 'vanessalamarquedotcom.firebaseapp.com',
	projectId: 'vanessalamarquedotcom',
	storageBucket: 'vanessalamarquedotcom.appspot.com',
	messagingSenderId: '840484783723',
	appId: '1:840484783723:web:9c65ffab198542244bd32e',
	measurementId: 'G-P0VMYX5RZF',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
