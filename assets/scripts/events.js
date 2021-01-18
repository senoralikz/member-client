'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../lib/get-form-fields.js')

const onShowTasks = function (event) {
  event.preventDefault()

  api.showTasks()
    .then(ui.onShowTasksSuccess)
    .catch(ui.onFailure)
}

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
    .catch(ui.onModalFailure)
}

const onUpdateTask = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  if (data.task.id.length !== 0) {
    api.updateTask(data)
      .then(ui.onUpdateTaskSuccess)
      .catch(ui.onModalFailure)
  } else {
    $('.modal-message').text('Please provide a task id!')
  }
}

const onDeleteTask = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  if (data.task.id.length !== 0) {
    api.deleteTask(data)
      .then(ui.onDeleteTaskSuccess)
      .catch(ui.onModalFailure)
  } else {
    $('.modal-message').text('Please provide a task id!')
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewTask,
  onShowTasks,
  onUpdateTask,
  onDeleteTask
}
