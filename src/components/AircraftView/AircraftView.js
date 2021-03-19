import React from 'react';
import {withRouter} from 'react-router-dom';
import './AircraftView.scss';
import BackButton from '../Common/BackButton.js';

class AircraftView extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            aircraft:{},
            id: ""
        }
    }

    componentDidMount()
    {
        let {params} = this.props.match;
        this.setState({id:params.id});

        fetch(process.env.PUBLIC_URL+"/data/aircrafts/"+params.id+"/data.json")
        .then(res=>res.json())
        .then(
            (result)=>{
                this.setState({
                    aircraft: result
                })
            }
        )
    }

    render()
    {
        const {aircraft, id} = this.state;
        return (
            <div className="AircraftView-root">
                <img alt={aircraft.name} src={process.env.PUBLIC_URL+"/data/aircrafts/"+id+"/thumbnail.jpg"}></img>
                <span>{aircraft.name}</span>
                <div className="AircraftView-root-content">
                    <div className="AircraftView-root-content-header">
                        <span>Armament</span>
                        <BackButton className="AircraftView-root-backbutton" returnTo="/aircraft"/>
                    </div>
                    <div className="AircraftView-root-content-weapons">
                        {(()=>{
                        if(aircraft.weapons)
                        {
                            return aircraft.weapons.map(weapon=>(
                                <span key={weapon.id}>{weapon.name}</span>
                                ));
                            }
                            else
                            {
                                return (<span></span>);
                            }
                        })()}
                    </div>
                </div>
                <div className="AircraftView-root-extra">
                    <p>{aircraft.description}</p>
                </div>
            </div>
        );
    }
}

export default withRouter(AircraftView);