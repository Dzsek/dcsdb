import React from 'react';
import './AirplaneCard.css';

class AirplaneCard extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render(){
        const plane = this.props.plane

        return(
            <div className="AirplaneCard-root">
                <p>{plane.name}</p>
                <img src={process.env.PUBLIC_URL+"/data/airplanes/"+plane.data+"/"+plane.image}></img>
            </div>
        );
    }
}

export default AirplaneCard;