import React, { Component } from 'react';

class GuessNumber extends Component {
  state = {
    guessed: "",
    secret: "",
    result: ""
  }

//Secret Number
  handleClickSecret = e => {
    console.log(this.state.secret);
    console.log('button clicked!');
    this.setSecret(this.state.secret)
  };

  handleChangeSecret = e => {
    this.setState({
      secret: e.target.value
    });
  };

  setSecret = async param => {
    let url = `http://localhost:3100/setsecret/${param}`
    fetch(
      url,
    )
      .then(res => res.json())
      .then(res => {
        console.log(this.state.secret);
      })
  };

  //Guess Number
  handleClickGuess = e => {
    console.log(this.state.guessed);
    console.log('button clicked!');
    this.guess(this.state.guessed)
  };

  handleChangeGuess = e => {
    this.setState({
      guessed: e.target.value
    });
  };

  guess = async param => {
    let url = `http://localhost:3100/guess/${param}`
    fetch(
      url,

    )
      .then(res => res.json())
      .then(res => {
        this.state.result = res.result;
        console.log(this.state.result);
      })
  };

  render() {
    return (
      <div>

        <div>
          <input
            onChange={this.handleChangeSecret}
            type="number"
            maxLength="4"
            name="secret"
            required
          />
          <input
            onClick={this.handleClickSecret}
            type="button"
            value="Set" />
            <p name="result"></p>
        </div>

        <div>
          <input
            onChange={this.handleChangeGuess}
            type="number"
            maxLength="4"
            name="guessed"
            required
          />
          <input
            onClick={this.handleClickGuess}
            type="button"
            value="Guess" />
        </div>
      </div>
    )
  }
}

export default GuessNumber;