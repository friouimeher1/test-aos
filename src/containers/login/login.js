import React, { useState, useEffect } from 'react'
import i18n from "i18n-js"
import { useHistory } from "react-router-dom";

import Button from '../../components/button'
import { Paper } from '../../components/paper/paper'
import TextField from '../../components/text-field'
import l from "../../libs/langs/keys"

const Login = ({ changeLang, setUser, currentUser }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeEmail = (value) => setEmail(value)
    const handleChangePassword = (value) => setPassword(value)

    const history = useHistory();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('user')
        if (isLoggedIn) {
            history.push('/')
        }
    }, [currentUser, history])



    const onSubmit = e => {
        e.preventDefault()
        if (email === '') {
            alert('email Vide')
            return
        }
        if (password === '') {
            alert('password Vide')
            return
        }
        if (email === 'meher@gmail.com' && password === '123456') {
            const user = { displayName: 'FRIOUI Meher', email: 'meher@gmail.com' }
            localStorage.setItem('user', JSON.stringify(user))
            setUser(user)
            history.push('/')

        } else {
            alert('Email and PAswword is invalid Try again')
            setEmail('')
            setPassword('')
        }
    }


    return (
        <div className='container'>
            <Paper className='papers__example'>
                <div>
                    <TextField
                        placeholder={i18n.t(l.email)}
                        label={i18n.t(l.email)}
                        type='email'
                        name='test'
                        input={{ onChange: handleChangeEmail, value: email }}
                        required={true}
                    />
                </div>
                <TextField
                    type='password'
                    label={i18n.t(l.loginPassword)}
                    name='password'
                    placeholder={i18n.t(l.loginPassword)}
                    input={{ onChange: handleChangePassword, value: password }}
                    required={true}

                />
                <Button className='primary' onClick={onSubmit}>{i18n.t(l.loginBtn)}</Button>
                <div className='language'>
                    <span onClick={() => changeLang('ar')} className='mdi mdi-chevron-right arabic'>Arabic</span>
                    <span onClick={() => changeLang('en')} className='mdi mdi-chevron-right english' >English</span>
                    <span onClick={() => changeLang('fr')} className='mdi mdi-chevron-right frensh'>Frensh</span>
                </div>
            </Paper>
        </div>
    )
}

export default Login
