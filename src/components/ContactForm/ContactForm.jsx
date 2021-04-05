import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import style from './contactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
  };
  state = {
    name: '',
    number: '',
  };

  createIdName = uuidv4();
  createIdNumber = uuidv4();

  handleInputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  submitContact = e => {
    e.preventDefault();

    this.props.OnSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div className={style.formWrapper}>
        <form onSubmit={this.submitContact}>
          <label className={style.label}>
            Name
            <input
              className={style.input}
              type="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              id={this.createIdName}
            />
          </label>
          <label className={style.label}>
            Number
            <input
              className={style.input}
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleInputChange}
              id={this.createIdNumber}
            />
          </label>
          <button className={style.btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
export default ContactForm;
