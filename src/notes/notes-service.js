const NotesService = {
  getAllNotes(knex) {
    return knex.from('notes').select('*');
  },
  insertNote(knex, newNote) {
    return knex
      .into('notes')
      .insert(newNote)
      .then(rows => {
        return rows[0];
      });
  },
  getById(knex, id) {
    return knex('notes')
      .select('*')
      .where({ id })
      .first();
  },
  deleteNote(knex, id) {
    return knex('notes').delete(id);
  },
  updateNote(knex, id, newNotesFields) {
    return knex('notes')
      .where({ id })
      .update(newNotesFields);
  }
};

module.exports = NotesService;
