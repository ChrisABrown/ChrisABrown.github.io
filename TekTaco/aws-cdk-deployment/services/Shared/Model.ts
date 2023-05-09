export interface MenuItem {
  tacosID: string
  name: string
  productType: string
  description?: string
  photoUrl?: string
  inStock: number
  price: number
  sku: string
  rating?: number
  reviews?: Review[]
}

export interface Review {
  body: string
  reviewId: string
  createdAt: string
  updatedAt: string
}
