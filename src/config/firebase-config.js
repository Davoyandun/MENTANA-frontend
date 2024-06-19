import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'



const firebaseConfig = {
	apiKey: 'AIzaSyBIHqWYQS4fy2-ZWmhKCRhshqVpCZgfbhQ',
	authDomain: 'mentana-117b3.firebaseapp.com',
	projectId: 'mentana-117b3',
	storageBucket: 'mentana-117b3.appspot.com',
	messagingSenderId: '577507050788',
	appId: '1:577507050788:web:96c067a67ddbe2c8731fb1',
	measurementId: 'G-F9ZJRGE5FL'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)