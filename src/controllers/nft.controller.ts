import { Request, Response } from 'express'

import { NftRepository } from '../infrastructure/nft.repository'
import { NftService } from '../services/nft.service'

const nftRepository = new NftRepository()
const nftAppService = new NftService(nftRepository)

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
