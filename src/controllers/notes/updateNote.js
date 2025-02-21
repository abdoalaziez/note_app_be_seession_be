const Note = require('../../database/models/note');

const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  if (!id) {
    return res.status(400).json({
      ok: false,
      message: 'Note ID is required',
    });
  }

  try {
    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, content, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );

    if (!updatedNote) {
      return res.status(404).json({
        ok: false,
        message: 'Note not found',
      });
    }

    res.status(200).json({
      ok: true,
      message: 'Note updated successfully',
      data: updatedNote,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      message: 'Error updating note',
      data: error.message,
    });
  }
};

module.exports = updateNote;
