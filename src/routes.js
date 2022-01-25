import { Router } from 'express'
 
import BookController from './controllers/BookController'

const routes = Router()

routes.get('/books', BookController.index)
routes.post('/books', BookController.create)
routes.delete('/books/:id', BookController.delete)

export default routes