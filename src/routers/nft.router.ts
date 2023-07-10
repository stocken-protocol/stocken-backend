import express from 'express'

import * as nftController from '../controllers/nft.controller'

export const router = express.Router()

router.get('/:id', nftController.getById)
