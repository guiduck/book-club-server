import { Request, Response } from 'express'

import Book from '../schemas/Book'

class BookController {
  public async index (req: Request, res: Response): Promise<Response> {
    const books = await Book.find()

    return res.json(books)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const book = await Book.create(req.body)

    return res.json(book)
  }
}

export default new BookController()