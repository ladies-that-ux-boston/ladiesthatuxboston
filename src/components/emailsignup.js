/* eslint-disable no-undef */
/* eslint-disable no-console */
import React from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import classnames from "clsx";
import buttonStyles from "../styles/button.module.less";
import inputStyles from "../styles/input.module.less";

export default class EmailSignup extends React.Component {
  state = {
    name: null,
    email: null,
  };

  _handleChange = (event) => {
    this.setState({
      [`${event.target.name}`]: event.target.value,
    });
  };

  //   handleSubmit = event => {
  //     event.preventDefault();
  //     alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`);
  //   };

  _handleSubmit = (event) => {
    event.preventDefault();

    addToMailchimp(this.state.email, this.state)
      .then(({ msg, result }) => {
        if (result !== "success") {
          throw msg;
        }
        alert(msg);
      })
      .catch(() => {
        const myErrorToShow =
          "Please provide a valid email address. If your email is valid, you may already be on the list!";
        alert(myErrorToShow);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <label htmlFor="email-input" className={inputStyles.inputlabelHidden}>
            Email address
          </label>
          <input
            type="email"
            onChange={this._handleChange}
            placeholder="email"
            name="email"
            className={inputStyles.input}
            id="email-input"
          />
          <button
            className={classnames(
              buttonStyles.button,
              buttonStyles.secondary,
              buttonStyles.input
            )}
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
