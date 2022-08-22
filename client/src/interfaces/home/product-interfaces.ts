export interface ProductRoot {
    data: Product[]
    meta: Meta
  }
  
  export interface Product {
    id: number
    attributes: ProductAttributes
  }
  
  export interface ProductAttributes {
    name: string
    description: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    images: Images
    reviews: Reviews
  }
  
  export interface Images {
    data: ImagesData[]
  }
  
  export interface ImagesData {
    id: number
    attributes: ImagesAttributes
  }
  
  export interface ImagesAttributes {
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats: Formats
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: any
    provider: string
    provider_metadata: any
    createdAt: string
    updatedAt: string
  }
  
  export interface Formats {
    thumbnail: Thumbnail
  }
  
  export interface Thumbnail {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: any
    size: number
    width: number
    height: number
  }
  
  export interface Reviews {
    data: ReviewsData[]
  }
  
  export interface ReviewsData {
    id: number
    attributes: ReviewsAttributes
  }
  
  export interface ReviewsAttributes {
    reviewer_name: string
    review: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }

  export interface Meta {
    pagination: Pagination
  }
  
  export interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
  
