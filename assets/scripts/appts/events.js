const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onGetAppointments = (event) => {
  event.preventDefault()
  api.index()
    .then(ui.getAppointmentsSuccess)
    .catch(ui.fail)
}

const onAddAppointment = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('before data is ', data)
  api.create(data)
    .then(ui.addSuccess)
    .catch(ui.fail)
}

const onUpdateAppointment = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = data.appointment.id
  console.log('scope check for data: ', data)
  console.log('scope check id is ', id)
  api.update(id, data)
    .then(ui.updateSuccess)
    .catch(ui.fail)
}

const onDeleteAppointment = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.destroy(data.appointment.id)
    .then(ui.deleteSuccess)
    .catch(ui.fail)
}

const addHandlers = () => {
  $('#list-appts').on('submit', onGetAppointments)
  $('#add-appts').on('submit', onAddAppointment)
  $('#edit-appts').on('submit', onUpdateAppointment)
  $('#delete-appts').on('submit', onDeleteAppointment)
}

module.exports = {
  addHandlers
}
