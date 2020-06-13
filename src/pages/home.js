const CardsSimple = (props) => (
    <div>
    <h3>{props.header}</h3>
    <Card.Group>
    {/* TODO: learn how to do for  */}
    <CardSimple name={props.people[0].name} job={props.people[0].job} description={props.people[0].description}></CardSimple>
    <CardSimple name={props.people[1].name} job={props.people[1].job} description={props.people[1].description}></CardSimple>
    </Card.Group>
    </div>
    // {elements.map((value, index) => {
    //       return < CardSimple name=value[index]> < />  
    // })}  
  )
  