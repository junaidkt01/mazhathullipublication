export interface NavLink {
  label: string;
  href: string;
  badge?: string;
  sublinks?: { label: string; href: string }[];
}

export const MAIN_NAVIGATION: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Books', href: '/books' },
  { label: 'Courses', href: '/courses' },
  { label: 'Mazhathulli Awards', href: '/awards' },
  {
    label: 'Web Magazine',
    href: '/web-magazine',
    sublinks: [
      { label: 'Book review', href: '/web-magazine?category=Book%20review' },
      { label: 'Stories', href: '/web-magazine?category=Stories' },
      { label: 'Poem', href: '/web-magazine?category=Poem' },
      { label: 'Memoir', href: '/web-magazine?category=Memoir' },
      { label: 'Interviews', href: '/web-magazine?category=Interviews' },
      { label: 'Cinema', href: '/web-magazine?category=Cinema' },
    ],
  },
  { label: 'Droplet.co', href: '/droplet', badge: 'Curated' },
];

export const FOOTER_NAVIGATION = {
  explore: [
    { label: 'About Mazhathulli', href: '/about' },
    { label: 'Publications & Books', href: '/books' },
    { label: 'Academy & Courses', href: '/courses' },
    { label: 'Mazhathulli Awards', href: '/awards' },
    { label: 'Web Magazine', href: '/web-magazine' },
  ],
  droplet: [
    { label: 'Curated Books', href: '/droplet?category=Books' },
    { label: 'Artistic Frames', href: '/droplet?category=Frames' },
    { label: 'Thoughtful Gifts', href: '/droplet?category=Gifts' },
    { label: 'About Droplet.co', href: '/droplet' },
  ],
  connect: [
    { label: 'WhatsApp Enquiry', href: '/contact' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Publishing Queries', href: '/contact?type=publishing' },
  ],
};
