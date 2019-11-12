import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
    this.submit = this.submit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  submit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-all">
        <form onSubmit={this.submit} className="login-form-form">
          Welcome to Todu.
          <br />
          Please {this.props.formType} or {this.props.webLink}
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label>
              Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br />
            <label>
              Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />
            <button>{this.props.formType}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;