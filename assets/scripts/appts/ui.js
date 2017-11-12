const showAppointmentsTemplate = require('../templates/helpers/viewappts.hbs')
const api = require('./api')

const getAppointmentsSuccess = function (data) {
  $('#content').text(null)
  $('.clearform').trigger('reset')
  if (data.appointments.length === 0) {
    $('#content').text('You have no appointments. Click below to create an appointment')
  } else {
    $('#list-appts').hide()
    const showAppointmentsHTML = showAppointmentsTemplate({appointments: data.appointments})
    $('#content').append(showAppointmentsHTML)
    $('.inline-edit').on('click', onInlineEdit)
    $('.inline-delete').on('click', onInlineDelete)
  }
}

const onInlineEdit = (event) => {
  event.preventDefault()
  $('.inline-edit').hide()
  const id = $(event.target).attr('data-id')
  //
  const desc = $(event.target).parent().siblings()[0]
  desc.contentEditable = true
  //
  const phoneNumber = $(event.target).parent().siblings()[2]
  phoneNumber.contentEditable = true
  //
  const apptTime = $(event.target).parent().siblings()[1]
  apptTime.contentEditable = true
  //
  const reminderBody = $(event.target).parent().siblings()[3]
  reminderBody.contentEditable = true
  //
  $(event.target).parent().append('<button class="edit-confirm btn btn-success">Confirm Edit</button>')
  $(event.target).parent().append('<button class="edit-cancel btn btn-warning">Cancel Edit</button>')
  //
  $('.edit-cancel').on('click', function (event) {
    $('.edit-cancel').hide()
    api.index()
      .then((data) => {
        getAppointmentsSuccess(data)
      })
      .catch(fail)
  })
  $('.edit-confirm').on('click', function (event) {
    inlineEdit(id, desc, phoneNumber, apptTime, reminderBody)
  })
}

const inlineEdit = function (id, desc, phoneNumber, apptTime, reminderBody) {
  const newDesc = $(desc).html()
  const newPN = $(phoneNumber).html()
  const newTime = $(apptTime).html()
  const newReminder = $(reminderBody).html()
  const data = {
    appointment: {
      name: newDesc,
      time: newTime,
      phone_number: newPN,
      reminder: newReminder
    }
  }
  if (newDesc !== '' && newPN !== '' && newTime !== '' && newReminder !== '') {
    api.update(id, data)
      .then(updateSuccess)
      .catch(fail)
  }
}

const onInlineDelete = function (event) {
  const id = $(event.target).attr('data-id')
  api.destroy(id)
    .then(deleteSuccess)
    .catch(fail)
}

const addSuccess = function (data) {
  $('#content').text(null)
  $('.clearform').trigger('reset')
  const showAppointmentsHTML = showAppointmentsTemplate({appointments: data})
  $('#content').append(showAppointmentsHTML)
}

const deleteSuccess = function (data) {
  $('.clearform').trigger('reset')
  $('#content').text(null)
  $('#message').text('Deleted!').fadeIn().delay(4000).fadeOut()
  $('#delete-appts').trigger('reset')
  api.index()
    .then((data) => {
      getAppointmentsSuccess(data)
    })
    .catch(fail)
}

const updateSuccess = function (data) {
  $('.clearform').trigger('reset')
  $('#content').text(null)
  $('#edit-appts').trigger('reset')
  $('#message').text('Updated!').fadeIn().delay(4000).fadeOut()
  api.index()
    .then((data) => {
      getAppointmentsSuccess(data)
    })
    .catch(fail)
}

const fail = function () {
  $('#content').text(null)
  $('#message').text('Something went wrong, please kindly try again!').fadeIn().delay(4000).fadeOut()
}

module.exports = {
  addSuccess,
  getAppointmentsSuccess,
  deleteSuccess,
  updateSuccess,
  fail
}
