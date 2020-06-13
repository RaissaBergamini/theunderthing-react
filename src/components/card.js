
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardSimple = (props) => ( 
<Card>
    <Image source={props.photo} 
     as='a'
     href={props.linkLinkedIn} 
     floated='center'
     size='medium' 
      wrapped ui={true} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.photo}</span>
      </Card.Meta>
      <Card.Description>
        {props.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href={props.linkGit}>
        <Icon name='github' />
        {props.linkGit}
        
      </a>
      <a href={props.linkLinkedIn}>
        <Icon name='linkedin' />
        {props.linkLinkedIn}
      </a>
    </Card.Content>
  </Card>
)


const CardsSimple = (props) => (
  <div>
  <h3>{props.header}</h3>
  <Card.Group>
  {/* TODO: learn how to do for  */}
  <CardSimple name={props.people[0].name} job={props.people[0].job} description={props.people[0].description} photo={props.people[0].photo}></CardSimple>
  <CardSimple name={props.people[1].name} job={props.people[1].job} description={props.people[1].description} photo={props.people[1].photo}></CardSimple>
  </Card.Group>
  </div>
  // {elements.map((value, index) => {
  //       return < CardSimple name=value[index]> < />  
  // })}  
)


export default CardsSimple
