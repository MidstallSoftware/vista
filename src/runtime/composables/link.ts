import { Link, LinkCollection } from '../../types'

export function generateLinkSides(
  links: LinkCollection
): Record<'default' | string, Link[]> {
  const sides: Record<string, Link[]> = {}

  if (Array.isArray(links)) {
    for (let link of links) {
      if (!Array.isArray(link.side)) link.side = ['default']

      const side = link.side.pop()
      if (!side) continue
      if (!sides[side]) sides[side] = []
      sides[side].push(link)
    }
  } else {
    for (let linkName in links) {
      const link = links[linkName]
      if (!Array.isArray(link.side)) link.side = ['default']

      const side = link.side.pop()
      if (!side) continue
      if (!sides[side]) sides[side] = []
      sides[side].push(link)
    }
  }
  return sides
}

export function combineLinkCollection(
  a?: LinkCollection,
  b?: LinkCollection
): LinkCollection {
  if (typeof a === 'undefined') a = []
  if (typeof b === 'undefined') b = []
  if (Array.isArray(a) && !Array.isArray(b)) b = Object.values(b)
  else if (!Array.isArray(a) && Array.isArray(b)) a = Object.values(a)
  return [...(a as []), ...(b as [])]
}
