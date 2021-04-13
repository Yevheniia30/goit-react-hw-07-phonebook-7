import React, { Component } from 'react';
import { connect } from 'react-redux';
// import shortid from 'shortid';
import s from './App.module.css';
import Form from './Components/Form';
import ContactsList from './Components/ContactsList';
import Filter from './Components/Filter';
import { getContact } from './redux/phoneBook/phoneBook-operations';

class App extends Component {
  componentDidMount() {
    this.props.getContact();
  }
  render() {
    return (
      <div className={s.App}>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getContact: () => dispatch(getContact()),
});

export default connect(null, mapDispatchToProps)(App);
