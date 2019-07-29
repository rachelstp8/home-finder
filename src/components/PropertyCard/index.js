import * as React from 'react'
import { Cell } from 'react-foundation';

function Listing({ listing }) {
  if (!listing) {
    return null
  }

  const { image, title, address, price } = listing

  return (
    <Cell small={12} large={4} className="property">
      <div className="card-image">
       {/* grab info from server sfor image source and alt */}
        <img className="img-responsive" src={`/server/${image}`} alt={address} />
      </div>
      <div className="card-header">
        <div className="card-title h5">{title}</div>
        <div className="card-title h6">$ {price}</div>
        <div className="card-subtitle text-gray">{address}</div>
      </div>
    </Cell>
    // Next step would be for additional property information (bathrooms, locitons on a map, home gallery etc)
  )
}

export default Listing