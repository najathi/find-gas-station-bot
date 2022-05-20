import React from 'react'

const LocationItem = (props) => {

    const { name, formatted_address, place_id } = props

    return (
        <div className="card p-4 bg-white my-2">
            <div className="card-block">
                <h4 className="card-title text-dark">{name}</h4>
                <h6 className="card-subtitle text-muted">Petrol or Diesel is supplying right now</h6>
                <p className="card-text p-y-1 text-secondary">{formatted_address}</p>
                <a href={`https://www.google.com/maps/place/?q=place_id:${place_id}`} className="card-link" target="_blank">View Location</a>
                <p className='float-right text-dark'>{new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
            </div>
        </div>
    )
}

export default LocationItem
