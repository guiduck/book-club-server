import { Schema, model, Document } from 'mongoose'

interface BookInterface extends Document {
  bookId?: String,
  title?: String,
  description?: String,
  date?: String,
  genre?: String,
}

const bookSchema = new Schema({
  bookId: String,
  title: String,
  description: String,
  date: String,
  genre: String,
}, {
  timestamps: true
})

export default model<BookInterface>('Book', bookSchema)