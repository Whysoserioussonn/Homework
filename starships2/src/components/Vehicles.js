import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

export default function Vehicles({data}) {
  return (
    <>
      <h1>Vehicles</h1>
      <Grid columns={3}>
        {data.map((vehicles, i) => {
            return(
              <Grid.Column key={i}>
                <Card>
                  <Card.Content>
                  <Card.Header>{vehicles.name}</Card.Header>
                  <Card.Description>
                  <strong>model</strong>
                    <p>{vehicles.model}</p>
                    <strong>Vehicle Class</strong>
                    <p>{vehicles.vehicle_class}</p>
                    <strong>Max Atmosphering Speed</strong>
                    <p>{vehicles.max_atmosphering_speed}</p>
                    <strong>Passengers</strong>
                    <p>{vehicles.passengers}</p>
                    <strong>Cargo Capacity</strong>
                    <p>{vehicles.cargo_capacity}</p>
                  </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            )
        })}
      </Grid>    
    </>
  )}
