import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Nav, NavLink } from 'react-bootstrap'

import '../../App.css'

const Link = () => {
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Useful Links</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <a
                href="https://ceypetco.gov.lk/marketing-sales/"
                target="_blank"
                className="mr-3 cursor-pointer">
                <i className="fas fa-question-circle"></i> CEYPETCO
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a
                href="https://www.lankaioc.com/price-list/"
                target="_blank"
                className="mr-3 cursor-pointer">
                <i className="fas fa-question-circle"></i> LANKA IOC
              </a>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Link
