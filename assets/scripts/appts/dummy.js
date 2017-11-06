$('#edit').click(function () {
  $('#edit').hide()
  $('td').each(function () {
    const content = $(this).html()
    $(this).html('<textarea>' + content + '</textarea>')
  })

  $('#save').show()
  $('.info').fadeIn('fast')
})

$('#save').click(function () {
  $('#save, .info').hide()
  $('textarea').each(function () {
    const content = $(this).val()
    $(this).html(content)
    $(this).contents().unwrap()
  })

  $('#edit').show()
})

let id
let newName
let newPhoneNumber
let newTime
let newReminder
let data = {
  id,
  newName,
  newPhoneNumber,
  newReminder,
  newTime
}
$('#edit').hide()
$('td').each(function () {
  const content = $(this).html()
  $(this).html('<textarea>' + content + '</textarea>')
})
$('#save').show()
$('#save').click(function () {
  $('textarea').val(function () {
  console.log('this is ', this)

  id = $('#appt-id').val()
  console.log('id is', id)

  newName = $('#appt-name').val()
  newPhoneNumber = $('#appt-num').val()
  newTime = $('#appt-time').val()
  newReminder = $('#appt-reminder').val()

  console.log('data is ', data)

  const content = $(this).val()
  $(this).html(content)
  $(this).contents().unwrap()
  })
})

const onEdit = function(event) {
event.preventDefault()
const data = getFormFields(event.target)
const id = data.userlanguage.id
api.update(id, data)
  .then(ui.updateSuccess)
  .catch(ui.fail)
}
