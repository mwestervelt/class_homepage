import React, {Component} from 'react';
import { Button,Container,Divider,Grid,Header, Image,List,Segment, Card, Icon} from 'semantic-ui-react'

class StudentCard extends Component {

firstName = () => {
  return this.props.student.name.split(" ")[0]
      }



render () {
  return   (
    <Card textAlign='center'>
      <Card.Content>
        <Card.Header as='h3' style={{ fontSize: '2em' }} textAlign='center'>{this.props.student.name}</Card.Header>
        <Image alt={this.props.student.name} src={`./friend-imgs/${this.firstName()}.png`} />
          <Card.Meta></Card.Meta>
        <Card.Description>
          <strong>"Super cool quote goes here" -quote sayer</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui four buttons'>
          <Button a href='www.google.com'><Icon name='user' /></Button>
          <Button><a href='linkedin.com'><Icon name='linkedin' /></a></Button>
          <Button><a target="_blank" href={this.props.student.github}><Icon name='github' /></a></Button>
          <Button><a href='mywebsite.com'><Icon name='globe' /></a></Button>
        </div>
      </Card.Content>
    </Card>
)
}
}

export default StudentCard
