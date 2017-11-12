'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('.clearform').trigger('reset')
  $('#message').text('Successfully signed up').fadeIn().delay(4000).fadeOut()
  $('#sign-up').hide()
}

const signUpFailure = function () {
  $('.clearform').trigger('reset')
  $('#message').text('Error on sign up').fadeIn().delay(4000).fadeOut()
}

const signInSuccess = function (data) {
  $('.clearform').trigger('reset')
  $('#message').text('Successfully signed in').fadeIn().delay(4000).fadeOut()
  store.user = data.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('.after').show()
}

const signInFailure = function () {
  $('#message').text('Error on sign in').fadeIn().delay(4000).fadeOut()
}

const signOutSuccess = function () {
  $('.clearform').trigger('reset')
  $('#message').text('Signed Out Successfully').fadeIn().delay(4000).fadeOut()
  store.user = null
  $('#sign-in').show()
  $('#sign-in').trigger('reset')
  $('#sign-up').show()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#content').text(null)
  $('.after').hide()
}

const signOutFailure = function () {
  $('#message').text('Sign Out Failure').fadeIn().delay(4000).fadeOut()
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully').fadeIn().delay(4000).fadeOut()
  $('.clearform').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message').text('Error on change password').fadeIn().delay(4000).fadeOut()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
