import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUserDiscs } from '../redux/modules/userDisc';


class userDisc extends Component {

  componentWillMount(){
    this.props.fetchUserDiscs();
  }

  render() {
    return (

        <div>
            <h1>hola</h1>
        </div>
    
    );
  }
}

userDisc.PropTypes = {
  fetchUserDiscs: PropTypes.func.isRequired,
  userDiscs: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  userDiscs: state.userDiscs.ArrayList
})

export default connect(mapStateToProps, { fetchUserDiscs })(userDisc);
