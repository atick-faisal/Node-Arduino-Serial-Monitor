import React, { Component } from 'react';
import './App.css';

// interval between refresh
const interval = 500;

class App extends Component {
  constructor() {
		super();
		this.state = {
			values: []
		}
	}

	// when component fetched reset the timer
	componentWillUnmount() {
		clearInterval(this.timer);
		this.timer = null;
	  }

	// send get reuest every 1sec
	componentDidMount() {
		this.timer = setInterval(() => this.getValues(), interval);
	}

	// get the values from the response and set the state
	getValues() {
		// When using the app locally
		fetch('/values')
		
		// When using the app globally
		//fetch('https://us-east-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/sensor-dashboard-fyqrv/service/http/incoming_webhook/webhook0')
		.then(res => res.json())
		.then(values => this.setState({values}, function() {
			console.log('values fetched...', values);
			console.log(process.env.ip);
		}));
  }
  
  render() {
    return(
      <div className="App">
        <h1>
          {this.state.values.value}
        </h1>
      </div>
    );
  }
}

export default App;
