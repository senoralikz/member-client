'use strict'

const store = require('./store')

const onSignUpSuccess = function (response) {
  $('#message').html('<p>Signed Up Successfully!</p>')
  $('#message').fadeIn()
  $('#message').delay(2000).fadeOut('slow')
  $('#sign-up').trigger('reset')
  $('#sign-up-modal').modal('hide')
}

const onSignInSuccess = function (response) {
  $('#message').html('<p>Signed In Successfully!</p>')
  $('#message').fadeIn()
  $('#message').delay(2000).fadeOut('slow')
  $('#sign-in').trigger('reset')

  store.user = response.user

  $('#sign-in-modal').modal('hide')
  $('.unauthenticated').hide()
  $('.authenticated').show()
}

const onChangePasswordSuccess = function (response) {
  $('#message').html('<p>Successfully Changed Password!</p>')
  $('#message').fadeIn()
  $('#message').delay(2000).fadeOut('slow')
  $('#change-password').trigger('reset')
  $('#changePasswordModal').modal('hide')
}

const onSignOutSuccess = function () {
  $('#message').html('<p>Signed Out Successfully!</p>')
  $('#message').fadeIn()
  $('#message').delay(2000).fadeOut('slow')

  store.user = null

  $('.unauthenticated').show()
  $('.authenticated').hide()
}

const onNewTaskSuccess = function () {
  $('#message').html('<p>Successfully Added Task!</p>')
  $('#message').fadeIn()
  $('#message').delay(2000).fadeOut('slow')
  $('#new-task').trigger('reset')
  $('#addNewTaskModal').modal('hide')
}

const onShowTasksSuccess = function (response) {
  $('#display-games').html(response.task.length)
}

const onFailure = function (error) {
  $('#message').text('Failed with error: ' + error.responseJSON.message)
  $('#message').fadeIn()
  $('#message').delay(2000).fadeOut('slow')
}

const onModalFailure = function (error) {
  $('.modal-message').text('Failed with error: ' + error.responseJSON.message)
  $('.modal-message').fadeIn()
  $('.modal-message').delay(2000).fadeOut('slow')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onNewTaskSuccess,
  onShowTasksSuccess,
  onFailure,
  onModalFailure
}
