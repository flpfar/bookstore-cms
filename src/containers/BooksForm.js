import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

const CATEGORIES = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 500),
      title: '',
      category: CATEGORIES[0]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.name === 'title') {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.name === 'category') {
      this.setState({
        category: e.target.value,
      });
    }
  }

  handleSubmit(e) {
    const { title } = this.state;
    const {createBook } = this.props;
    e.preventDefault();
    if(title) {
      createBook(this.state);
      this.reset();
    }
  }

  reset() {
    this.setState({
      id: Math.ceil(Math.random() * 500),
      title: '',
      category: CATEGORIES[0],
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Title</h2>
        <input type="text" name="title" value={title} onChange={this.handleChange}/>
        <h2>Category</h2>
        <select name="category" value={category} onChange={this.handleChange}>
          {CATEGORIES.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(BooksForm);
