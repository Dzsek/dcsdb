import React from 'react';
import './AircraftCard.css';

class AircraftCard extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render(){
        const plane = this.props.plane

        return(
            <div className="AircraftCard-root">
                <p>{plane.name}</p>
                <img alt={plane.name} src={process.env.PUBLIC_URL+"/data/aircrafts/"+plane.id+"/thumbnail.jpg"}></img>
            </div>
        );
    }
}

export default AircraftCard;