export type NavLinkType = {
  label: string
  options?: string[]
}

export const LINKS: NavLinkType[] = [
  {
    label: 'Product',
    options: ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations'],
  },

  {
    label: 'Company',
    options: ['About', 'Team', 'Blog', 'Careers'],
  },

  {
    label: 'Connect',
    options: ['Contact', 'Newsletter', 'LinkedIn'],
  },
]
