const Note = require('../../database/models/note');

const deleteNote = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      ok: false,
      message: 'Note ID is required',
    });
  }

  try {
    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({
        ok: false,
        message: 'Note not found',
      });
    }

    res.status(200).json({
      ok: true,
      message: 'Note deleted successfully',
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      message: 'Error deleting note',
      data: error.message,
    });
  }
};

module.exports = deleteNote;
