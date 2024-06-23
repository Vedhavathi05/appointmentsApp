/* Write your CSS here */

import {Component} from 'react'

import {v4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {
    Title: '',
    date: '',
    appointmentsList: [],
    isActive: false,
  }

  onSubmittingTheAppointment = event => {
    event.preventDefault()
    const {Title, date} = this.state
    if (Title !== '' && date !== '') {
      const newAppointment = {
        id: v4(),
        Title1: Title,
        date1: date,
        isFavorite: false,
      }
      this.setState(prevState => ({
        appointmentsList: [...prevState.appointmentsList, newAppointment],
        Title: '',
        date: '',
      }))
    }
  }

  changeTitle = event => {
    this.setState({Title: event.target.value})
    console.log(event.target.value)
  }

  changeDate = event => {
    this.setState({date: event.target.value})
    console.log(event.target.value)
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(each => {
        if (id === each.id) {
          return {...each, isFavorite: !each.isFavorite}
        }
        return each
      }),
    }))
  }

  changeIsActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {Title, date, appointmentsList, isActive} = this.state
    let ModifiedList
    if (isActive === true) {
      ModifiedList = appointmentsList.filter(
        each => isActive === each.isFavorite,
      )
    }
    return (
      <div className="bg-container">
        <div className="card-container1">
          <div className="card-container">
            <div className="styling-for-the-form-elements">
              <h1>Add Appointment</h1>
              <form
                onSubmit={this.onSubmittingTheAppointment}
                className="form-styling"
              >
                <label htmlFor="title">TITLE</label>
                <br />
                <input
                  type="text"
                  id="title"
                  placeholder="Title"
                  className="adding-width-to-the-input"
                  onChange={this.changeTitle}
                  value={Title}
                />
                <br />
                <br />

                <label htmlFor="date">DATE</label>
                <br />
                <input
                  type="date"
                  id="date"
                  className="adding-width-to-the-input"
                  onChange={this.changeDate}
                  value={date}
                />

                <br />
                <br />
                <button type="submit">Add</button>
              </form>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="image-styling"
              />
            </div>
          </div>
          <hr />
          <div className="Appointments-styling">
            <h1 className="paragraph">Appointments</h1>
            <button
              type="button"
              className="button-styling"
              onClick={this.changeIsActive}
            >
              Starred
            </button>
          </div>
          <ul className="container">
            {isActive &&
              ModifiedList.map(each => (
                <li className="eachItemStyling" key={each.id}>
                  <AppointmentItem
                    appointmentsList={each}
                    key={each.id}
                    toggleIsFavorite={this.toggleIsFavorite}
                  />
                </li>
              ))}
            {!isActive &&
              appointmentsList.map(each => (
                <li className="eachItemStyling" key={each.id}>
                  <AppointmentItem
                    appointmentsList={each}
                    key={each.id}
                    toggleIsFavorite={this.toggleIsFavorite}
                  />
                </li>
              ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
