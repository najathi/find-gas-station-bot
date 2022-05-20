import React, { useLayoutEffect, useState } from 'react'

import '../../App.css'

import PlacesApi from '../../apis/places'
import LocationItem from './LocationItem'

const Locations = (props) => {

  let { district } = props

  if (!district)
    district = "batticaloa"

  const [places, setPlaces] = useState([]);

  useLayoutEffect(() => {

    console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)

    PlacesApi.getPlaces(district)
      .then(response => {
        console.log(response)
        setPlaces(response)
      })
      .catch(err => {
        console.log(err)
      })

  }, []);

  return (
    <div>
      {places && places.length > 0 &&
        <>
          {places.map((item, idx) => (
            <LocationItem
              key={idx}
              name={item.name}
              formatted_address={item.formatted_address}
              place_id={item.place_id}
            />
          ))}
        </>
      }
    </div>
  )
}

export default Locations
