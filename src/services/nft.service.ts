import { NftMetadata } from '../domain/nft.interface'
import { NftRepositoryInterface } from '../infrastructure/nft.repository-intarface'

export class NftService {
  nftRepository: NftRepositoryInterface

  constructor(nftRepository: NftRepositoryInterface) {
    this.nftRepository = nftRepository
  }

  async getById(id: string): Promise<NftMetadata | null> {
    try {
      return await this.nftRepository.getById(id)
    } catch (error) {
      console.error('NftAppService: getById: ', error)
      throw new Error(error)
    }
  }
}
