import React, { Component } from 'react';

class CoursesPage extends Component {

  state = {
    course: {
      title: ""
    }
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value }
    this.setState({ course: course })
    // console.log(event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.course.title)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input type="text" onChange={this.handleChange} value={this.state.course.title} />
        <input type="submit" name="" id="" value="Save" />
      </form>
    )
  }
}

export default CoursesPage