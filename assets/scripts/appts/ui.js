const showAppointmentsTemplate = require('../templates/helpers/viewappts.hbs')

const getAppointmentsSuccess = function (data) {
  $('#content').text(null)
  $('.clearform').trigger('reset')
  console.log('get success data is ', data)
  console.log('get success data.appts is ', data.appointments)
  const showAppointmentsHTML = showAppointmentsTemplate({appointments: data.appointments})
  $('#content').append(showAppointmentsHTML)
  $('#message').text('Listed!')
  // $('#inline-edit').on('click', onInlineEdit)
}
//
// const onInlineEdit = (event) => {
//   event.preventDefault()
//   console.log('you clicked inline edit')
//   console.log('this is :', this)
//   const apptId = $(this).attr('data-id')
//   console.log('apptId is:', apptId)
//   // id = $('#appt-id').val()
//   //
//   // newName = $('#appt-name').val()
//   // newPhoneNumber = $('#appt-num').val()
//   // newTime = $('#appt-time').val()
//   // newReminder = $('#appt-reminder').val()
// }

const addSuccess = function (data) {
  $('#content').text(null)
  $('.clearform').trigger('reset')
  console.log('the add success data is ', data)
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
  $('#message').text('Something went wrong, please kindly try again!')
}

module.exports = {
  addSuccess,
  getAppointmentsSuccess,
  deleteSuccess,
  updateSuccess,
  fail
}
