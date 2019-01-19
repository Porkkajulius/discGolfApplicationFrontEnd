import React, { Component } from 'react';
import { ListGroup, ListGroupItem , Button, Table} from 'reactstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUserDiscs } from '../redux/modules/userDisc';
import 'bootstrap/dist/css/bootstrap.css';

const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

class discCharts extends Component {
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
         <LineChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
        </div>
    
    );
  }
}

discCharts.PropTypes = {
  fetchUserDiscs: PropTypes.func.isRequired,
  userDiscs: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  userDiscs: state.userDiscs
})

export default connect(mapStateToProps, { fetchUserDiscs })(discCharts);
