import React from 'react'
import Home from './containers/home';


class App extends React.Component {

  render() {
    const {
      notes, deleteNotes, addNewNote,
      updatedNotes, completeNote
    } = this.props
    return (
      <Home
        notes={notes}
        deleteNotes={deleteNotes}
        addNewNote={addNewNote}
        updatedNotes={updatedNotes}
        completeNote={completeNote}
      />
    )
  }
}

export default App;
