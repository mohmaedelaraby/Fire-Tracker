import GoogleMapReact from 'google-map-react'
import './Map.css'

const Map = ({center,zoom}) => {
  return (
    <div className='map'>
        <GoogleMapReact
          bootstrapURLKeys={{key:'AIzaSyCyAuL_55n1xC1vu6AkFJUILR5wZYUfLbk'}}
          defaultCenter={center}
          defaultZoom={zoom}
        >

        </GoogleMapReact>
        
        
    </div>
  )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map