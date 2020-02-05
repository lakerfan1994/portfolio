import React from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './Intro';
import MainPage from './MainPage';

class App extends React.Component {
	constructor(){
		super();
		this.state =  {
			displayIntro: true
		}
	}

	endIntro  = () => {
		this.setState({
			displayIntro: false
		});
	}


	render(){
	  let toggleIntro = (this.state.displayIntro) ? <Intro endIntro={this.endIntro} />: <MainPage />
	  return (
	    <div className="App">
	     {toggleIntro}
	    </div>
	  );
	}
}

export default App;
