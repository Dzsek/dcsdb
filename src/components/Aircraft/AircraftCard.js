import React from 'react';
import './AircraftCard.scss';
import {Link} from 'react-router-dom';

class AircraftCard extends React.Component{

    cardClicked()
    {
        const {plane, weaponid, clickCallback} = this.props;
        const newurl = "/aircraft/"+plane.id + (weaponid ? "?from="+weaponid: "");

        if(clickCallback)
        {
            clickCallback(plane.id);
        }

        window.location.hash = newurl;
    }

    render(){
        const {plane, weaponid} = this.props;

        return(
            <Link onClick={(e)=>this.cardClicked()} to={"/aircraft/" + plane.id + (weaponid ? "?from="+weaponid: "")}>
                <div className={"AircraftCard-root" + (plane.id===plane.name ? " AircraftCard-root-wip" : "")}>
                    <img alt={plane.name} src={process.env.PUBLIC_URL+"/data/aircrafts/"+plane.id+"/thumbnail.jpg"}></img>
                    <span>{plane.name}</span>
                </div>
            </Link>
        );
    }
}

export default AircraftCard;