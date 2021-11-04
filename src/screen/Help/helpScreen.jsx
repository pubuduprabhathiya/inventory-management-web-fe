import React, { Component } from "react";

import { withRouter } from "react-router-dom";
class HelpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }


  render() {
    return (
      <div>
        <div className="row m-5">
          <div className="col-4" align="center">
           <h3>Help page</h3>
          </div>
          <div className="col-8">
            <h4>Help page</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HelpPage);
