const comments = require("../data/comments");

const list = (req, res) => {
    res.json(comments)
};

const show = (req, res) => {
    const commentPath = comments.find(c => c._id == req.params.id)
    res.json(commentPath)
};

const create = (req, res) => {   
    const newId = comments.length+1
    req.body._id = newId

    // pushing req.body to contacts array
    comments.push(req.body)
    res.send('posted')
};

module.exports = { list, show, create }