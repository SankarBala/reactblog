import React from 'react'
import Main from './Main'
import Sidebar from './Sidebar'

const Figure = () => {
    return (
        <figure className="container">
            <div className="row">
                <div className="col-md-8"><Main /></div>
                <div className="col-md-4"><Sidebar /></div>
            </div>
        </figure>
    )
}

export default Figure
