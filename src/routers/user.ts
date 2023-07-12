import express from 'express'

import * as userController from '../controllers/user.controller'

export const router = express.Router()

router.get('/:id', userController.get)
