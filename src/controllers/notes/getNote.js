const Note = require('../../database/models/note');

const getNote = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      ok: false,
      message: 'Note ID is required',
    });
  }

  try {
    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({
        ok: false,
        message: 'Note not found',
      });
    }

    res.status(200).json({
      ok: true,
      data: note,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      message: 'Invalid Note ID',
    });
  }
};

module.exports = getNote;
