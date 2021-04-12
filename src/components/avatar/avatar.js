import React from 'react'

import './style.scss'

const Avatar = ({ name, img }) => {

    return (
        <div className='avatar'>
            {img ? <img src={img} alt={name && name} className='img__name' /> :
                name && <span className='avatar__name'>{name.charAt(0).toUpperCase()}</span>}
            <span className="name__user">{name}</span>
        </div>
    )
}
export default Avatar
