type ImageAddress = {
  original: string
  thumbnail: string
}

export type Property = {
  id: string
  name: string
  subtitle: string
  address: string
  guests: number
  bedrooms: number
  bathrooms: number
  price: number
  amenities: string[]
  description: string
  images: ImageAddress[]
}
