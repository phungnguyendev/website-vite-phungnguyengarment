export interface User {
  id?: number
  email?: string
  password?: string
  avatar?: string
  accessToken?: string
  createdAt?: string
  updatedAt?: string
}

export interface Attachment {
  id?: number
  url?: string
  type?: string
  caption?: string
  createdAt?: string
  updatedAt?: string
  orderNumber?: number
}

export interface Category {
  id?: number
  imageUrl?: string
  title?: string
  desc?: string
  createdAt?: string
  updatedAt?: string
  orderNumber?: number
}

export interface HeroBanner {
  id?: number
  title?: string
  imageUrl?: string
  orderNumber?: number
  createdAt?: string
  updatedAt?: string
}

export interface HomeProduct {
  id?: number
  title?: string
  imageUrl?: string
  orderNumber?: number
  createdAt?: string
  updatedAt?: string
}

export interface JobSector {
  id?: number
  title?: string
  orderNumber?: number
  createdAt?: string
  updatedAt?: string
}

export interface Branch {
  id?: number
  title?: string
  orderNumber?: number
  createdAt?: string
  updatedAt?: string
}

export interface Partner {
  id?: number
  title?: string
  imageUrl?: string
  orderNumber?: number
  createdAt?: string
  updatedAt?: string
}

export interface PostAttachment {
  id?: number
  postID?: number
  attachmentID?: number
  url?: string
  type?: string
  orderNumber?: number
  createdAt?: string
  updatedAt?: string
}

export interface Post {
  id?: number
  title?: string
  content?: string
  imageUrl?: string
  publishedAt?: string
  orderNumber?: number
  createdAt?: string
  updatedAt?: string
}

export interface Prize {
  id?: number
  title?: string
  imageUrl?: string
  orderNumber?: number
  createdAt?: string
  updatedAt?: string
}

export interface Product {
  id?: number
  categoryID?: number
  title?: string
  desc?: string
  imageUrl?: string
  orderNumber?: number
  createdAt?: string
  updatedAt?: string
  category?: Category
}

export interface Project {
  id?: number
  title?: string
  desc?: string
  imageUrl?: string
  orderNumber?: number
  createdAt?: string
  updatedAt?: string
}

export interface RecruitmentPost {
  id?: number
  jobSectorID?: number
  quantity?: number
  wage?: string
  age?: string
  sex?: string
  academicLevel?: string
  routeTitle?: string
  workingTime?: string
  workingPlace?: string
  expirationDate?: string
  jobDescription?: string
  required?: string
  benefits?: string
  orderNumber?: number
  createdAt?: string
  updatedAt?: string
  jobSector?: JobSector
}
