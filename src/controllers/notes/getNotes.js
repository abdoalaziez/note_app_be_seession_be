const Note = require('../../database/models/note');

const getNotes = async (req, res) => {
  try {
    // Add user filter to only get notes for the logged-in user
    const notes = await Note.find({ userId: req.user.id }).sort({ createdAt: -1 });

    return res.status(200).json({
      ok: true,
      data: notes,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: 'Error fetching notes'
    });
  }
};

module.exports = getNotes;