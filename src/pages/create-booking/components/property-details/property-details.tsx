import ImageGallery from 'react-image-gallery'
import Typography from '@/components/typography/typography'
import VACATION_HOUSE_MOCK from '@/mocks/vacation-house'
import GuestInfo from '../guest-info/guest-info'
import Amenities from '../amenities/amenities'

type PropertyDetailsProps = {
  property: typeof VACATION_HOUSE_MOCK
}

const PropertyDetails = ({
  property,
}: PropertyDetailsProps): React.JSX.Element => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="">
        <Typography variant="h3" className="text-2xl font-bold text-gray-600">
          {property.name}
        </Typography>
        <Typography className="text-sm">{property.address}</Typography>
        <Typography className="text-lg text-gray-600">
          {property.subtitle}
        </Typography>
      </div>
      <ImageGallery
        thumbnailPosition="left"
        showNav={false}
        items={property.images}
        showPlayButton={false}
      />
      <GuestInfo
        guests={property.guests}
        bathrooms={property.bathrooms}
        bedrooms={property.bedrooms}
      />
      <Typography className="text-justify">{property.description}</Typography>
      <Amenities amenities={property.amenities} />
    </div>
  )
}

export default PropertyDetails
