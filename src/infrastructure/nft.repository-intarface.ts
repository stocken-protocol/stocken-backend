import { NftMetadata } from '../domain/nft.interface'

export interface NftRepositoryInterface {
  getById(id: string): Promise<NftMetadata | null>
}
