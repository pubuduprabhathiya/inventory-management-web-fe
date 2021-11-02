import React, { Component } from "react";
import Dialog from '../../component/Dialog';

export default class PopUp extends Component {

  state = {
    isOpen: true
  };

  render() {
    return (
      <div>
        <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
          {this.props.errorMsg}
        </Dialog>
      </div>
    );
  }
}


