import React, { Component } from 'react';
import Dialog from '../../components/Dialog';

class CustomConfirm extends Component {
  state = {
    isOpen: false
  }
  render() {
    return (
      <div>
        <button onClick={(e) => this.setState({ isOpen: true })}>Open Dialog</button>

        <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste a ipsam repellendus commodi ad, fugit id magnam inventore laudantium autem delectus praesentium incidunt debitis, numquam dicta eveniet obcaecati, itaque quidem?
        </Dialog>
      </div>
    );
  }
}

export default CustomConfirm;