import type { Data, Node } from 'unist'

// server.ts file needed for resume/cv component (sds_custom)

export interface ViewApiResponse {
  data?: {
    total: string
  }
}

export interface GithubRepository {
  stargazerCount: number
  description: string
  homepageUrl: string
  languages: {
    color: string
    name: string
  }[]
  name: string
  nameWithOwner: string
  url: string
  forkCount: number
  repositoryTopics: string[]
}

export interface TagsCount {
  [tag: string]: number
}

export interface PaginationType {
  currentPage: number
  totalPages: number
}

export interface UnistTreeType extends Node {
  children: Node[]
}

export interface ExtendedData extends Data {
  hProperties?: {
    id?: string
  }
}
export interface UnistNodeType extends Node {
  data?: ExtendedData
  lang?: string
  children: Node[]
  properties?: { [key: string]: string[] }
  depth?: number
}
export interface UnistImageNode extends UnistNodeType {
  url: string
  alt: string
  name: string
  attributes: unknown[]
}

export type TOC = {
  value: string
  depth: number
  data: { hProperties?: { id?: string } }
  children: TOC[]
  url: string
}

export interface RemarkTocHeadingOptions {
  exportRef: Array<{ value: string; url: string; depth: number }>
  cleaned?: boolean
}
