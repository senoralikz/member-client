'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onModalFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .then(ui.onShowTasks)
    .catch(ui.onModalFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onModalFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onFailure)
}

const onNewTask = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.newTask(data)
    .then(ui.onNewTaskSuccess)
    .then(ui.onShowTasks)
    .catch(ui.onModalFailure)
}

const onUpdateTask = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  if (data.task.id.length !== 0) {
    api.updateTask(data)
      .then(ui.onUpdateTaskSuccess)
      .then(ui.onShowTasks)
      .catch(ui.onModalFailure)
  } else {
    $('.modal-message').text('Please provide a task id!')
    $('.modal-message').fadeIn()
    $('.modal-message').delay(2000).fadeOut('slow')
  }
}

const onUpdateComplete = function (event) {
  event.preventDefault()

  api.updateComplete()
    .then(ui.onUpdateCompleteSuccess)
    .then(ui.onShowTasks)
    .catch(ui.onFailure)
}

const onDeleteTask = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  if (data.task.id.length !== 0) {
    api.deleteTask(data)
      .then(ui.onDeleteTaskSuccess)
      .then(ui.onShowTasks)
      .catch(ui.onModalFailure)
  } else {
    $('.modal-message').text('Please provide a task id!')
    $('.modal-message').fadeIn()
    $('.modal-message').delay(2000).fadeOut('slow')
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewTask,
  onUpdateTask,
  onUpdateComplete,
  onDeleteTask
}
