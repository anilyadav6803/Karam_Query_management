const express = require('express');
const Query = require('../models/query');
const queryRoute = express.Router();

// Get all queries
queryRoute.get('/getquery', async (req, res) => {
    try {
        const result = await Query.find();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching queries' });
    }
});

// Fetch all pending queries for a user
queryRoute.get('/getpenquery/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Query.find({ uid: id, status: 'pen' }); // Assuming status 'pen'
        res.json({ result });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching pending queries' });
    }
});
queryRoute.get('/getproquery/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Query.find({ uid: id, status: 'pro' }); // Assuming status 'pen'
        res.json({ result });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching pending queries' });
    }
});
queryRoute.get('/getcomquery/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Query.find({ uid: id, status: 'com' }); // Assuming status 'pen'
        res.json({ result });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching pending queries' });
    }
});

// Route to add a new query
queryRoute.post('/addquery', async (req, res) => {
    try {
        const query = new Query(req.body);
        const result = await query.save();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error adding query' });
    }
});

// Route to update a query by id
queryRoute.put('/updatequery/:id', async (req, res) => {
    const { id } = req.params;
    const { department, subject, description } = req.body;
  
    try {
        const updatedQuery = await Query.findByIdAndUpdate(
            id,
            { department, subject, description },
            { new: true } // Returns the updated document
        );
        res.json(updatedQuery);
    } catch (error) {
        res.status(500).json({ error: 'Error updating query' });
    }
});

module.exports = queryRoute;
