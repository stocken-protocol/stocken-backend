import express from 'express'
import * as nftController from '../controllers/nftController'

export const router = express.Router()

router.get('/:id', nftController.getById)
