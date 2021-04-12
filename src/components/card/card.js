import React, { useState, useMemo } from 'react'
import TextField from '../text-field'
import i18n from 'i18n-js'
import { Button } from 'react-md'

import Chip from '../chip'
import DialogModal from '../dialog'

import renderDate, { getRandomInt } from '../../libs/helper'
import l from "../../libs/langs/keys"

import './style.scss'


const Card = ({ notes, deleteNotes, addNewNote, updatedNotes, completeNote }) => {

    const [checked, setChecked] = useState([])
    const [text, setText] = useState('')
    const [showAddNote, setShowAddNote] = useState(false)
    const [showEditNote, setShowEditNote] = useState(false)
    const [showDeleteNote, setShowDeleteNote] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const completedNotes = useMemo(() => notes.filter(note => note.done), [notes])
    const inCompletedNotes = useMemo(() => notes.filter(note => !note.done), [notes])

    const hideAddNote = () => setShowAddNote(false)
    const hideEditNote = () => {
        setShowEditNote(false)
        setChecked('')
    }
    const hideDeleteNote = () => {
        setShowDeleteNote(false)
        setChecked('')
    }

    const handleCheckComplete = (id) => {
        completeNote(id)
    }

    const renderListNotes = (data) => {
        return (
            data
                .filter(el => {
                    const exp = new RegExp(text, 'gi')
                    return exp.test(el.title)
                })
                .map(({ id, title, description, date, done }, i) => (
                    <div
                        key={i}
                        className={`note-card ${checked.includes(id) ? 'checked' : ''
                            }`}
                        onClick={() =>
                            setChecked(prev =>
                                prev.includes(id)
                                    ? prev.filter(idd => idd !== id)
                                    : [id],
                            )
                        }
                    >
                        <Chip title={title} ></Chip>
                        <span>Description:{description}</span>
                        <span>Date:{date}</span>
                        <input type="checkbox" checked={done} value='Completed ?' onChange={() => handleCheckComplete(id)} />

                    </div>
                ))

        )
    }

    const deleteNote = id => {
        deleteNotes(id)
        hideDeleteNote(false)
    }

    const handleSearch = (value) => setText(value)
    const handleTitle = (value) => setTitle(value)
    const handleChangeDescription = (value) => setDescription(value)

    const addNote = () => {
        const note = { id: getRandomInt(1200), title, description, date: renderDate() }
        addNewNote(note)
        hideAddNote()
        setTitle('')
        setDescription('')
    }

    const handleSetShowEditNote = () => {
        setShowEditNote(true)
        const findUpdateNote = notes.filter(note => note.id === checked[0])
        setTitle(findUpdateNote[0].title)
        setDescription(findUpdateNote[0].description)
    }
    const editNote = () => {
        const updatedNote = { id: checked[0], title, description, date: renderDate() }
        updatedNotes(updatedNote)
        hideEditNote(false)
        setTitle('')
        setDescription('')
    }

    return (
        <>
            <TextField
                value={text}
                input={{ onChange: handleSearch }}
                placeholder={i18n.t(l.search)}
            />
            <div className='actions__btn'>
                <Button raised className='addbutton' iconClassName="mdi mdi-plus"
                    onClick={() => setShowAddNote(true)}>{i18n.t(l.addNote)}</Button>
                {checked.length > 0 && (
                    <>
                        <Button raised primary iconClassName="mdi mdi-pencil" className='editButton' onClick={() => handleSetShowEditNote()}>{i18n.t(l.editNote)}</Button>
                        <Button raised secondary iconClassName="mdi mdi-delete" className='deleteButton' onClick={() => setShowDeleteNote(true)}>{i18n.t(l.deleteNote)}</Button>
                    </>
                )}
            </div>
            {inCompletedNotes.length > 0 &&
                <>
                    <h1>{i18n.t(l.noteNotcomplete)}</h1>
                    <div className="note-grid">
                        {renderListNotes(inCompletedNotes)}
                    </div>
                </>}

            {completedNotes.length > 0 &&
                <>
                    <h1>{i18n.t(l.notecomplete)}</h1>
                    <div className="note-grid">
                        {renderListNotes(completedNotes)}
                    </div>
                </>}
            {
                showAddNote && <DialogModal
                    visible={showAddNote}
                    hide={hideAddNote}
                    title={'Add New Note'}
                    width={700}
                    height={300}
                    action={addNote}
                >
                    <div className='form__add__note'>
                        <TextField placeholder='Note Title'
                            label='Note Title'
                            input={{ onChange: handleTitle }}
                            value={title}
                        />
                        <TextField placeholder='Note Description'
                            label='Note Description'
                            input={{ onChange: handleChangeDescription }}
                            value={description}
                        />
                    </div>
                </DialogModal>
            }

            {
                showEditNote && <DialogModal
                    visible={showEditNote}
                    hide={hideEditNote}
                    title={'Are Sure want to Edit this Note ?'}
                    width={700}
                    height={300}
                    action={() => editNote(checked[0])}
                >
                    <div className='form__edit__note'>
                        <TextField placeholder='Note Title' label='Note Title' input={{ value: title, onChange: handleTitle }} />
                        <TextField placeholder='Note Description' label='Note Description' input={{ value: description, onChange: handleChangeDescription }} />
                    </div>
                </DialogModal>
            }


            {
                showDeleteNote && <DialogModal
                    visible={showDeleteNote}
                    hide={hideDeleteNote}
                    title={'Are Sure want to Delete this Note ?'}
                    width={600}
                    height={200}
                    action={() => deleteNote(checked[0])}
                >
                </DialogModal>
            }


        </>
    )
}

export default Card
