export const MAZHATHULLI_WHATSAPP_NUMBER = '919961260138';

export type WhatsAppActionType = 'book' | 'course' | 'droplet' | 'general' | 'award' | 'publishing';

export interface GetWhatsAppUrlOptions {
  productName?: string;
  type?: WhatsAppActionType;
  customMessage?: string;
  phone?: string;
}

export function generateWhatsAppMessage({
  productName = '',
  type = 'general',
  customMessage,
}: GetWhatsAppUrlOptions): string {
  if (customMessage) {
    return customMessage;
  }

  switch (type) {
    case 'book':
      return `Hello Mazhathulli,\n\nI am interested in the book "${productName}".\n\nPlease share more details regarding price, availability, and ordering.`;
    case 'course':
      return `Hello Mazhathulli,\n\nI would like to enquire about joining the course "${productName}".\n\nPlease share the upcoming batch schedule, fee structure, and registration process.`;
    case 'droplet':
      return `Hello Mazhathulli,\n\nI am interested in the product "${productName}" from Droplet.co.\n\nPlease share availability and details.`;
    case 'award':
      return `Hello Mazhathulli,\n\nI would like to enquire about the Mazhathulli Awards ${productName ? `(${productName})` : ''}.\n\nPlease share more information.`;
    case 'publishing':
      return `Hello Mazhathulli,\n\nI am an author looking to discuss manuscript submission and publishing with Mazhathulli.\n\nPlease guide me on the next steps.`;
    case 'general':
    default:
      return `Hello Mazhathulli,\n\nI have a general enquiry. Please get in touch with me.`;
  }
}

export function getWhatsAppUrl(options: GetWhatsAppUrlOptions = {}): string {
  const phone = options.phone || MAZHATHULLI_WHATSAPP_NUMBER;
  const message = generateWhatsAppMessage(options);
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
