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
          <div className="col-12" align="center">
            <h4>Help page</h4>
            <image src="../../../public/reset_pass.png"></image>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HelpPage);
