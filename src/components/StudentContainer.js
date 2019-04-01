import React, {Component} from 'react';
import { Button,Container,Divider,Grid,Header, Image,List,Segment, Card, Icon} from 'semantic-ui-react'
import StudentCard from '../components/StudentCard'
import students from '../student-data'



class StudentContainer extends Component {

state = {
  studentList: students
}

sortAZHandler =  () => {
  let nameArray = [...this.state.studentList]
  // console.log(nameArray);
  nameArray.sort((a, b) => a.name.localeCompare(b.name))
  this.setState({
    studentList: nameArray
  })
}

mapStudents = () => {
  return this.state.studentList.map(studentObj => <StudentCard key={studentObj.id} student={studentObj} />)
}
render () {

  return   (
    <Segment style={{ padding: '0em' }} vertical>
    <Button onClick={this.sortAZHandler}>Sort A-Z </Button>

      <Grid four-column stackable>
          <Grid.Column>
        <Grid.Row textAlign='center'>
          <Card.Group centered style={{ paddingBottom: '5em', paddingTop: '5em' }}>

              {this.mapStudents()}

          </Card.Group>
        </Grid.Row>
      </Grid.Column>
      </Grid>
    </Segment>)
}
}

export default StudentContainer
