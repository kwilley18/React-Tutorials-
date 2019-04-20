import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './TodoItem'
import ContactCard from './ContactCard'
import Joke from './Joke'

function App() {
	return (
			<div>
				<Joke 
					question="What's the difference between roast beef and pea soup?"
					punchLine="Anyone can roast beef, but no one can pee soup!"
				/>
				<Joke 
					question="Where are cows allowed to watch films?"
					punchLine="At the MOOOVIES"
				/>

			</div>
	)
}

/*function App() {
	return (
		<div className="contacts">
			<ContactCard 
				contact ={{name: "Kristian Willey", imgUrl: "http://www.pexels.com/photo/beautiful-beauty-blue-bright-414612/", phone: "(702) 219-0557", email: "kristianwilley@gmail.com"}}

					/>
			<ContactCard 
				contact ={{name: "Kristian Willey", imgUrl: "https://www.pexels.com/photo/beautiful-beauty-blue-bright-414612/", phone: "(702) 219-0557", email: "kristianwilley@gmail.com"}}

					/>
			<ContactCard 
				contact ={{name: "Kristian Willey", imgUrl: "https://www.pexels.com/photo/beautiful-beauty-blue-bright-414612/", phone: "(702) 219-0557", email: "kristianwilley@gmail.com"}}
		
					/>
			<ContactCard 
				contact ={{name: "Kristian Willey", imgUrl: "https://www.pexels.com/photo/beautiful-beauty-blue-bright-414612/", phone: "(702) 219-0557", email: "kristianwilley@gmail.com"}}
	
					/>
	
		</div>

	)
}*/ 

/*function App(){
	return (
		<div  class = "todo-list">
			<TodoItem />
			<TodoItem />
		</div>
	
	
	)
}*/ 
/*class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}*/ 

export default App;
