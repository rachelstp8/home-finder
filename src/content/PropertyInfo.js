import * as React from 'react'

const DefaultState = {
  propertyListings: [],
  filter: {}
}

const PropertyListingsContext = React.createContext(DefaultState)

export const PropertyListingsConsumer = PropertyListingsContext.Consumer
export class PropertyListingsProvider extends React.Component {

  // Grab property information in order to be used for filtering
  static applyFilter(listings, filter) {
    const { priceFrom, bedroom, sortOrder } = filter
    let result = listings
    if (priceFrom) {
      const from = priceFrom
      result = result.filter(item => item.price >= from)
    }
    if (bedroom) {
      const from = bedroom
      result = result.filter(item => item.bedroom >= from)
    }
    if (sortOrder) {
      if (sortOrder === 'highestfirst') {
        result = result.sort((a, b) => b.price - a.price)
      }
      if (sortOrder === 'lowestfirst') {
        result = result.sort((a, b) => a.price - b.price)
      }
    }
    return result
  }
    componentDidMount() {
      // Grab content from the local server
      // As a way to improve the project I would have an admin section to add or import
      // the home data that way instead

      fetch('/server/listings.json')
        .then(res => res.json())
        .then(res => {
          this.setState({ propertyListings: res })
        })
    }

    updateFilter = filter => {
      this.setState({
        filter
      })
    }
    // Every time this function is called, filter component is re rendered

    state = DefaultState

    render() {
      const { children } = this.props
      const { propertyListings, filter } = this.state
    
      const filteredListings = PropertyListingsProvider.applyFilter(
        propertyListings,
        filter
      )
    
      return (
        <PropertyListingsContext.Provider
        value={{
          allListings: propertyListings,
          propertyListings: filteredListings,
          updateFilter: this.updateFilter
        }}
      >
        {children}
      </PropertyListingsContext.Provider>
      )
    }
  }