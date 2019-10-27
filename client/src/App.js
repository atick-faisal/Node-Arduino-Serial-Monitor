import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import './App.css';

const interval = 1000;

class App extends Component {
  constructor() {
		super();
		this.state = {
			values: []
		}
	}

	componentWillUnmount() {
		clearInterval(this.timer);
		this.timer = null;
	  }

	componentDidMount() {
		this.timer = setInterval(() => this.getValues(), interval);
	}

	getValues() {
		fetch('/values')
		.then(res => res.json())
		.then(values => this.setState({values}, function() {
			console.log('values fetched...', values);
		}));
  }
  
  render() {
	let color = ['rgba(56, 142, 60,1.0)'];
	for(let i = 0; i < 14; i++) {
		if(this.state.values.map(value => value.d[i])[4]) {
			color[i] = 'rgba(56, 142, 60, 0.5)';
		} else {
			color[i] = 'rgba(216, 67, 21, 0.5)';
		}
	}
    return(
	<div className="App">
        <div className="container">
			<h1>Arduino Serial Monitor</h1>
			<div className="card_container">
				<div className="card">
					<p>{'ADC0 : ' + this.state.values.map(value => value.a0)[4]}</p>
					<div className="chart" height="600px">
						<Bar data = {{
							labels: [1, 2, 3, 4, 5],
							datasets: [{
								type: 'line',
								label: 'null',
								data: this.state.values.map(value => value.a0),
								borderColor: 'rgb(2, 136, 209)',
								backgroundColor: 'rgba(0, 0, 0, 0)',
								borderWidth: 1
							}, 
							{
								type: 'bar',
								label: 'null',
								data: this.state.values.map(value => value.a0),
								backgroundColor: [
									'rgba(255, 99, 132, 0.2)',
									'rgba(54, 162, 235, 0.2)',
									'rgba(255, 206, 86, 0.2)',
									'rgba(75, 192, 192, 0.2)',
									'rgba(153, 102, 255, 0.2)',
									'rgba(255, 159, 64, 0.2)'
								],
								borderColor: [
									'rgba(255, 99, 132, 1)',
									'rgba(54, 162, 235, 1)',
									'rgba(255, 206, 86, 1)',
									'rgba(75, 192, 192, 1)',
									'rgba(153, 102, 255, 1)',
									'rgba(255, 159, 64, 1)'
								],
								borderWidth: 1
							}]
						}}
						height={170}
						options = {{
							responsive: true,
							responsiveAnimationDuration: 400,
							maintainAspectRatio: false,
							legend: {
								display: false
							},
							scales: {
								xAxes: [{ 
									gridLines: {
										display: false,
										color: "#666"
									},
									ticks: {
										fontColor: "#999"
									},
								}],
								yAxes: [{
									gridLines: {
										display: false,
										color: "#666"
									},
									ticks: {
										fontColor: "#999"
										},
								}],
							}
						}}/>
					</div>
				</div>
				<div className="card">
					<p>{'ADC1 : ' + this.state.values.map(value => value.a1)[4]}</p>
					<div className="chart" height="600px">
						<Bar data = {{
							labels: [1, 2, 3, 4, 5],
							datasets: [{
								type: 'line',
								label: 'null',
								data: this.state.values.map(value => value.a1),
								borderColor: 'rgb(2, 136, 209)',
								backgroundColor: 'rgba(0, 0, 0, 0)',
								borderWidth: 1
							}, 
							{
								type: 'bar',
								label: 'null',
								data: this.state.values.map(value => value.a1),
								backgroundColor: [
									'rgba(255, 99, 132, 0.2)',
									'rgba(54, 162, 235, 0.2)',
									'rgba(255, 206, 86, 0.2)',
									'rgba(75, 192, 192, 0.2)',
									'rgba(153, 102, 255, 0.2)',
									'rgba(255, 159, 64, 0.2)'
								],
								borderColor: [
									'rgba(255, 99, 132, 1)',
									'rgba(54, 162, 235, 1)',
									'rgba(255, 206, 86, 1)',
									'rgba(75, 192, 192, 1)',
									'rgba(153, 102, 255, 1)',
									'rgba(255, 159, 64, 1)'
								],
								borderWidth: 1
							}]
						}}
						height={170}
						options = {{
							responsive: true,
							responsiveAnimationDuration: 400,
							maintainAspectRatio: false,
							legend: {
								display: false
							},
							scales: {
								xAxes: [{ 
									gridLines: {
										display: false,
										color: "#666"
									},
									ticks: {
										fontColor: "#999"
									},
								}],
								yAxes: [{
									gridLines: {
										display: false,
										color: "#666"
									},
									ticks: {
										fontColor: "#999"
										},
								}],
							}
						}}/>
					</div>
				</div>
				<div className="card">
				<p>{'ADC2 : ' + this.state.values.map(value => value.a2)[4]}</p>
				<div className="chart" height="600px">
						<Bar data = {{
							labels: [1, 2, 3, 4, 5],
							datasets: [{
								type: 'line',
								label: 'null',
								data: this.state.values.map(value => value.a2),
								borderColor: 'rgb(2, 136, 209)',
								backgroundColor: 'rgba(0, 0, 0, 0)',
								borderWidth: 1
							}, 
							{
								type: 'bar',
								label: 'null',
								data: this.state.values.map(value => value.a2),
								backgroundColor: [
									'rgba(255, 99, 132, 0.2)',
									'rgba(54, 162, 235, 0.2)',
									'rgba(255, 206, 86, 0.2)',
									'rgba(75, 192, 192, 0.2)',
									'rgba(153, 102, 255, 0.2)',
									'rgba(255, 159, 64, 0.2)'
								],
								borderColor: [
									'rgba(255, 99, 132, 1)',
									'rgba(54, 162, 235, 1)',
									'rgba(255, 206, 86, 1)',
									'rgba(75, 192, 192, 1)',
									'rgba(153, 102, 255, 1)',
									'rgba(255, 159, 64, 1)'
								],
								borderWidth: 1
							}]
						}}
						height={170}
						options = {{
							responsive: true,
							responsiveAnimationDuration: 400,
							maintainAspectRatio: false,
							legend: {
								display: false
							},
							scales: {
								xAxes: [{ 
									gridLines: {
										display: false,
										color: "#666"
									},
									ticks: {
										fontColor: "#999"
									},
								}],
								yAxes: [{
									gridLines: {
										display: false,
										color: "#666"
									},
									ticks: {
										fontColor: "#999"
										},
								}],
							}
						}}/>
					</div>
				</div>
			</div>
			<div className="card_container">
				<div className="card">
				<p>{'ADC3 : ' + this.state.values.map(value => value.a3)[4]}</p>
				<div className="chart" height="600px">
						<Bar data = {{
							labels: [1, 2, 3, 4, 5],
							datasets: [{
								type: 'line',
								label: 'null',
								data: this.state.values.map(value => value.a3),
								borderColor: 'rgb(2, 136, 209)',
								backgroundColor: 'rgba(0, 0, 0, 0)',
								borderWidth: 1
							}, 
							{
								type: 'bar',
								label: 'null',
								data: this.state.values.map(value => value.a3),
								backgroundColor: [
									'rgba(255, 99, 132, 0.2)',
									'rgba(54, 162, 235, 0.2)',
									'rgba(255, 206, 86, 0.2)',
									'rgba(75, 192, 192, 0.2)',
									'rgba(153, 102, 255, 0.2)',
									'rgba(255, 159, 64, 0.2)'
								],
								borderColor: [
									'rgba(255, 99, 132, 1)',
									'rgba(54, 162, 235, 1)',
									'rgba(255, 206, 86, 1)',
									'rgba(75, 192, 192, 1)',
									'rgba(153, 102, 255, 1)',
									'rgba(255, 159, 64, 1)'
								],
								borderWidth: 1
							}]
						}}
						height={170}
						options = {{
							responsive: true,
							responsiveAnimationDuration: 400,
							maintainAspectRatio: false,
							legend: {
								display: false
							},
							scales: {
								xAxes: [{ 
									gridLines: {
										display: false,
										color: "#666"
									},
									ticks: {
										fontColor: "#999"
									},
								}],
								yAxes: [{
									gridLines: {
										display: false,
										color: "#666"
									},
									ticks: {
										fontColor: "#999"
										},
								}],
							}
						}}/>
					</div>
				</div>
				<div className="card">
				<p>{'ADC4 : ' + this.state.values.map(value => value.a4)[4]}</p>
				<div className="chart" height="600px">
						<Bar data = {{
							labels: [1, 2, 3, 4, 5],
							datasets: [{
								type: 'line',
								label: 'null',
								data: this.state.values.map(value => value.a4),
								borderColor: 'rgb(2, 136, 209)',
								backgroundColor: 'rgba(0, 0, 0, 0)',
								borderWidth: 1
							}, 
							{
								type: 'bar',
								label: 'null',
								data: this.state.values.map(value => value.a4),
								backgroundColor: [
									'rgba(255, 99, 132, 0.2)',
									'rgba(54, 162, 235, 0.2)',
									'rgba(255, 206, 86, 0.2)',
									'rgba(75, 192, 192, 0.2)',
									'rgba(153, 102, 255, 0.2)',
									'rgba(255, 159, 64, 0.2)'
								],
								borderColor: [
									'rgba(255, 99, 132, 1)',
									'rgba(54, 162, 235, 1)',
									'rgba(255, 206, 86, 1)',
									'rgba(75, 192, 192, 1)',
									'rgba(153, 102, 255, 1)',
									'rgba(255, 159, 64, 1)'
								],
								borderWidth: 1
							}]
						}}
						height={170}
						options = {{
							responsive: true,
							responsiveAnimationDuration: 400,
							maintainAspectRatio: false,
							legend: {
								display: false
							},
							scales: {
								xAxes: [{ 
									gridLines: {
										display: false,
										color: "#666"
									},
									ticks: {
										fontColor: "#999"
									},
								}],
								yAxes: [{
									gridLines: {
										display: false,
										color: "#666"
									},
									ticks: {
										fontColor: "#999"
										},
								}],
							}
						}}/>
					</div>
				</div>
				<div className="card">
				<p>{'ADC5 : ' + this.state.values.map(value => value.a5)[4]}</p>
				<div className="chart" height="600px">
						<Bar data = {{
							labels: [1, 2, 3, 4, 5],
							datasets: [{
								type: 'line',
								label: 'null',
								data: this.state.values.map(value => value.a5),
								borderColor: 'rgb(2, 136, 209)',
								backgroundColor: 'rgba(0, 0, 0, 0)',
								borderWidth: 1
							}, 
							{
								type: 'bar',
								label: 'null',
								data: this.state.values.map(value => value.a5),
								backgroundColor: [
									'rgba(255, 99, 132, 0.2)',
									'rgba(54, 162, 235, 0.2)',
									'rgba(255, 206, 86, 0.2)',
									'rgba(75, 192, 192, 0.2)',
									'rgba(153, 102, 255, 0.2)',
									'rgba(255, 159, 64, 0.2)'
								],
								borderColor: [
									'rgba(255, 99, 132, 1)',
									'rgba(54, 162, 235, 1)',
									'rgba(255, 206, 86, 1)',
									'rgba(75, 192, 192, 1)',
									'rgba(153, 102, 255, 1)',
									'rgba(255, 159, 64, 1)'
								],
								borderWidth: 1
							}]
						}}
						height={170}
						options = {{
							responsive: true,
							responsiveAnimationDuration: 400,
							maintainAspectRatio: false,
							legend: {
								display: false
							},
							scales: {
								xAxes: [{ 
									gridLines: {
										display: false,
										color: "#666"
									},
									ticks: {
										fontColor: "#999"
									},
								}],
								yAxes: [{
									gridLines: {
										display: false,
										color: "#666"
									},
									ticks: {
										fontColor: "#999"
										},
								}],
							}
						}}/>
					</div>
				</div>
			</div>
			<div className="card_container">
				<div className="card" style={{ backgroundColor: color[0]}}>
				<p><b>D0</b></p>
				</div>
				<div className="card" style={{ backgroundColor: color[0]}}>
				<p><b>D1</b></p>
				</div>
				<div className="card" style={{ backgroundColor: color[2]}}>
				<p><b>D2</b></p>
				</div>
				<div className="card" style={{ backgroundColor: color[3]}}>
				<p><b>D3</b></p>
				</div>
				<div className="card" style={{ backgroundColor: color[4]}}>
				<p><b>D4</b></p>
				</div>
				<div className="card" style={{ backgroundColor: color[5]}}>
				<p><b>D5</b></p>
				</div>
				<div className="card" style={{ backgroundColor: color[6]}}>
				<p><b>D6</b></p>
				</div>
				<div className="card" style={{ backgroundColor: color[7]}}>
				<p><b>D7</b></p>
				</div>
				<div className="card" style={{ backgroundColor: color[8]}}>
				<p><b>D8</b></p>
				</div>
				<div className="card" style={{ backgroundColor: color[9]}}>
				<p><b>D9</b></p>
				</div>
				<div className="card" style={{ backgroundColor: color[10]}}>
				<p><b>D10</b></p>
				</div>
				<div className="card" style={{ backgroundColor: color[11]}}>
				<p><b>D11</b></p>
				</div>
				<div className="card" style={{ backgroundColor: color[12]}}>
				<p><b>D12</b></p>
				</div>
				<div className="card" style={{ backgroundColor: color[13]}}>
				<p><b>D13</b></p>
				</div>
			</div>
		</div>
      </div>
    );
  }
}

export default App;
