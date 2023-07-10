import { Request, Response } from 'express'

import { NftRepository } from '../infrastructure/nftRepository'
import { NftAppService } from '../services/nftAppService'

const nftRepository = new NftRepository()
const nftAppService = new NftAppService(nftRepository)

export const getById = async (req: Request, res: Response) => {
  try {
    const { id: tokenId } = req.params
    const nftMetadata = await nftAppService.getById(tokenId)
    res.json({
      data: nftMetadata,
    })
  } catch (error) {
    console.error('nftController: getById: ', error)
    res.status(500).send(error.message)
  }
}
