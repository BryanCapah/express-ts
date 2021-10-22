import { Router } from 'express'
import getUser from '../controllers/users';
import createUser from '../controllers/users/create';
import deleteUser from '../controllers/users/delete';
import updateUser from '../controllers/users/update';
const router: Router = Router();

router.get('/', getUser)
router.get('/create', createUser)
router.get('/update', updateUser)
router.get('/delete', deleteUser)

export default router