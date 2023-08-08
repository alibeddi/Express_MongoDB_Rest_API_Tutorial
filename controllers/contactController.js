const AsyncHandler = require('express-async-handler')

const Contact = require("../models/ContactsModel")
//@desq get all contacts
//@router GET /api/contacts
//@access public 
const getContact = AsyncHandler(async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
})


//@desq create contact
//@router POST /api/contacts
//@access public 
const createContact = AsyncHandler(async (req, res) => {
    console.log("the request body is", req.body)
    const { name, email, phone } = req.body
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error('all fields are required')

    }

    const contact = await Contact.create({
        name, email, phone
    })
    res.status(200).json(contact)
}
)

//@desq get one contact
//@router GET /api/contacts/:id
//@access public 
const getOneContact = AsyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404)
        throw new Error("contact not found")
    }
    res.status(200).json(contact)
}
)

//@desq update contact
//@router PUT /api/contacts/:id
//@access public 
const UpdateContact = AsyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404)
        throw new Error("contact not found")
    }
    const updatedcontact = await Contact.findByIdAndUpdate(
        req.params.id, req.body, { new: true }
    )

    res.status(200).json(updatedcontact)
})
//@desq delete contact
//@router DELETE /api/contacts/:id
//@access public 
const deleteContact = AsyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404)
        throw new Error("contact not found")
    }
    await Contact.remove()
    res.status(200).json(contact, "contact removed")
})




module.exports = { getContact, createContact, getOneContact, UpdateContact, deleteContact }
