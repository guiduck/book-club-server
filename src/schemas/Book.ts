import { Schema, model, Document } from 'mongoose'

interface BookInterface extends Document {
  title?: String,
  description?: String,
  date?: String,
  genre?: String,
}

const bookSchema = new Schema({
  title: String,
  description: String,
  date: String,
  genre: String,
}, {
  timestamps: true
})

export default model<BookInterface>('Book', bookSchema)