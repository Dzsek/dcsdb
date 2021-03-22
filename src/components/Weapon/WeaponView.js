import React from 'react';
import {withRouter} from 'react-router-dom';
import BackButton from '../Common/BackButton';
import './WeaponView.scss';
import AircraftCard from '../Aircraft/AircraftCard';

class WeaponView extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            weapon:{},
            id: ""
        }
    }

    componentDidMount()
    {
        let {params} = this.props.match;
        this.setState({id:params.id});

        fetch(process.env.PUBLIC_URL+"/data/weapons/"+params.id+"/data.json")
        .then(res=>res.json())
        .then(
            (result)=>{
                this.setState({
                    weapon: result
                })
            }
        )
    }

    render()
    {
        const query = new URLSearchParams(this.props.location.search);
        const fromId = query.get('from');

        const {weapon, id} = this.state;
        return (
            <div className="WeaponView-root">
                <BackButton className="WeaponView-root-backbutton" returnTo={fromId ? "/aircraft/"+fromId : "/weapons"}/>
                <img alt={weapon.name} src={process.env.PUBLIC_URL+"/data/weapons/"+id+"/thumbnail.jpg"}></img>
                <span>{weapon.name}</span>
               
                <div className="WeaponView-root-content">
                    <div>
                        {(()=>{

                            if(weapon.data)
                            {
                                return (
                                    <div className="WeaponView-table">
                                        <DataRow name="Type" data={weapon.data.type}/>
                                        <DataRow name="Guidance" data={weapon.data.guidance}/>
                                        <DataRow name="Max Range" data={weapon.data.range.max}/>
                                        <DataRow name="Min Range" data={weapon.data.range.min}/>
                                        <DataRow name="Optimal Range" data={weapon.data.range.ideal}/>
                                        <DataRow name="Warhead" data={weapon.data.warhead}/>
                                        <DataRow name="Weight" data={weapon.data.weight}/>
                                        <DataRow name="Use against" data={weapon.data.targets}/>
                                    </div>
                                );
                            }
                            else
                            {
                                return "Weapon data not available";
                            }

                        })()}
                    </div>
                    {
                        weapon.instructions && weapon.instructions.length?
                        (<div>
                            <div>
                                <span style={{fontSize:"1.5em"}}>Instructions</span>

                            </div>
                            {
                                weapon.instructions ? weapon.instructions.map(instr=>(<span className="WeaponView-instruction">{instr}</span>)) : ""
                            }
                        </div>) : ""
                    }
                    <div>
                        <p>{weapon.description}</p>
                    </div>
                </div>
                <div className="WeaponView-root-extra">
                    <span>Compatible platforms</span>
                    <div>
                        {
                            weapon.aircraft ? weapon.aircraft.map(plane=><AircraftCard key={plane.id}  plane={plane} weaponid={id} />) : "Data unavailable"
                        }
                    </div>
                </div>
            </div>
        );
    }
}

function DataRow(props){
    if(props.data)
    {
        return([
                <span style={{fontWeight:"bold"}}>{props.name}</span>,
                <span>{props.data}</span>
        ]);
    }
    else
    {
        return "";
    }
}

export default withRouter(WeaponView);