const contacts = require("../data/contacts");

const list = (req, res) => {
    res.json(contacts)
};

const show = (req, res) => {
    const contactPath = contacts.find(i => i._id == req.params.id)
    res.json(contactPath)
};

const create = (req, res) => {
    const newId = contacts.length+1
    req.body._id = newId

    // pushing req.body to contacts array
    contacts.push(req.body)
    res.send('posted')
};

module.exports = { list, show, create }