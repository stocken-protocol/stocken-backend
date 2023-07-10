import { NftMetadata } from '../domain/nftInterface'
import { NftRepositoryInterface } from '../infrastructure/nftRepositoryInterface'

export class NftAppService {
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
