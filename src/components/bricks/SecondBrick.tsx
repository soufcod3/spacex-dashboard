import React from 'react'
import { Brick } from '../Brick'
import { Button, Card } from 'react-bootstrap'

export const SecondBrick = () => {
  return <Brick style={{ height: "325px" }}>
        <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </Card.Text>
      <Button variant='primary'>Go somewhere</Button>
  </Brick>
}