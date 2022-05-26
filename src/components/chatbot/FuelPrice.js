import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

import '../../App.css'

import priceApi from '../../apis/priceApi'

const currency = "LKR"

const FuelPrice = (props) => {

  const { name, type, desc } = props;

  const [price, setPrice] = useState()

  useEffect(() => {
    priceApi.getPrice(type)
      .then(response => {
        setPrice(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [type]);

  return (
    <div>
      <h3 className='h4 text-dark'>{name + " - " + (desc ? desc.toUpperCase() : type.toUpperCase())}</h3>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount (LKR)</th>
          </tr>
        </thead>
        {price && price.length > 0 &&
          <tbody>
            {price.map((item) =>
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>
                  {`${currency}. ${item.amount}.00`}
                </td>
              </tr>
            )}
          </tbody>
        }
      </Table>
    </div>
  )
}

export default FuelPrice
