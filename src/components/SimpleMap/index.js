import React, {Component} from "react";
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;


  
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -23.6175278,
      lng: -46.6427198
    },
    zoom: 18
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%', marginTop: "-50px", zIndex: "-2"}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyD7nQmBvMqRsXw1TSUjjR4XJX7vKq7O-Ao" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={-23.6175278}
            lng={-46.6427198}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;