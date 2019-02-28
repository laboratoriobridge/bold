export default [
  {
    title: 'About',
    icon: 'chatFilled',
    href: '/about',
  },
  {
    title: 'Getting Started',
    icon: 'rocket',
    href: '/getting-started',
  },
  {
    title: 'Design Guidelines',
    icon: 'penTool',
    href: '/design-guidelines',
    children: [
      { href: '/design-guidelines/accessibility', title: 'Accessibility' },
      { href: '/design-guidelines/color', title: 'Color' },
      { href: '/design-guidelines/grid', title: 'Grid' },
      { href: '/design-guidelines/iconography', title: 'Iconography' },
      { href: '/design-guidelines/illustrations', title: 'Illustrations' },
      { href: '/design-guidelines/typography', title: 'Typography' },
    ],
  },
  {
    title: 'Components',
    icon: 'bricksFilled',
    href: '/components',
  },
  {
    title: 'Resources',
    icon: 'archiveFilled',
    href: '/resources',
  },
]
