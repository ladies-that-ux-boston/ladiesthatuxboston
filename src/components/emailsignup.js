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
    email: null
  };

  _handleChange = e => {
    console.log({
      [`${e.target.name}`]: e.target.value
    });
    this.setState({
      [`${e.target.name}`]: e.target.value
    });
  };

  _handleSubmit = e => {
    e.preventDefault();

    console.log("submit", this.state);

    addToMailchimp(this.state.email, this.state)
      .then(({ msg, result }) => {
        // console.log("msg", `${result}: ${msg}`);

        if (result !== "success") {
          throw msg;
        }
        alert(msg);
      })
      .catch(err => {
        // console.log("err", err);
        alert(err);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input
            type="email"
            onChange={this._handleChange}
            placeholder="email"
            name="email"
            className={inputStyles.input}
          />
          <button
            className={classnames(buttonStyles.button, buttonStyles.secondary)}
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
