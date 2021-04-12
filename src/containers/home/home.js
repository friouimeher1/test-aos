import React from 'react'
import Header from '../header'
import i18n from 'i18n-js'

import l from "../../libs/langs/keys"
import Card from '../../components/card'

import './style.scss'

export default function Home({ notes, deleteNotes, addNewNote, updatedNotes, completeNote }) {
    return (
        <>
            <Header logoName={i18n.t(l.projectName)} />
            <div className='home__page'>
                <Card
                    notes={notes}
                    deleteNotes={deleteNotes}
                    addNewNote={addNewNote}
                    updatedNotes={updatedNotes}
                    completeNote={completeNote}
                />
            </div>
        </>
    )
}
