import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="navbar-form search-form clearfix">
        <input
          className="form-control"
          type="search"
          value={this.state.term}
          placeholder="Enter your favourite cities for 5-days forecast"
          onChange={this.onInputChange}
        />
        <button className="btn btn-secondary" type="submit">Search</button>
      </form>
    )
  }
}

function mapActionsToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapActionsToProps)(SearchBar);
