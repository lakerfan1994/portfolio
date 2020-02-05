import React from 'react';
import './Intro.css';
import Interval from 'react-interval-rerender';


let introductions = ['Hi there!', "I'm Chuck Okonkwo", 'Im a avid basketball fan, PC gamer, HBO aficionado, and spaghetti connoisseur', 'Most importantly, I am a web developer', 'Welcome to my website!!'
];
let tracker = -1;
class Intro extends React.Component {
	constructor() {
		super();
		this.state = {
		}

	}

	continueIntro = () => {
		tracker = tracker + 1;
		if(tracker === introductions.length){
			this.props.endIntro();
		}
		return(<h1 className='intro-h1'>{introductions[tracker]}</h1>);	
	}


	render() {
		return(
			<div className='black-background'>
			  <Interval delay={5000}>
   				{this.continueIntro}
  			  </Interval>
  			  <button onClick={this.props.endIntro}>Skip Intro</button>
			</div>
			)
	}
}

export default Intro;