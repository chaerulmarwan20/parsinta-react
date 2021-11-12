import React, { Component } from "react";

class ClassExample extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      name: "",
    };
  }

  changeHandler = (e) => this.setState({ [e.target.name]: e.target.value });

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({
      firstname: "",
      lastname: "",
      name: `${this.state.firstname} ${this.state.lastname}`,
    });
  };

  render() {
    const { firstname, lastname, name } = this.state;

    return (
      <div className="p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">Learn React JS</div>
                <div className="card-body">
                  <form onSubmit={this.submitHandler}>
                    <div className="mb-4">
                      <label htmlFor="firstname" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={firstname}
                        onChange={this.changeHandler}
                        name="firstname"
                        id="firstname"
                        className="form-control"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="lastname" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={lastname}
                        onChange={this.changeHandler}
                        name="lastname"
                        id="lastname"
                        className="form-control"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Show
                    </button>
                  </form>
                </div>
                <div className="card-footer">
                  My name is {name ? name : "..."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassExample;
