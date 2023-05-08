import { Router } from "express";

const boxRoutes = Router();

// POST /api/box/:id
boxRoutes.route('/')
    .post((req, res) => {
        const title = req.body.title;
        // TODO: create the box properly
        res.json({ msg: `dummy route worked for ${title}` });
    })

// GET /api/box/:id
boxRoutes.route('/:id')
    .get((req, res) => {
        const id = req.params.id;
        // TODO: fetch the box properly
        res.json({ msg: `dummy route for fetching box with id ${id}`});
    })

// DEL /api/box/:id
boxRoutes.route('/:id')
    .delete((req, res) => {
        const id = req.params.id;
        // TODO: delete the box properly
        res.json({ msg: `dummy route for deleting box with id ${id}` });
    })

export default boxRoutes