import React from 'react'
import '../../App.css'
import { Table } from 'react-bootstrap'

const currency = "LKR"

const FuelPrice = (props) => {

  const { name, type, desc } = props;

  let rows = [
    {
      id: 1,
      title: "Lanka Petrol 92 Octane",
      amount: 338
    },
    {
      id: 2,
      title: "Lanka Petrol 95 Octane Euro 4",
      amount: 373
    },
    {
      id: 3,
      title: "Lanka Auto Diesel",
      amount: 289
    },
    {
      id: 4,
      title: "Lanka Super Diesel 4 Star Euro 4",
      amount: 329
    },
    {
      id: 5,
      title: "Lanka Kerosene",
      amount: 87
    },
    {
      id: 6,
      title: "Lanka Industrial Kerosene",
      amount: 160
    }
  ]

  if (type === "lankaioc") {
    rows = [
      {
        id: 1,
        title: "Petrol 92 Octane",
        amount: 338
      },
      {
        id: 2,
        title: "Lanka Petrol 92 Octane",
        amount: 367
      },
      {
        id: 3,
        title: "Lanka Petrol 92 Octane",
        amount: 347
      },
      {
        id: 4,
        title: "Lanka Petrol 92 Octane",
        amount: 289
      },
      {
        id: 4,
        title: "Lanka Petrol 92 Octane",
        amount: 327
      }
    ]
  }

  return (
    <div>

      <h3 className='h4 text-dark'>{name + " - " + (desc? desc.toUpperCase() : type.toUpperCase())}</h3>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount (LKR)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item, idx) =>
            <tr key={idx}>
              <td>{item.title}</td>
              <td>
                {`${currency}. ${item.amount.toFixed(2)}`}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default FuelPrice
