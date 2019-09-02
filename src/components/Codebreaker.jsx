import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles/styles.css";

class GuessNumber extends Component {
  constructor() {
    super();
    this.secretInput = React.createRef();
  }

  state = {
    secret: "",
    startMessage: "",
    guessed: "",
    result: ""
  };

  //Secret Number
  handleClickSecret = e => {
    console.log(this.state.secret);
    console.log("button clicked!");
    this.setSecret(this.state.secret);
    console.log(this.secretInput);
    this.secretInput.current.value = "";
  };

  handleChangeSecret = e => {
    this.setState({
      secret: e.target.value
    });
  };

  setSecret = async param => {
    let url = `https://codebreakergame.herokuapp.com/setsecret/${param}`;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({ startMessage: res.message });
        console.log(this.state);
        ReactDOM.render(
          <h5>{this.state.startMessage}</h5>,
          document.getElementById("startMessage")
        );
      });
  };

  //Guess Number
  handleClickGuess = e => {
    console.log(this.state.guessed);
    console.log("button clicked!");
    this.guess(this.state.guessed);
  };

  handleChangeGuess = e => {
    this.setState({
      guessed: e.target.value
    });
  };

  guess = async param => {
    let url = `https://codebreakergame.herokuapp.com/guess/${param}`;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({ result: res.result });
        console.log(this.state);
        ReactDOM.render(
          <h5>{this.state.result}</h5>,
          document.getElementById("result")
        );
      });
  };

  render() {
    return (
      <div>
        <div>
          <input
            onChange={this.handleChangeSecret}
            type="number"
            name="secret"
            id="secret"
            min="0"
            required
            ref={this.secretInput}
          />
          <input
            onClick={this.handleClickSecret}
            type="button"
            id="setSecret"
            value="Set Secret"
          />
          <div id="startMessage" name="startMessage"></div>
        </div>

        <div>
          <input
            onChange={this.handleChangeGuess}
            type="number"
            name="guessed"
            id="guessed"
            min="0"
            required
          />
          <input
            onClick={this.handleClickGuess}
            type="button"
            id="guess"
            value="Guess"
          />
          <div id="result" name="result"></div>
        </div>
      </div>
    );
  }
}

export default GuessNumber;
