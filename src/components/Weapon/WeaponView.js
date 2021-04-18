import React from 'react';
import {withRouter} from 'react-router-dom';
import BackButton from '../Common/BackButton';
import './WeaponView.scss';
import AircraftCard from '../Aircraft/AircraftCard';
import DataAccess from '../../dataaccess/DataAccess';
import {hideunfinished, RegisterPage} from '../../helper/Helper';

class WeaponView extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state={
            weapon:{},
            id: "",
            selectedInstructionAircraft: {}
        }

        this.selectedAircraftChanged = this.selectedAircraftChanged.bind(this);
        this.loadAlternate = this.loadAlternate.bind(this);
    }

    componentDidMount()
    {
        const query = new URLSearchParams(this.props.location.search);
        const fromId = query.get('from');
        const {params} = this.props.match;
        this.setState({id:params.id});
        const da = new DataAccess();
        da.getWeapon(params.id)
        .then(
            (result)=>{
                document.title = "DCSDB - "+result.name;
                RegisterPage();
                this.setState({
                    weapon: result
                })
                
                if(result.aircraft)
                {
                    let plane = result.aircraft.find(x=>x.id===fromId);
                    if(!plane && result.aircraft.length)
                    {
                        plane = result.aircraft[0];
                    }

                    if(plane)
                    {
                        this.setState({
                            selectedInstructionAircraft: plane
                        });
                    }
                }
            }
        )
    }

    selectedAircraftChanged(ev)
    {
        const selected = ev.target.value;
        const plane = this.state.weapon.aircraft.find(x=>x.id===selected); 
        if(plane)
        {
            this.setState({
                selectedInstructionAircraft: plane
            });
        }
        
    }

    loadAlternate(ev)
    {
        if(ev.target.src.includes('image.jpg'))
        {
            ev.target.src = ev.target.src.replace('image.jpg','thumbnail.jpg');
        }
    }

    render()
    {
        const query = new URLSearchParams(this.props.location.search);
        const fromId = query.get('from');

        const {weapon, id, selectedInstructionAircraft} = this.state;
        return (
            <div className="WeaponView-root">
                <BackButton className="WeaponView-root-backbutton" returnTo={fromId ? "/aircraft/"+fromId : "/weapons"}/>
                <img alt={weapon.name} src={process.env.PUBLIC_URL+"/data/weapons/"+id+"/image.jpg"} onError={this.loadAlternate}></img>
                <span>{weapon.name}</span>
               
                <div className="WeaponView-root-content">
                    <div>
                        {(()=>{

                            if(weapon.data)
                            {
                                return (
                                    <div className="WeaponView-table">
                                        {
                                            weapon.data ? Object.keys(weapon.data).map(key=> (<DataRow key={key} name={key} data={weapon.data[key]}/>)) : ""
                                        }
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
                        weapon.aircraft && weapon.aircraft.length ?
                        (<div style={{display:"none"}}>
                            <div className="WeaponView-aircraftinstructions">
                                <span>Notes</span>
                                <select value={selectedInstructionAircraft.id} onChange={this.selectedAircraftChanged}>
                                    {
                                        weapon.aircraft
                                        .map(plane=>(
                                            <option key={plane.id} value={plane.id}>{plane.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            {
                                selectedInstructionAircraft.instructions ? selectedInstructionAircraft.instructions.map(instr=>(<span className="WeaponView-instruction">{instr}</span>)) : "No instructions"
                            }
                        </div>) : ""
                    }
                    <div className="WeaponView-root-description">
                        <p>{weapon.description}</p>
                    </div>
                </div>
                <div className="WeaponView-root-extra">
                    <span>Compatible platforms</span>
                    <div>
                        {
                            weapon.aircraft ? weapon.aircraft.filter(f=> hideunfinished ? f.id!==f.name : true).map(plane=><AircraftCard key={plane.id}  plane={plane} weaponid={id}/>) : "Data unavailable"
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
                <span key={props.name} style={{fontWeight:"bold"}}>{props.name}</span>,
                <span key={props.data}>{props.data}</span>
        ]);
    }
    else
    {
        return "";
    }
}

export default withRouter(WeaponView);