import * as React from 'react'

import Hero from './../components/Hero'
import {
    PropertyListingsProvider,
    PropertyListingsConsumer
  } from './../content/PropertyInfo'
  import Listing from './../components/PropertyCard'
  import Filter from './../components/Filter'
  import { Grid, GridContainer } from 'react-foundation';

  function Home() {
    return (
      <React.Fragment>
        <Hero />
          <GridContainer>
            <Grid>
              <PropertyListingsProvider>
                <PropertyListingsConsumer>
                  {function(value) {
                    const { propertyListings, allListings, updateFilter } = value
                    return (
                      <React.Fragment>
                        <Filter
                          updateFilter={updateFilter}
                                bedrooms={allListings
                                  .map(listing => listing.bedroom.split(' ')[0])
                                  .filter((item, i, arr) => arr.indexOf(item) === i)}
                                  />
                                  <Grid className="display propertyListings">
                                    {propertyListings.map(listing => (
                                      <Listing listing={listing} key={listing.idz} />
                                    ))}
                                  </Grid>
                        </React.Fragment>
                      )
                    }}
                  </PropertyListingsConsumer>
                </PropertyListingsProvider>
              </Grid>
            </GridContainer>        
        </React.Fragment>
        )
      }

export default Home