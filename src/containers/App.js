import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';

import { setSearchField, requestRobots } from '../actions.js';

const mapStateToProps = (state) => {
	return {
		searchfield: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}


class App extends Component {


	componentDidMount() {
		this.props.onRequestRobots();
	}


	render(){
		const { searchfield, onSearchChange, robots, isPending } = this.props;
		const filterRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		if (isPending) {
			return <h1>Loading</h1>
		} else {

			return (
		 <div className='tc'>

			<h1 className="f1">RoboFriends</h1>
			<SearchBox searchChange={onSearchChange}/>
			<Scroll>
				<ErrorBoundry>
					<CardList robots={filterRobots}/>
				</ErrorBoundry>
			</Scroll>

		 </div>
		);
		}


	}


}

export default connect(mapStateToProps, mapDispatchToProps)(App);
