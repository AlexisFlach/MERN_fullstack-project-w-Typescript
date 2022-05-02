const { UserModel } = require('../models/UserModels')

const createUser = async (req, res) => {
  console.log('Creating user')
  const { name, age, gender } = req.body;
  if (name && age && gender) {
    const newObject = {
      name: name,
      age: Number(age),
      gender: gender
    }
    // Mongoose
    try {
      const user = new UserModel(newObject)
      const response = await user.save()
      console.log(response)
      res.status(201).send(response)
    } catch (error) {
      console.error(error)
      res.status(400).send({
        error: 'Error creating user'
      })
    }
  } else {
    console.error('name, age or gender failed')
    res.status(204).send('No body')
  }
}

const getAllUsers = async (req, res) => {

  try {
    const users = await UserModel.find({});
    if (!users) {
      res.status(204).send("No users found")
    }
    res.send(users)
  } catch (error) {
    console.error(error)
    res.status(400).send({
      error: 'Error getting users'
    })
  }
}

module.exports = { createUser, getAllUsers }