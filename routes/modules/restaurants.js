const express = require("express")
const router = express.Router()
const Restaurant = require("../../models/Restaurant")

router.get('/new', (req, res) => {
  return res.render('new') 
})

router.get("/:id", (req, res) => {
  const _id = req.params.id
  const userId = req.user._id
  return Restaurant.findOne({ _id, userId })
    .lean()
    .then(restaurantData => res.render("show", { restaurantData }))
    .catch(err => console.log(err))
})

router.post("/", (req, res) => {
  const userId = req.user._id
  return Restaurant.create({...req.body, userId })
    .then(() => res.redirect("/"))
    .catch(err => console.log(err))
})

router.get("/:id/edit", (req, res) => {
  const _id = req.params.id
  const userId = req.user._id
  return Restaurant.findOne({ _id, userId })
    .lean()
    .then(restaurantData => res.render("edit", { restaurantData }))
    .catch(err => console.log(err))
})

router.put("/:id", (req, res) => {
  const _id = req.params.id
  const userId = req.user._id
  return Restaurant.findOneAndUpdate({ _id, userId })
    .then(() => res.redirect(`/restaurants/${_id}`))
    .catch(err => console.log(err))
})

router.delete("/:id", (req, res) => {
  const _id = req.params.id
  const userId = req.user._id
  return Restaurant.findOneAndRemove({ _id, userId })
    .then(() => res.redirect("/"))
    .catch(err => console.log(err))
})

module.exports = router
