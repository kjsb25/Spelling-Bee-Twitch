import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyC9dfDUasosUUFqLVRkIJAiTgGe41ZsSjQ",
 	authDomain: "spelling-bee-twitch.firebaseapp.com",
 	databaseURL: "https://spelling-bee-twitch-default-rtdb.firebaseio.com",
 });

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export
export default base;