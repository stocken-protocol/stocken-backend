import { Nft } from '../domain/nftInterface'

export interface NftRepositoryInterface {
  getById(id: string): Promise<Nft | null>
}
