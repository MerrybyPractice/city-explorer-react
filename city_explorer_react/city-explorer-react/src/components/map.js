//from https://tomchentw.github.io/react-google-maps/#introduction

import React from 'react';
import {withGoogleMap, GoogleMap, Marker, withScriptjs } from "react-google-maps";

const ThisMap = withScriptjs( withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{lat: 40.1106, lng: 88.2073 }}
    >
      {props.isMarkerShown && <Marker position={{lat: 40.1106, lng: 88.2073 }}/>}
    </GoogleMap>

))

export default props => ( <ThisMap 
isMarkerShown 
googleMapURL="https://maps.googleapis.com/maps/api/js?key=GOOGLE_API_KEYv=3.explibraries=geometry,drawing,places"
loadingElement={<div style={{ height: `100%` }} />}
containerElement={<div style={{ height: `400px`}}/>} 
mapElement={<div style={{height: `100%`}}/>}

/> )


// class Map extends Component{
//   constructor(props){
//     super(props); 
//     this.state = {
//       isMarkerShown: true
      
//     }
//   }

  
//   render(){
//     return(

//       <Fragment>
//         <Map/>
//       </Fragment>
//     )
//   }

// }

