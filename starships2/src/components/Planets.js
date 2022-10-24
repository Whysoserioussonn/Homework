import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

export default function Planets({data}) {
  return (
    <>
      <h1>Planets</h1>
      <Grid columns={3}>
        {data.map((planets, i) => {
            return(
              <Grid.Column key={i}>
                <Card>
                  <Card.Content>
                  <Card.Header>{planets.name}</Card.Header>
                  <Card.Description>
                  <strong>Diameter</strong>
                    <p>{planets.diameter}</p>
                    <strong>Climate</strong>
                    <p>{planets.climate}</p>
                    <strong>Population</strong>
                    <p>{planets.population}</p>                
                    <strong>Terrain</strong>
                    <p>{planets.terrain}</p>                  
                    <strong>Surface Water</strong>
                    <p>{planets.surface_water}</p>
                  </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            )
        })}
      </Grid>    
    </>
  )}