import React, { Component } from 'react';
import { ListGroup, ListGroupItem , Button, Table} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUserDiscs } from '../redux/modules/userDisc';
import 'bootstrap/dist/css/bootstrap.css';

class userDisc extends Component {
  constructor(props) {
    super(props);
 }

  componentWillMount(){
    this.props.fetchUserDiscs();
  }

  render() {
    const discList = this.props.userDiscs;
    return (

        <div>
          
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>id</th>
                <th>brand</th>
              </tr>
            </thead>
            <tbody>
              {discList.discs.map((disc, index) => (      
                <tr>
                  <td>{disc.id}</td>
                  <td>{disc.brand}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
    
    );
  }
}

userDisc.PropTypes = {
  fetchUserDiscs: PropTypes.func.isRequired,
  userDiscs: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  userDiscs: state.userDiscs
})

export default connect(mapStateToProps, { fetchUserDiscs })(userDisc);
