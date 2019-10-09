DROP TABLE IF EXISTS folders_notes;

CREATE TABLE IF NOT EXISTS folders_notes (
  folders_id uuid REFERENCES folders(id) ON DELETE SET NULL,
  notes_id uuid REFERENCES notes(id) ON DELETE SET NULL,
  PRIMARY KEY (folders_id, notes_id)
)