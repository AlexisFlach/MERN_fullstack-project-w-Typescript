const UserController = require('../controllers/UserController')

const urls = {
  user: '/user/',
  users: '/users/'
}

const routes = (app) => {
  app.post(urls.users, UserController.createUser)

  app.get(urls.users, UserController.getAllUsers)
}

module.exports = { urls, routes }