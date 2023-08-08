const express = require('express')
const router = express.Router()
const { getContact, createContact, getOneContact, UpdateContact, deleteContact } = require('../controllers/ContactControllers')

router.route("/").get(getContact).post(createContact)
router.route("/:id").get(getOneContact).put(UpdateContact).delete(deleteContact)
module.exports = router