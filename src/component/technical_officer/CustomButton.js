import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { REFERSH } from '../../store/actions/action_types'
import { connect } from 'react-redux';
class CustomButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabName: this.props.tabName,
            isActive: this.props.isActive,
            url: this.props.url
        }
        this.onclick = this.onclick.bind(this);
    }

    style = {
        margin: 5,
        padding: 5
    }

    onclick() {
        console.log("change");
        this.props.changePage();
    }
    render() {
        return (
            <div>
                <Link to={this.state.url}>
                    <button type="button" onClick={this.onclick} className={this.getButtonClass(this.state.isActive)}>{this.state.tabName}</button>
                </Link>
            </div>
        );
    }
    getButtonClass(isActive) {
        if (isActive) {
            return "btn btn-primary m-2"
        } else {
            return "btn btn-dark m-2";

        }
    };
}
const mapDispatchToProps = dispatch => {
    return {
        changePage: () => dispatch({ type: REFERSH })
    };
};
export default connect(null, mapDispatchToProps)(CustomButton);
