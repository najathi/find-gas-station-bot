import React, { useEffect, useState } from 'react'

import '../../App.css'

import PlacesApi from '../../apis/placesApi'
import LocationItem from './LocationItem'
import { pDistrict } from '../../data/district'

const Locations = (props) => {

  const { district } = props;

  const [places, setPlaces] = useState([]);

  useEffect(() => {

    PlacesApi.getPlaces(district)
      .then(response => {
        setPlaces(response.data)
      })
      .catch(err => {
        console.log(err)
      })

  }, [district]);

  return (
    <div>
      {pDistrict.indexOf(district) > -1 ?
        <>
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
        </>
        :
        <h5 className='text-danger'>Please input the valid district name!</h5>
      }
    </div>
  )
}

export default Locations
