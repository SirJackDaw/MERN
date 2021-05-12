import React from 'react'
import { Link } from 'react-router-dom'


export const LinksList = ({ links }) => {
    if(!links.length){
        return <p className="center">Empty</p>
    }

    return (
        <table>
        <thead>
          <tr>
              <th></th>
              <th>From</th>
              <th>ShortLink</th>
              <th></th>
          </tr>
        </thead>
        <tbody>
        { links.map((link, index) => {
            return (
            <tr key={link._id}>
                <td>{index + 1}</td>
                <td>{link.from}</td>
                <td><a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></td>
                <td>
                    <Link to={`/detail/${link._id}`}>Detail</Link>
                </td>
            </tr>
            )
        }) }
        </tbody>
      </table>
    )
}
