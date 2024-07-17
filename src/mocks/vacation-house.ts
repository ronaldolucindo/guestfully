import houseImage from '@/assets/vacation-house.jpg'
import bedroom from '@/assets/bedroom.jpg'
import livingroom from '@/assets/living-room.jpg'
import kitchen from '@/assets/kitchen.jpg'

const VACATION_HOUSE_MOCK = {
  name: 'Mar Azul House',
  subtitle: 'Beach house with an amazing view to the ocean',
  address: '1010 Main Street, Salvador - Bahia - Brazil',
  guests: 6,
  bedrooms: 3,
  bathrooms: 3,
  price: 989.99,
  amenities: [
    'toaster',
    'toiletries',
    'internet',
    'towels',
    'tv',
    'surveillance',
    'washer/dryer',
    'blender',
    'conditioner',
    'desk',
    'fridge',
    'wardrobe',
  ],
  description:
    'Welcome to Mar Azul House, your private oasis by the turquoise waters of Salvador’s coastline. Nestled amidst swaying palm trees and overlooking the pristine Barra Beach, this beachfront retreat offers an idyllic escape for travelers seeking tranquility and sun-kissed days.',
  images: [
    {
      original: houseImage,
      thumbnail: houseImage,
    },
    {
      original: bedroom,
      thumbnail: bedroom,
    },
    {
      original: livingroom,
      thumbnail: livingroom,
    },
    {
      original: kitchen,
      thumbnail: kitchen,
    },
  ],
}
export default VACATION_HOUSE_MOCK
