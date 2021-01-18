'use strict'

const store = require('./store')
const api = require('./api')

const onShowTasks = function () {
  api.showTasks()
    .then(onShowTasksSuccess)
    .catch(onFailure)
}

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

  $('#display-tasks').html('')

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
  const tasks = response.tasks

  let tasksHTML = ''

  if (tasks.length !== 0) {
    tasks.forEach(currentTask => {
      if (currentTask.dueDate === '') {
        currentTask.dueDate = 'No due date'
      }
      const currentTaskHTML = (`
      <h4>Task: ${currentTask.task}</h4>
      <p>Due Date: ${currentTask.dueDate}</p>
      <p>Task ID: ${currentTask._id}</p>
      `)

      tasksHTML += currentTaskHTML
    })
    $('#display-tasks').html(tasksHTML)
  } else {
    $('#display-tasks').html('You currently have no tasks')
  }
}

const onUpdateTaskSuccess = function () {
  $('#message').html('<p>Successfully Updated Task!</p>')
  $('#message').fadeIn()
  $('#message').delay(2000).fadeOut('slow')
  $('.modal-message').text('')
  $('#edit-task').trigger('reset')
  $('#editTaskModal').modal('hide')
}

const onDeleteTaskSuccess = function () {
  $('#message').html('<p>Successfully Deleted Task!</p>')
  $('#message').fadeIn()
  $('#message').delay(2000).fadeOut('slow')
  $('.modal-message').text('')
  $('#delete-task').trigger('reset')
  $('#deleteTaskModal').modal('hide')
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
  onUpdateTaskSuccess,
  onDeleteTaskSuccess,
  onFailure,
  onModalFailure,
  onShowTasks
}
