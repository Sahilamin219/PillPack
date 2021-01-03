import React, { Component } from "react";

class UserForm extends Comment {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Sign in or sign up by entering your email and password.</p>
        <input
          type="text"
          onChange={this.handleEmailChange}
          value={this.state.email}
          placeholder="Your email"
        />
        <input
          type="password"
          onChange={this.handlePasswordChange}
          value={this.state.password}
          placeholder="Your password"
        />
        <p className="error">{this.state.error}</p>
        <button className="red light" type="submit">
          Login
        </button>
      </form>
    );
  }
}
export default UserForm;
