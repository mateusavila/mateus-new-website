export interface ImageSizes {
  thumbnail: string
  'thumbnail-width': number
  'thumbnail-height': number
  medium: string
  'medium-width': number
  'medium-height': number
  medium_large: string
  'medium_large-width': number
  'medium_large-height': number
  large: string
  'large-width': number
  'large-height': number
  '1536x1536': string
  '1536x1536-width': number
  '1536x1536-height': number
  '2048x2048': string
  '2048x2048-width': number
  '2048x2048-height': number
}

export interface ImagesWP {
  id: number
  ID: number
  title: string
  filename: string
  filesize: number
  url: string
  link: string
  alt: string
  author: string
  description: string
  caption: string
  name: string
  status: string
  uploaded_to: number
  date: string | Date
  modified: string | Date
  menu_order: number
  mime_type: string
  type: string
  subtype: string
  icon: string
  width: number
  height: number
  sizes: ImageSizes
}

export interface AuthorWP {
  name: string
  email: string
  photo: string
  description: string
  first_name: string
  last_name: string
  job: string | null
}

export interface ProjectsInterface {
  id: number
  title: string
  language: "pt" | "en"
  content: string
  excerpt: string
  category: any
  slug: string
  date: string
  updated_date: string
  views: number
  author: AuthorWP
  acf: {
    images: {
      image: ImagesWP
      image_webp: ImagesWP
      image_avif: ImagesWP
    },
    url: string
    status: string
    status_en: string
    agency: boolean | string
    client: string
    background: string | boolean
    gallery: string | boolean
    techs: string[]
  }
}

export interface ResponseWP {
  data: {
    projects: ProjectsInterface[]
    posts: any
    page: any
  }
}