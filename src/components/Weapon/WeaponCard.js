import React from 'react';
import './WeaponCard.scss';
import {Link} from 'react-router-dom';


class WeaponCard extends React.Component
{
    render()
    {
        const {weapon, aircraftid} = this.props;
        return (
            <Link to={"/weapon/" + weapon.id + (aircraftid ? "?from="+aircraftid : "")}>
                <div className={"WeaponCard-root" + (weapon.id===weapon.name ? " WeaponCard-root-wip" : "")}>
                    <img alt={weapon.name} src={process.env.PUBLIC_URL+"/data/weapons/"+weapon.id+"/thumbnail.jpg"}></img>
                    <span>{weapon.name}</span>
                </div>
            </Link>
        )
    }
}

export default WeaponCard;