export type PageLink = {
  label: string
  children?: string[]
}

export const LINKS: PageLink[] = [
  {
    label: 'Product',
    children: [
      'Overview',
      'Pricing',
      'Marketplace',
      'Features',
      'Integrations',
    ],
  },

  {
    label: 'Company',
    children: ['About', 'Team', 'Blog', 'Careers'],
  },

  {
    label: 'Connect',
    children: ['Contact', 'Newsletter', 'LinkedIn'],
  },
]
