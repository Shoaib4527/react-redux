import React, { Component } from 'react';
import { connect } from 'react-redux';
import StudentAction from './redux/actions/studentAction';

class App extends Component {
  state = {
    name: "",
    age: ""
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleClick= () => {
    this.props.addStudent(this.state)
  }

  handleClickOff= () => {
    this.props.delStudents(this.state)
  }

  render() {
    console.log(this.props)
    return (

      <div className="App">
        <h1>hy</h1>
        <input onChange={this.handleChange} type="text" name="name" />
        <input onChange={this.handleChange} type="text" name="age" />
        <button onClick={this.handleClick}>add</button>
        <button onClick={this.handleClickOff}>remove</button>
        {
          this.props.students.map((item, index) => {
            return (
              <div key={index}>
                <h1>{item.name} <span> {item.age}</span></h1>
                {/* <h1>{item.age}</h1> */}
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.StudentReducer.students
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addStudent: (student) => dispatch(StudentAction.addStudent(student)),
    delStudents: (student) => dispatch(StudentAction.delStudents(student))

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);  