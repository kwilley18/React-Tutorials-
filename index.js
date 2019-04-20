import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';




/*function TimeOfDay(){
	const firstName = "Kristian"
	const lastName = "Willey"
	const date = new Date(2018,6,31,15) // year, month, day, hour
	const hours = date.getHours()
	let amORpm
	let timeOfDay
	
	const styles = {
		fontSize: 30
	}
	
	if( hours < 12) {
		timeOfDay = "morning"
		amORpm = "am"
	}
	else if( hours >= 12 && hours <=17) {
		timeOfDay = "afternoon"
		amORpm = "pm"

	}
	else {
		timeOfDay = "night"
		amORpm = "pm"

	}
	
	return (
			<div>
				<h1>Good {timeOfDay}! It is {date.getHours() + amORpm}. The year is {date.getFullYear()}</h1>
			</div>
			/*<div>
				<center><h1>{firstName + " " + lastName}</h1>
					<h2>The time is {date.getHours() % 12}</h2>
					<h2>Bachelors of Science in Computer Science and Engineering</h2>

				<ul>
					<li>Web Design</li>
					<li>Game Design</li>
					<p>I am a web developer. I am familiar with HTML5, CSS5, PHP, and JavaScript.</p>
				</ul></center>
		   
		   
		   	</div>
		   
		   ); 
}*/ 

ReactDOM.render(<App />, document.getElementById('root')); // shows "App" function on page

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
