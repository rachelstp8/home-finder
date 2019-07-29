import React, { Component } from 'react';
import '../../App.scss';
import { Grid, GridContainer, Cell } from 'react-foundation';

class Hero extends Component {
  render() {
    return (
      <GridContainer>
        <Grid>
          <Cell sizes="medium-6">
            <h1 className="heroText">Find your next home</h1>
          </Cell>
        </Grid>
      </GridContainer>
    );
  }
}

export default Hero;
