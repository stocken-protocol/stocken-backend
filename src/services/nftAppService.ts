import { NftRepositoryInterface } from '../infrastructure/nftRepositoryInterface'
import { Nft } from '../domain/nftInterface'

export class NftAppService {
  nftRepository: NftRepositoryInterface

  constructor(nftRepository: NftRepositoryInterface) {
    this.nftRepository = nftRepository
  }

  getById(id: string): Promise<Nft | null> {
    try {
      return this.nftRepository.getById(id)
    } catch (error) {
      console.error('NftAppService: getById: ', error)
    }
  }
}
