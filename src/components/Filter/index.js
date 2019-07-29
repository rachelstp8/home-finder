import * as React from 'react'
import { Grid, Cell } from 'react-foundation';

function getSortOrderValue(sortOrder) {
  return sortOrder.replace(' ', '').toLowerCase()
}

const DefaultState = {
  priceFrom: '',
  bedroom: '',
  sortOrder: '',
  sortOrders: ['Highest First', 'Lowest First']
}

class Filter extends React.Component {
  state = Object.assign({}, DefaultState)

  handleChange = (prop, value) => {
    this.setState({
      [prop]: value
    })
  }

  render() {
    const { sortOrder, sortOrders } = this.state
    const { updateFilter } = this.props

    return (
        <form
            onChange={() => setTimeout(() => updateFilter(this.state), 0)}
            noValidate
            // Everytime element changes, onchange is called, then updates filter 
            // passing along the information
          >
          {/* Button to clear form */}
            <p className="mb-1">
              Refine your results
              <button
                data-cy="clear-button"
                className="ml-1"
                type="button"
                onClick={() => {
                  this.setState(Object.assign({}, DefaultState))
                  updateFilter({})
                }}
              >
                Clear
              </button>
            </p>
            <Grid>
              <Cell small={12} large={4} className="filterItem">
              {/* Price search */}
                <div className="form-group">
                  <div>
                    <label className="form-label" htmlFor="price-from">
                      Price from
                    </label>
                  </div>
                  <div>
                    <input
                      className="form-input"
                      min="0"
                      max="10000000"
                      type="number"
                      id="price-from"
                      placeholder="$1,000,000"
                      value={this.state.priceFrom}
                      onChange={event =>this.setState({ priceFrom: Number(event.target.value) })}
                      // Adding name to each element to handle multiple controlled input and option elements
                    />
                  </div>
                </div>
              </Cell>
              <Cell small={12} large={4} className="filterItem">
              {/* Search by bedrooms, currently not filtering */}
                <div className="form-group">
                  <div>
                    <label className="form-label" htmlFor="bedroom">
                      Bedrooms
                    </label>
                  </div>
                  <div>
                  <select
                    className="form-select"
                    id="bedroom"
                    value={this.state.bedroom}
                    onChange={event => this.setState({ bedroom: event.target.value })}
                    >
                        <option value="grapefruit">1</option>
                        <option value="lime">2</option>
                        <option value="coconut">3</option>
                        <option value="mango">4</option>
                    </select>
                  </div>
                </div>
                </Cell>
              <Cell small={12} large={4} className="filterItem">
                <div className="form-group">
                {/* Filtering by highest to lowest */}
                  <div>
                    <label className="form-label" htmlFor="sortorder">
                      Sort Order
                    </label>
                  </div>
                  <div>
                    <select
                      className="form-select"
                      id="sortorder"
                      value={sortOrder}
                      onChange={event =>
                        this.handleChange('sortOrder', event.target.value)
                      }
                    >
                      <option value="">Choose...</option>
                      {sortOrders.map(order => (
                        <option value={getSortOrderValue(order)}>{order}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </Cell>
              {/* Next step would be to fix bedroom filter. 
              Add a filter on a map but location */}
            </Grid>
          </form>
    )
  }
}

export default Filter