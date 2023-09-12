const Person = require("../Models/personModels");


//fetching all
const fetchNewProfile = async (req, res) => {
    const person = await Person.find();
    if (!person) {
        res.status(404);
        throw new Error('person Not Found');
    }
    res.json(person);
};
// Fetch a Person resource

const fetchNewSingleProfile = async (req, res, next) => {
    const userId = req.params.id;
    try {
        const person = await Person.findById(userId);

        if (!person) {
            const err = new Error("User not found");
            res.status(404);
            next(err);
        } else {
            res.json({ data: person });
        }
    } catch (err) {

        // Check if the error is a CastError (invalid ID)
        if (err.name === "CastError") {
            res.status(400);
            err.message = "Use a valid ID format";
            next(err);
        } else {
            res.status(500);
            err.message = "Server failed to fetch user. Try again...";
            next(err);
        }
    }
};

//@desc Create a Person resource
const createNewProfile = async (req, res, next) => {
    const { name } = req.body;
    if (!name || typeof name !== "string") {
        const err = new Error("Invalid or missing 'name' field");
        res.status(400);
        next(err);
    } else {
        const person = new Person({
            name
        });
        try {
            await person.save();
            res.status(201).json({ data: person });
        } catch (err) {
            res.status(500);
            err.message = "Failed to create new user.";
            next(err);
        }
    }
};


//@desc Update a Person resource
const updateSingleProfile = async (req, res, next) => {
    const { name } = req.body;
    if (!name || typeof name !== "string") {
        const err = new Error("Invalid input or missing 'name' field");
        res.status(400);
        next(err);
    }

    try {
        const updatedUser = await Person.findByIdAndUpdate(
            req.params.id,
            { name },
            {
                new: true,
            }
        );
        if (!updatedUser) {
            const err = new Error("User not found");
            res.status(404);
            next(err);
        } else {
            res.status(200).json({ data: updatedUser });
        }
    } catch (err) {
        // Check if the error is a CastError (invalid ID)
        if (err.name === "CastError") {
            res.status(400);
            err.message = "Use a valid ID format";
            next(err);
        } else {
            res.status(500);
            err.message = "Failed to update user.";
            next(err);
        }
    }
};

//@desc Delete a Person resource
const deleteSingleProfile = async (req, res, next) => {
    const userId = req.params.id;
    try {
        const result = await Person.findByIdAndDelete(userId);

        if (!result) {
            const err = new Error("User not found");
            res.status(404);
            next(err);
        } else {
            res.json({ data: result });
        }
    } catch (err) {
        // Check if the error is a CastError (invalid ID)
        if (err.name === "CastError") {
            res.status(400);
            err.message = "Use a valid ID format";
            next(err);
        } else {
            res.status(500);
            err.message = "Failed to delete user";
            next(err);
        }
    }
};

module.exports = {
    fetchNewSingleProfile,
    createNewProfile,
    deleteSingleProfile,
    updateSingleProfile,
    fetchNewProfile
}