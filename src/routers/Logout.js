import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { reset } from '../actions';

class Login extends React.Component {
    componentDidMount() {
        localStorage.clear();
        this.props.reset();
    }

    render () {
        return (
            <Redirect to="/"/>
        )
    }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        reset: () => {
            dispatch(reset())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);