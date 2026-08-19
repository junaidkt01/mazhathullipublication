import { Course } from '@/types';

export const COURSES_DATA: Course[] = [
  {
    id: 'c1',
    slug: 'rachana-creative-writing',
    title: 'രചന (Rachana) — Creative Writing in Malayalam',
    description: 'Master the craft of Malayalam fiction and creative prose through guided writing exercises, structural analysis, and mentor feedback.',
    category: 'Creative Writing',
    level: 'All Levels',
    duration: '8 Weeks (16 Sessions)',
    mode: 'Hybrid',
    language: 'Malayalam & English',
    price: 4999,
    schedule: 'Saturdays & Sundays, 6:00 PM – 7:30 PM IST',
    isFeatured: true,
    highlights: [
      'Live interactive writing workshops with renowned Malayalam authors',
      'One-on-one editorial critique on your final story draft',
      'Opportunity for publication in Mazhathulli Journal',
      'Certificate of Completion & Alumni Community Access',
    ],
    instructor: {
      name: 'Anoop Keshavan',
      role: 'Award-winning Novelist & Editor',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      bio: 'Author of three acclaimed novels and recipient of the Mazhathulli Fiction Spotlight 2025. Anoop has mentored over 400 aspiring writers across South India.',
    },
    curriculum: [
      {
        title: 'Module 1: Finding Your Voice & Character Development',
        topics: ['Building memorable characters', 'Voice and point of view', 'Setting as a living entity', 'Observational exercises'],
      },
      {
        title: 'Module 2: Plot Structure, Pacing & Dialogue',
        topics: ['Narrative arcs and three-act structures', 'Authentic Malayalam dialogue', 'Pacing tension and subtext', 'Editing redundant prose'],
      },
      {
        title: 'Module 3: Genre Explorations & Short Story Craft',
        topics: ['Magical realism vs realism', 'Micro-fiction techniques', 'Sensory description', 'Peer critique workshop'],
      },
      {
        title: 'Module 4: Polishing & Publishing Your Manuscript',
        topics: ['Self-editing checklist', 'Preparing submission packages', 'Understanding independent publishing', 'Final graduation showcase'],
      },
    ],
    faqs: [
      {
        question: 'Do I need prior publishing experience to join?',
        answer: 'Not at all. Rachana is designed for anyone passionate about writing — whether you are writing your first story or refining an existing manuscript.',
      },
      {
        question: 'Will sessions be recorded?',
        answer: 'Yes, recorded sessions will be available for review on the student portal for up to 6 months after course completion.',
      },
      {
        question: 'How do I submit assignments?',
        answer: 'Assignments are submitted weekly through our dedicated student portal, and personalized written feedback is shared by mentors within 48 hours.',
      },
    ],
  },
  {
    id: 'c2',
    slug: 'ezhuthu-fiction-workshop',
    title: 'എഴുത്ത് (Ezhuthu) — Fiction & Narrative Storytelling',
    description: 'An intensive lab on narrative structure, world-building, and character psyches for novel and novella writers.',
    category: 'Fiction Workshop',
    level: 'Intermediate',
    duration: '6 Weeks (12 Sessions)',
    mode: 'Online',
    language: 'English & Malayalam',
    price: 3999,
    schedule: 'Tuesdays & Thursdays, 7:00 PM – 8:30 PM IST',
    isFeatured: true,
    highlights: [
      'Focus on long-form novel plotting and chapter outlining',
      'In-depth breakdown of classical and contemporary world literature',
      'Direct pitch review session with Mazhathulli editorial board',
    ],
    instructor: {
      name: 'Meera Nambiar',
      role: 'Poet & Editorial Strategist',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      bio: 'Author of "Rain Over Malabar" and senior publishing advisor at Mazhathulli Press.',
    },
    curriculum: [
      {
        title: 'Module 1: World-Building & Atmospheric Lore',
        topics: ['Designing narrative settings', 'Cultural nuances in prose', 'Emotional geometry of space'],
      },
      {
        title: 'Module 2: Unlocking Plot Conflicts',
        topics: ['Internal vs external stakes', 'Subplots and thematic resonance', 'Ending with emotional impact'],
      },
      {
        title: 'Module 3: The Authorial Edit',
        topics: ['Pruning adverbs', 'Strengthening verbs', 'Constructive critique workshops'],
      },
    ],
    faqs: [
      {
        question: 'Is this course suitable for English writers?',
        answer: 'Yes! Ezhuthu welcomes writers writing in both English and Malayalam.',
      },
    ],
  },
  {
    id: 'c3',
    slug: 'content-writing-masterclass',
    title: 'Content Writing & Brand Storytelling',
    description: 'Bridge literary creativity with modern digital publishing, long-form essay writing, editorial newsletters, and copywriting.',
    category: 'Professional Writing',
    level: 'Beginner',
    duration: '4 Weeks (8 Sessions)',
    mode: 'Online',
    language: 'English',
    price: 2999,
    schedule: 'Saturdays, 10:00 AM – 1:00 PM IST',
    isFeatured: false,
    highlights: [
      'Editorial copywriting frameworks used by leading magazines',
      'SEO storytelling without compromising prose quality',
      'Portfolio development with 3 real published portfolio pieces',
    ],
    instructor: {
      name: 'Siddharth Varma',
      role: 'Author & Digital Content Specialist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      bio: 'Journalist and novelist with over 12 years of experience writing for top publications.',
    },
    curriculum: [
      {
        title: 'Module 1: Foundations of Editorial Voice',
        topics: ['Hooking readers in 3 seconds', 'Tone of voice guides', 'Structuring long-form essays'],
      },
      {
        title: 'Module 2: Digital Publishing & Story Curation',
        topics: ['Newsletter writing', 'Headline craft', 'SEO integration for writers'],
      },
    ],
    faqs: [
      {
        question: 'Do I get career guidance after completion?',
        answer: 'Yes, we provide resume/portfolio reviews and connect top graduates with freelance editorial assignments.',
      },
    ],
  },
  {
    id: 'c4',
    slug: 'poetry-and-expressive-prose',
    title: 'Kavitha — Poetry & Expressive Verse',
    description: 'Explore meter, free verse, imagery, and emotional authenticity in poetry with published poets.',
    category: 'Poetry Workshop',
    level: 'All Levels',
    duration: '4 Weeks (8 Sessions)',
    mode: 'Online',
    language: 'Malayalam & English',
    price: 2499,
    schedule: 'Sundays, 4:00 PM – 6:00 PM IST',
    isFeatured: false,
    highlights: [
      'Poetry recitation and performance technique',
      'Exploring traditional Malayalam meters alongside modern free verse',
      'Co-authoring a student anthology',
    ],
    instructor: {
      name: 'Kavitha Balakrishnan',
      role: 'Poet & Visual Artist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      bio: 'Award-winning poet whose work fuses visual arts with contemporary Malayalam verse.',
    },
    curriculum: [
      {
        title: 'Module 1: Metaphor & Sensory Imagery',
        topics: ['Translating emotion into image', 'Rhythm beyond rhyme', 'The power of silence in verse'],
      },
      {
        title: 'Module 2: Editing Poetry & Performance',
        topics: ['Line breaks and breath', 'Voice modulation', 'Anthology preparation'],
      },
    ],
    faqs: [
      {
        question: 'Will our poems be published?',
        answer: 'Selected poems from participants will be featured in the annual Mazhathulli Poetry Anthology.',
      },
    ],
  },
];
