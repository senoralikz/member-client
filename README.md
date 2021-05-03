# 'member-client

### Description

'member is a to-do list. Create a user and add any tasks you would like with a due date. You will also be able to view, update or delete them as you like. To test the app use the credentials below:  
EMAIL: test@testing
PASSWORD: 123456

### Technologies Used

- JavaScript
- HTML
- SCSS
- Bootstrap
- jQuery
- AJAX
- Shell

### Development Process

The goal of the application is to be able to perform the following:

- Have a new user sign up and create hashed password on backend
- Have an existing user sign in and generate new randomized token
- Have user be able to create a new task with required authentication token
- Have user be able to view all created tasks that they own with required authentication token
- Have user be able to update a task that they own with required authentication token
- Have a user be able to delete a task that they own with required authentication token
- User must be able to sign out with required authentication token
- Unauthenticated user can not have access to authenticated functions such as change password, create new task, view all tasks, update task, or delete task
- Have all forms clear on submit success

The application also uses ExpressAPI. Below are requests I made to ensure the API was functioning properly:

- POST /sign-up (sign up new user)
- POST /sign-in (sign in existing user)
- PATCH /change-password (change users password)
- DELETE /sign-out (sign out user)
- POST /tasks (create a new task)
- GET /tasks (view all tasks)
- PATCH /tasks (update specific task)
- DELETE /tasks (delete specific task)

### Unsolved Problems

- Styling
- Checking off completed tasks
- Option to display uncompleted tasks or all tasks
- Have tasks past due date be highlighted

### Wireframe and User Stories

![Imgur](https://i.imgur.com/07AVYzT.png "Wireframe for Fullstack Project")

1. As a user I would like to add a task.
2. As a user I would like to set due dates.
3. As a user I would like to check off completed tasks.
4. As a user I would like to see what tasks are past their due date.
5. As a user I would not want another user to have access to my tasks.

### Links to Repo for API Side of App and the Deployed Sites of Client and API

'member-client deployed site:
https://senoralikz.github.io/member-client/

'member-api repo:
https://github.com/senoralikz/member

'member-api deployed site:
https://dashboard.heroku.com/apps/protected-brushlands-52398
