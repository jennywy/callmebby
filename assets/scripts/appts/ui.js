const showAppointmentsTemplate = require('../templates/helpers/viewappts.hbs')

const getAppointmentsSuccess = function (data) {
  $('#content').text(null)
  $('.clearform').trigger('reset')
  console.log(data)
  console.log(data.appointments)
  const showAppointmentsHTML = showAppointmentsTemplate({appointments: data.appointments})
  $('#content').append(showAppointmentsHTML)
  $('#message').text('Listed!')
}

const addSuccess = function (data) {
  $('#content').text(null)
  $('.clearform').trigger('reset')
  console.log('the success data is ', data)
  const showAppointmentsHTML = showAppointmentsTemplate({appointments: data})
  $('#content').append(showAppointmentsHTML)
}

const deleteSuccess = function (data) {
  $('.clearform').trigger('reset')
  $('#content').text(null)
  $('#message').text('Deleted!')
  $('#delete-appts').trigger('reset')
}

const updateSuccess = function (data) {
  $('.clearform').trigger('reset')
  $('#content').text(null)
  $('#edit-appts').trigger('reset')
  $('#message').text('Updated!')
}

const fail = function () {
  $('#content').text(null)
  $('#message').text('Something broke!')
}

module.exports = {
  addSuccess,
  getAppointmentsSuccess,
  deleteSuccess,
  updateSuccess,
  fail
}
