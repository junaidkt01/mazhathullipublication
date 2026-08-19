import { AwardYear, AwardWinner, AwardGalleryItem } from '@/types';

export const AWARD_YEARS: AwardYear[] = [
  {
    year: '2026',
    theme: 'Voices of Tomorrow: Celebrating Fresh Expressions in Malayalam Literature',
    ceremonyDate: 'February 14, 2026',
    venue: 'Tagore Hall, Kozhikode, Kerala',
    coverImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    description: 'The 4th annual Mazhathulli Awards celebrated pioneering new voices across fiction, poetry, translation, and lifetime contributions to Malayalam letters.',
  },
  {
    year: '2025',
    theme: 'Rain & Resonance: Honoring Stories of Resilience and Ecological Grace',
    ceremonyDate: 'January 28, 2025',
    venue: 'Fine Arts Hall, Ernakulam, Kochi',
    coverImage: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    description: 'A landmark gathering of literary legends, young writers, and cultural patrons honoring books published in 2024.',
  },
  {
    year: '2024',
    theme: 'Words Beyond Boundaries: Transcending Vernacular Horizons',
    ceremonyDate: 'February 10, 2024',
    venue: 'Kerala Sahitya Akademi, Thrissur',
    coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    description: 'Recognizing brilliance in translation, debut novels, and community literary initiatives across Kerala.',
  },
  {
    year: '2023',
    theme: 'Inaugural Mazhathulli Literary Honors',
    ceremonyDate: 'March 05, 2023',
    venue: 'Vylopilli Samskrithi Bhavan, Thiruvananthapuram',
    coverImage: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
    description: 'The inaugural edition establishing Mazhathulli Awards as a premier independent literary institution.',
  },
];

export const AWARD_WINNERS: AwardWinner[] = [
  // 2026
  {
    id: 'w2026-1',
    year: '2026',
    category: 'Best Novel of the Year',
    winnerName: 'Anoop Keshavan',
    workTitle: 'മഴവില്ലിന്റെ നിറങ്ങൾ (Colors of the Rainbow)',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    summary: 'Awarded for exceptional narrative depth, linguistic elegance, and profound human empathy.',
    citation: 'For creating a masterpiece of Malayalam fiction that captures the spirit of rural transformation with unmatched poetic tenderness.',
  },
  {
    id: 'w2026-2',
    year: '2026',
    category: 'Poetry Collection Award',
    winnerName: 'Meera Nambiar',
    workTitle: 'Rain Over Malabar & Other Solitudes',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    summary: 'Recognized for evocative imagery and modern lyrical innovation.',
    citation: 'Her verses articulate monsoon nostalgia and contemporary isolation with striking emotional precision.',
  },
  {
    id: 'w2026-3',
    year: '2026',
    category: 'Children\'s Literature Honor',
    winnerName: 'Dr. Radhika Menon',
    workTitle: 'കടലാസ്സ് തോണികൾ (Paper Boats)',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    summary: 'Honored for instilling environmental wonder in young minds.',
    citation: 'Paper Boats redefines children\'s storytelling in Malayalam through gentle humor, natural curiosity, and vivid artistry.',
  },

  // 2025
  {
    id: 'w2025-1',
    year: '2025',
    category: 'Best Novel of the Year',
    winnerName: 'Siddharth Varma',
    workTitle: 'Whispers of the Monsoon',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    summary: 'Celebrated for atmospheric storytelling and mystery craft.',
    citation: 'A gripping exploration of memory, heritage, and secrets housed in the rain-soaked architecture of Kerala.',
  },
  {
    id: 'w2025-2',
    year: '2025',
    category: 'Emerging Writer Spotlight',
    winnerName: 'Devika Nair',
    workTitle: 'The Silent Archipelago',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    summary: 'Honored for remarkable debut storytelling in coastal fiction.',
    citation: 'Devika Nair displays a mature command of prose and ecological empathy far beyond her years.',
  },

  // 2024
  {
    id: 'w2024-1',
    year: '2024',
    category: 'Lifetime Literary Excellence',
    winnerName: 'V. P. Ramachandran',
    workTitle: 'Four Decades of Malayalam Literary Criticism',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    summary: 'Awarded for lifetime contributions to Malayalam essay and editorial culture.',
    citation: 'In recognition of a relentless commitment to nurturing critical discourse and literary standards across Kerala.',
  },

  // 2023
  {
    id: 'w2023-1',
    year: '2023',
    category: 'Inaugural Poetry Award',
    winnerName: 'Kavitha Balakrishnan',
    workTitle: 'നിറങ്ങളുടെ ഓർമ്മകൾ (Memories of Colors)',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    summary: 'Celebrated for pioneering visual-poetic synthesis.',
    citation: 'For establishing a bold new visual vocabulary within modern Malayalam poetic form.',
  },
];

export const AWARD_GALLERY: AwardGalleryItem[] = [
  {
    id: 'g1',
    year: '2026',
    category: 'Winners',
    caption: 'Anoop Keshavan accepting the Best Novel Award at Kozhikode 2026',
    imageUrl: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g2',
    year: '2026',
    category: 'Stage',
    caption: 'Inaugural lamp lighting by distinguished chief guests and literary scholars',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g3',
    year: '2026',
    category: 'Ceremony',
    caption: 'Distinguished audience of authors, students, and readers gathered at Tagore Hall',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g4',
    year: '2026',
    category: 'Guests',
    caption: 'Panel discussion on "Independent Publishing in the Modern Era"',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g5',
    year: '2026',
    category: 'Behind the Scenes',
    caption: 'Mazhathulli editorial board finalizing the 2026 citation plaques',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g6',
    year: '2025',
    category: 'Winners',
    caption: 'Siddharth Varma with the 2025 Fiction Trophy in Kochi',
    imageUrl: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g7',
    year: '2025',
    category: 'Ceremony',
    caption: 'Classical musical performance opening the 2025 awards evening',
    imageUrl: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g8',
    year: '2024',
    category: 'Winners',
    caption: 'V. P. Ramachandran receiving the Lifetime Literary Excellence award at Thrissur',
    imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
  },
];
