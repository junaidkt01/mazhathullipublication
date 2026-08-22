export interface Book {
  id: string;
  slug: string;
  title: string;
  author: string;
  category: 'Fiction' | 'Poetry' | 'Novel' | 'Children\'s' | 'Essays' | 'Others';
  cover: string;
  price?: number;
  originalPrice?: number;
  paperbackPrice?: number;
  ebookPrice?: number;
  ebookUrl?: string;
  language?: string;
  pages?: number;
  description?: string;
  summary?: string;
  isbn?: string;
  publishedDate?: string;
  isFeatured?: boolean;
  isBestseller?: boolean;
}

export interface CourseInstructor {
  name: string;
  role: string;
  avatar: string;
  bio?: string;
}

export interface CourseModule {
  title: string;
  topics: string[];
}

export interface CourseFAQ {
  question: string;
  answer: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration: string;
  mode: 'Online' | 'Offline' | 'Hybrid';
  language: string;
  instructor: CourseInstructor;
  price?: number;
  schedule?: string;
  curriculum: CourseModule[];
  faqs: CourseFAQ[];
  isFeatured?: boolean;
  highlights?: string[];
}

export interface AwardYear {
  year: string;
  theme: string;
  ceremonyDate: string;
  venue: string;
  description: string;
  coverImage: string;
}

export interface AwardWinner {
  id: string;
  year: string;
  category: string;
  winnerName: string;
  workTitle: string;
  photo: string;
  summary: string;
  citation: string;
}

export interface AwardGalleryItem {
  id: string;
  year: string;
  category: 'Winners' | 'Ceremony' | 'Guests' | 'Stage' | 'Behind the Scenes';
  caption: string;
  imageUrl: string;
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Book review' | 'Stories' | 'Poem' | 'Memoir' | 'Interviews' | 'Cinema' | 'Writing' | 'Books' | 'Authors' | 'Courses' | 'News' | 'Literary Stories';
  coverImage: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  isFeatured?: boolean;
}

export interface DropletProduct {
  id: string;
  slug: string;
  title: string;
  category: 'Books' | 'Frames' | 'Gifts';
  price?: number;
  image: string;
  gallery?: string[];
  shortInfo: string;
  description: string;
  isFeatured?: boolean;
  specs?: { label: string; value: string }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar?: string;
  type: 'Reader' | 'Student' | 'Writer' | 'Author' | 'Course Participant';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}
