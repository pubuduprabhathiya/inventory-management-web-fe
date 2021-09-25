import React, { Component } from "react";

class NewLabApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labName: "",
      department: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  newStyle = {
    // margin: 40,
    padding: 30,
    background: " #bef1be",
    borderRadius: 20,
    width: "70%",
  };

  handleSubmit(event) {
    alert("New Laboratory Registered!");
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div style={this.newStyle}>
        <h3 style={{ textAlign: "center" }}>Laboratory Application</h3>
        <div>
          <form onSubmit={this.handleSubmit}>
            
            <div className="form-group m-1">
              <label>Lab Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Lab Name"
                required
                value={this.state.labName}
                onChange={(event) => {
                  this.setState({
                    labName: event.target.value,
                  });
                }}
              ></input>
            </div>
        
            <div className="form-group m-1">
              <label>Department:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Department"
                required
                value={this.state.department}
                onChange={(event) => {
                  this.setState({
                    department: event.target.value,
                  });
                }}
              ></input>
            </div>
           

            <a
              href="#"
              className="btn btn-danger btn active m-3"
              role="button"
              aria-pressed="true"
            >
              Cancel
            </a>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewLabApplication;
