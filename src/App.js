import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect} from 'react-redux';
import { store, persistor } from './store/index';
import { Provider } from 'react-redux';
import { Dispatch } from 'redux';
import { addSkills, defaultAction } from './actions/skillActions';


const skillArray = [
{'title' : 'java',
 'subSkill':[
 {'title' : 'nodejs'},{'title' : 'reactjs'}]
 },
 {'title' : 'javascript',
 'subSkill':[
 {'title' : 'es6'},{'title' : 'es5'}]
 },
 {'title' : 'Python',
 'subSkill':[
 {'title' : 'nodejs'},{'title' : 'java'}]
 },
 {'title' : 'nodejs',
 'subSkill':[
 {'title' : '.net'},{'title' : 'mongodb'}]
 },
]

class App extends Component {
	constructor(props) {
	super(props);
	}
	
	state = {
		skills: []
	}
	
	componentWillReceiveProps(nextProps) {
		console.log(nextProps)
	if(this.state.skills !== nextProps.skills) {
		this.setState({skills:nextProps.skills})
	}
	}
	
	showSkills = () => {
	console.log(this.state.skills)
	}
	
	addSkills = () => {
	this.props.addSkills(skillArray)
	}
	
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"  />
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
		  <button onClick={()=>this.addSkills()}>Add skills to state</button>
		  <button onClick={()=>this.showSkills()}>Show skills </button>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
return { 
addSkills:(payload) => dispatch(addSkills(payload)),
defaultAction: (payload) => dispatch(defaultAction(payload)),
}
}

const mapStateToProps = (state) => {
	console.log(state.rootReducer.skills)
return {
skills: state.rootReducer.skills
}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
