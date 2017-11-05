const getAppointmentsSuccess = function (data) {
  $('#content').text(null)
  $('.clearform').trigger('reset')
  console.log(data)
  console.log(data.appointments)
  // const showUserapptsHtml = showUserapptsTemplate({ appointments: data.appointments })
  // $('#content').append(showUserapptsHtml)
  $('#message').text('Listed!')
}

const addSuccess = function (data) {
  $('#content').text(null)
  $('.clearform').trigger('reset')
  console.log('the success data is ', data)
  // const showUserapptsHtml = showUserapptsTemplate({ appointments: data })
  // $('#content').append(showUserapptsHtml)
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
