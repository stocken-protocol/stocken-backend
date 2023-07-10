interface Attribute {
  // Define your attribute structure here.
}

export interface Nft {
  id: string
  name: string
  description: string
  image: string
  externalUrl: string
  attributes: Attribute[]
}
