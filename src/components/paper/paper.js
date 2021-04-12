import React from 'react'
import PropTypes from "prop-types"

import './style.scss'

export function Paper({ children, className }) {
    return (
        <div className={`paper ${className || ''}`}>
            <div>
                {children}
            </div>
        </div>
    )
}

Paper.propTypes = {
    children: PropTypes.array,
    className: PropTypes.string
}
