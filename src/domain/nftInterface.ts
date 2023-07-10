export interface Attribute {
  trait_type: string
  value: string
}

export interface NftMetadata {
  id: string
  name: string
  description: string
  image: string
  externalUrl: string
  attributes: Attribute[] | []
}
