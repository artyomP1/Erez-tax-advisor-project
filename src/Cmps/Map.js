import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../Cmps/Marker';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 32.091124,
            lng: 34.815844
        },
        zoom: 15
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div className="map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDjhCMNpQUrXmYWvSQ28HKTveqFiKW5Tdc' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {/* <AnyReactComponent
                        lat={32.091124}
                        lng={34.815844}
                        text="My Marker"
                    /> */}
                    <Marker
                        lat={32.091124}
                        lng={34.815844}
                        name="My Marker"
                        color="#e75113"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;