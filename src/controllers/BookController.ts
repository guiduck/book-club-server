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

  public async delete (req: Request, res: Response): Promise<Response> {
    try {
      
      const bookExist = await Book.find({ _id: req.params.id })

      if (bookExist) {
        await Book.deleteOne({ _id: req.params.id }, ()=>{})   
        return res.status(200).send()
      } else {
        console.log('book doesnt exist')
        return res.status(400).send()
      }         
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'unexpected error'
      })
    }    
  }
}

export default new BookController()