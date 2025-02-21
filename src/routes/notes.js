// importing express
const express = require('express');

// import controllers
const getNotesController = require('../controllers/notes/getNotes');
const getNoteController = require('../controllers/notes/getNote');
const createNoteController = require('../controllers/notes/createNote');
const updateNoteController = require('../controllers/notes/updateNote');
const deleteNoteController = require('../controllers/notes/deleteNote');
const isAuthenticated = require('../middleware/authMiddleware');

// create a router instance
const router = express.Router();

// Get notes route 
router.get('/notes', isAuthenticated, getNotesController);

// Get note route
router.get('/notes/:id', isAuthenticated, getNoteController);

// Create note route
router.post('/notes', isAuthenticated, createNoteController);

// Update note route
router.put('/notes/:id', isAuthenticated, updateNoteController);

// Delete note route
router.delete('/notes/:id', isAuthenticated, deleteNoteController);

module.exports = router;