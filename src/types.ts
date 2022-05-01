export type LinkKind = 'twitter' | 'github' | 'homepage'

export interface LinkEntry {
  url: string
  footer?: boolean
  icon?: string
  kind?: LinkKind
}

export type Link = string | LinkEntry
export type LinkCollection = Record<string | LinkKind, Link> | Link[]

export interface ModuleOptions {
  branding?: {
    kind: 'company' | 'product'
    license?: string | null
    owner?: {
      links: LinkCollection
    }
  }
}
