const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const User = require('../user')
const Restaurant = require('../Restaurant')
const restaurantList = require('./restaurant.json').results
const db = require('../../config/mongoose')

const SEED_USER = [
  {
    name: 'user1',
    email: 'user1@example.com',
    password: '1234',
    index: [1, 2, 3]
  },
  {
    name: 'user2',
    email: 'user2@example.com',
    password: '1234',
    index: [4, 5, 6]
  }
]

db.once('open', () => {
  Promise.all(
    Array.from(SEED_USER, seeder => {
      return bcrypt
        .genSalt(10)
        .then(salt => bcrypt.hash(seeder.password, salt))
        .then(hash => User.create({
          name: seeder.name || '吃貨',
          email: seeder.email,
          password: hash,
          loginMethod: 'email'
        }))
        .then(user => {
          const userRestaurantList = []
          Promise.all(Array.from(seeder.index, i => {
            const restaurantData = restaurantList.find(restaurant => restaurant.id === i)
            restaurantData.userId = user._id
            userRestaurantList.push(restaurantData)
          }))
          return Restaurant.create(userRestaurantList)
        })
    }))
    .then(() => {
      console.log('Done.')
      process.exit()
    })
    .catch(err => console.log(err))
})