import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {appointmentsList, toggleIsFavorite} = props
  const {Title1, date1, isFavorite, id} = appointmentsList
  const imgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const date = () => <p>{format(new Date(date1), 'dd MMMM yyyy, EEEE')}</p>

  const changeFavorite = () => {
    toggleIsFavorite(id)
  }
  return (
    <div className="cardContainerForAppointments">
      <div className="container-styling">
        <p className="paragraph">{Title1}</p>
        <button type="button" className="button-styling" data-testid="star">
          <img src={imgUrl} alt="star" onClick={changeFavorite} />
        </button>
      </div>
      {date()}
    </div>
  )
}
export default AppointmentItem
