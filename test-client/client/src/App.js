import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';

class App extends Component {
  state = {
    response: '',
    responseToPost: '',
    tournamentname: '',
    date: '',
    level: '',
    style: '',
    location: '',
    tournamentflier: '',
    tournamentlogos: '',
    numberofgyms: '',
    numberofmats: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/host/getHostPage');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/host/postHostPage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        tournamentname: this.state.tournamentname,
    date: this.state.date,
    level: this.state.level,
    style: this.state.style,
    location: this.state.location,
    tournamentflier: this.state.tournamentflier,
    tournamentlogos: this.state.tournamentlogos,
    numberofgyms: this.state.numberofgyms,
    numberofmats: this.state.numberofmats,
      
      }),
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };

render() {
    return (
      <div className="App">
        <h1><strong>{this.state.response}</strong></h1>
        <form onSubmit={this.handleSubmit}>
          <p>tournamentname
          <input
            type="text"
            value={this.state.tournamentname}
            onChange={e => this.setState({ tournamentname: e.target.value })}
          /></p>
          <p>date
          <input
            type="text"
            value={this.state.date}
            onChange={e => this.setState({ date: e.target.value })}
          /></p>
          <p>level
          <input
            type="text"
            value={this.state.level}
            onChange={e => this.setState({ level: e.target.value })}
          /></p>
          <p>style
          <input
            type="text"
            value={this.state.style}
            onChange={e => this.setState({ style: e.target.value })}
          /></p>
          <p>location
          <input
            type="text"
            value={this.state.location}
            onChange={e => this.setState({ location: e.target.value })}
          /></p>
          <p>tournamentflier
          <input
            type="text"
            value={this.state.tournamentflier}
            onChange={e => this.setState({ tournamentflier: e.target.value })}
          /></p>
          <p>tournamentlogos
          <input
            type="text"
            value={this.state.tournamentlogos}
            onChange={e => this.setState({ tournamentlogos: e.target.value })}
          /></p>
          <p>numberofgyms
          <input
            type="text"
            value={this.state.numberofgyms}
            onChange={e => this.setState({ numberofgyms: e.target.value })}
          /></p>
          <p>numberofmats
          <input
            type="text"
            value={this.state.numberofmats}
            onChange={e => this.setState({ numberofmats: e.target.value })}
          /></p>

          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default App;