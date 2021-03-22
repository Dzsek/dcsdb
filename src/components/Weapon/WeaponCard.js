import React from 'react';
import './WeaponCard.scss';


class WeaponCard extends React.Component
{
    render()
    {
        let {weapon} = this.props;
        return (
            <div className="WeaponCard-root">
                <img alt={weapon.name} src={process.env.PUBLIC_URL+"/data/weapons/"+weapon.id+"/thumbnail.jpg"}></img>
                <span>{weapon.name}</span>
            </div>
        )
    }
}

export default WeaponCard;