const vehicles = require("../data/vehicles");

const list = (req, res) => {
    res.json(vehicles)
};

const show = (req, res) => {
    const vehiclePath = vehicles.find(v => v._id == req.params.id)
    res.json(vehiclePath)
};

const create = (req, res) => {
    const newId = vehicles.length+1
    req.body._id = newId

    // pushing req.body to contacts array
    vehicles.push(req.body)
    res.send('posted')
};

module.exports = { list, show, create }