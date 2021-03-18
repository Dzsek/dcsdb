import React from 'react';
import './AircraftCard.css';
import {Link} from 'react-router-dom'

class AircraftCard extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render(){
        const plane = this.props.plane

        return(
            <Link to={"/dcsdb/aircraft/" + plane.id}>
                <div className="AircraftCard-root">
                    <img alt={plane.name} src={process.env.PUBLIC_URL+"/data/aircrafts/"+plane.id+"/thumbnail.jpg"}></img>
                    <span>{plane.name}</span>
                </div>
            </Link>
        );
    }
}

export default AircraftCard;