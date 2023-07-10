import { NftMetadata } from '../domain/nftInterface'

export interface NftRepositoryInterface {
  getById(id: string): Promise<NftMetadata | null>
}
