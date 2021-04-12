import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route, withRouter
} from "react-router-dom";
import { Provider, connect } from "react-redux";
import i18n from "i18n-js"


import Login from './containers/login';
import Logout from './containers/logout';


import store from './store'
import { setUser, clearUser, deleteNote, addNewNote, updatedNotes, completeNote } from "./actions";
import { changeLangs } from './libs/langs'
import './index.scss';
import Home from './containers/home';


@withRouter
@connect(
  ({ user, notes }) => ({
    currentUser: user.currentUser,
    notes: notes.notes,

  }),
  { setUser, clearUser, deleteNote, addNewNote, updatedNotes, completeNote },
)

class Root extends React.Component {

  state = {
    lang: i18n.locale
  }

  componentDidMount() {
    const user = localStorage.getItem('user')
    const { currentUser } = this.props
    if (currentUser) {
      this.props.setUser(user);
      this.props.history.push("/");
    } else {
      this.props.history.push("/login");
      this.props.clearUser();
    }
  }

  changeLang = (lang) => {
    changeLangs(lang)
    this.setState({
      lang
    })
    localStorage.setItem("language", lang)
    window.location.reload()
  }

  render() {
    const {
      setUser, currentUser, clearUser,
      notes, deleteNote, addNewNote,
      updatedNotes, completeNote
    } = this.props
    return (
      <Switch>
        <Route exact path="/" render={() =>
          <Home
            notes={notes}
            deleteNotes={deleteNote}
            addNewNote={addNewNote}
            updatedNotes={updatedNotes}
            completeNote={completeNote}
          />}
        />
        <Route path="/login" render={() =>
          <Login
            changeLang={this.changeLang}
            setUser={setUser} currentUser={currentUser}
          />}
        />
        <Route exact path="/logout" render={() =>
          <Logout
            clearUser={clearUser}
            user={{ currentUser }}
          />}
        />
      </Switch>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Root />
    </Router>
  </Provider>,
  document.getElementById('root')
);
