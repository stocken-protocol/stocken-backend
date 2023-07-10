import { Request, Response } from 'express'
import { NftRepository } from '../infrastructure/nftRepository'
import { NftAppService } from '../services/nftAppService'

const nftRepository = new NftRepository()
const nftAppService = new NftAppService(nftRepository)

export const getById = (req: Request, res: Response) => {
  try {
    const { id: tokenId } = req.params

    const data = {}
    res.json(data)
  } catch (error) {
    console.error('nftController: getById: ', error)
    res.status(500).send(error.message)
  }
}
