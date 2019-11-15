import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
    this.submit = this.submit.bind(this);
    this.submitDemo = this.submitDemo.bind(this);
  }

  componentDidMount () {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  submit(e) {
    e.preventDefault();
    this.props.submitForm(this.state)
      .then(() => this.props.history.push("/boards"));
  }

  submitDemo () {
    this.props.demoLogin({ username: "demoUser", password: "hunter2" })
      .then(() => this.props.history.push("/boards"));
  }

  renderErrors() {
    const arr = this.props.errors.map((error) => <div>{error}</div>)
    return (
      <ul>
        {arr}
      </ul>
    )
  };

  render() {
    return (
      <div className="login-form-all">
          <h2>Todu!</h2>
        <form onSubmit={this.submit} className="login-form-form">
          <br />
          <br/>
          <div className="session-div">Please {this.props.formType} or <nav className="session-link">{this.props.webLink}</nav></div>
          <nav className="session-errors">{this.renderErrors()}</nav>
          <div className="login-form">
            <br />
            <label>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Enter username"
                className="login-input"
              />
            </label>
            <br />
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Enter password"
                className="login-input"
              />
            </label>
            <br />
            <button className="session-button">{this.props.formType}</button>
          </div>
          <p className="session-demo" onClick={this.submitDemo}>Try it now!</p>
        </form>
        <div className="footer-container">
          <div className="left-image"></div>
          <div className="middle-image"></div>
          <div className="right-image"></div>
        </div>
      </div>
    );
  }
}

export default SessionForm;