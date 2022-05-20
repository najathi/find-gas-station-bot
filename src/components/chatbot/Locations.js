import React, { useLayoutEffect, useState } from 'react'

import '../../App.css'

import PlacesApi from '../../apis/placesApi'
import LocationItem from './LocationItem'
import { pDistrict } from '../../data/district'

const Locations = (props) => {

  const { district } = props;

  console.log('district', district);
  console.log('props', props);

  if (!(pDistrict.indexOf(district) > -1)) {
    return (
      <>
        <h5 className='text-danger'>Please input the valid district name!</h5>
      </>
    );
  }

  const [places, setPlaces] = useState([]);

  useLayoutEffect(() => {

    PlacesApi.getPlaces(district)
      .then(response => {
        setPlaces(response.data)
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
