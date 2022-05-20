import React from 'react'

const LocationItem = (props) => {

    const { name, formatted_address, place_id } = props

    return (
        <div class="card">
            <div class="card-block">
                <h4 class="card-title">{name}</h4>
                <h6 class="card-subtitle text-muted">Petrol or Diesel is supplying right now</h6>
                <p class="card-text p-y-1">{formatted_address}</p>
                <a href={`https://www.google.com/maps/place/?q=place_id:${place_id}`} class="card-link">View Location</a>
                <p className='float-right'>{new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
            </div>
        </div>
    )
}

export default LocationItem
