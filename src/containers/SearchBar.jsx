import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {fetchData} from "../actions/actions_index.jsx";
import '../styles/SearchBar.css';

class SearchBar extends Component {
	constructor() {
		super();

		this.state = {
			term: ''
		};
	}


	onFormSubmit(evt) {
		evt.preventDefault();
		//calling an action creator and passing a city
		this.props.fetchData(this.state.term);
		this.setState({term: ''});
	}

	render() {
		return (
			//there is no API response if I use fat arrow in onSubmit
			<form	onSubmit = {this.onFormSubmit.bind(this)}>
				<input
					value = {this.state.term}
					ref = 'SearchTerm'
					onChange = {() => this.setState({term: this.refs.SearchTerm.value})}
					placeholder = "Type any US city to get a five day forecast" />
				<button type = "submit">Search</button>
			</form>
		)
	}
}

function mapDispacthToProps(dispatch) {
	return bindActionCreators({fetchData}, dispatch);
}

export default connect(null, mapDispacthToProps)(SearchBar);
