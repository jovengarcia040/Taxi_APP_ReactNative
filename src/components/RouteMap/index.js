import { View, Text, Image } from 'react-native'
import React from 'react'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const index = ({ origin, destination }) => {

    const originLoc = {
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng
    }

    const destinationLoc = {
        latitude: destination.details.geometry.location.lat,
        longitude: destination.details.geometry.location.lng
    }

    const api_key = 'AIzaSyCZ0tmsb2tHm9basM-gjHeMgGFiQRZKev0';

  return (
    <MapView
        style={{ width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
        latitude: 51.1451,
        longitude: 0.8740,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
        <MapViewDirections 
            origin={originLoc}
            destination={destinationLoc}
            apikey={api_key}
            strokeWidth={3}
        />
        <Marker 
            coordinate={originLoc}
            title={'Origin'}
        />
        <Marker 
            coordinate={destinationLoc}
            title={'Destination'}
        />
    </MapView>
  )
}

export default index