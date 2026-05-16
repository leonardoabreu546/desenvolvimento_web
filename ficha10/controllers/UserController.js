const User = require('../sequelize').User;

/* GET all users */
exports.findAllUsers = function (req, res) {
    User.findAll()
        .then(results => res.json(results))
        .catch(err => res.status(500).json(err));
};

/* GET user by ID */
exports.findUserById = function (req, res) {
    User.findByPk(req.params.id)
        .then(result => {
            if (!result) {
                return res.status(404).json({ message: "User not found" });
            }
            res.json(result);
        })
        .catch(err => res.status(500).json(err));
};

/* CREATE user */
exports.createUser = function (req, res) {
    User.create(req.body)
        .then(result => res.status(201).json(result))
        .catch(err => res.status(500).json(err));
};

/* UPDATE user */
exports.updateUser = function (req, res) {
    User.update(req.body, {
        where: { user_id: req.params.id }
    })
        .then(result => {
            if (result[0] === 0) {
                return res.status(404).json({ message: "User not found or no changes made" });
            }
            res.json({ message: "User updated successfully" });
        })
        .catch(err => res.status(500).json(err));
};

/* DELETE user */
exports.deleteUser = function (req, res) {
    User.destroy({
        where: { user_id: req.params.id }
    })
        .then(result => {
            if (!result) {
                return res.status(404).json({ message: "User not found" });
            }
            res.json({ message: "User deleted successfully" });
        })
        .catch(err => res.status(500).json(err));
};