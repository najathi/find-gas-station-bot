import React, { useEffect, useState } from 'react'

import '../../App.css'

import PlacesApi from '../../apis/placesApi'

import LocationItem from './LocationItem'

const Locations = (props) => {

  const { district } = props;

  const [places, setPlaces] = useState([])

  useEffect(() => {
    PlacesApi.getPlaces(district)
      .then(response => {
        setPlaces(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  console.log(district)

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
