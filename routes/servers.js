import {Router} from 'express'
import {getAll, create, remove, edit, getItemById} from '../controllers/servers.js'
const router = Router()

router.get('/api/server', getAll)

router.get('/api/server/:id', getItemById)

router.post('/api/server', create)

router.delete('/api/server/:id', remove)

router.patch('/api/server/:id', edit)


export default router
