import React from 'react'
import i18n from 'i18n-js'
import { Link } from 'react-router-dom'

import l from "../../libs/langs/keys"
import Avatar from '../../components/avatar'

import './style.scss'

const Header = ({ logoName }) => {
    return (
        <div className='top__bar'>
            <div className='wrapper__top__bar'>
                <div className="topBar-logo">
                    <span>{logoName}</span>
                </div>
                <div>
                    <Avatar name={i18n.t(l.name)} />
                </div>
                <Link to='/logout' className='logout__action' ><span className='mdi mdi-logout'></span>{i18n.t(l.signout)}</Link>
            </div>

        </div>
    )
}
export default Header
