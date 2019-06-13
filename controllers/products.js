const products = require("../data/products")

const list = (req, res) => {
    res.json(products)
};

const show = (req, res) => {
    const productPath = products.find(p => p._id == req.params.id)
    res.json(productPath)
};

const create = (req, res) => {
    const newId = products.length+1
    req.body._id = newId

    // pushing req.body to contacts array
    products.push(req.body)
    res.send('posted')
};

module.exports = { list, show, create }