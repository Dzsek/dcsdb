import React from 'react';
import {withRouter} from 'react-router-dom';
import './AircraftView.scss';
import BackButton from '../Common/BackButton';
import WeaponCard from '../Weapon/WeaponCard';
import SearchBar from '../Common/SearchBar';
import {OptimizeWeaponTags, FilterByTags, WeaponSearchTerms, RegisterPage} from "../../helper/Helper";
import DataAccess from '../../dataaccess/DataAccess';

class AircraftView extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            aircraft:{},
            id: "",
            searchText: "",
            searchterms: WeaponSearchTerms
        }

        this.loadAlternate = this.loadAlternate.bind(this);
        this.handleSearchTextChanged = this.handleSearchTextChanged.bind(this);
    }

    componentDidMount()
    {
        const da = new DataAccess();
        let {params} = this.props.match;
        this.setState({id:params.id});

        da.getAircraft(params.id)
        .then(
            (aircraftdata)=>{
                document.title = "DCSDB - "+aircraftdata.name;
                RegisterPage();

                da.getWeaponList().then((weaponlist)=>{
                    aircraftdata.weapongroups = { "aam":[],"agm":[],"bomb":[],"fuel":[],"pod":[],"rocket":[] };
                    for(let w of aircraftdata.weapons)
                    {
                        w.tags = weaponlist.find(x=>x.id===w.id).tags;
                        OptimizeWeaponTags(w);

                        if(!aircraftdata.weapongroups[w.category])
                        {
                            aircraftdata.weapongroups[w.category] = [];
                        }
    
                        aircraftdata.weapongroups[w.category].push(w);
                    }
    
                    this.setState({
                        aircraft: aircraftdata
                    })
                });
            }
        )
    }

    handleSearchTextChanged(e)
    {
        this.setState({searchText: e});
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

        const {aircraft, id, searchText} = this.state;
        return (
            <div className="AircraftView-root">
                <BackButton className="AircraftView-root-backbutton" returnTo={fromId ? "/weapon/"+fromId : "/aircraft"}/>
                <img alt={aircraft.name} src={process.env.PUBLIC_URL+"/data/aircrafts/"+id+"/image.jpg"} onError={this.loadAlternate}></img>
                <span>{aircraft.name}</span>
                <div className="AircraftView-root-content">
                        <SearchBar searchText={searchText} onSearchTextChanged={this.handleSearchTextChanged} chips={this.state.searchterms}/>
                        {(()=>{
                            if(aircraft.weapongroups)
                            {
                                let results = [];
                                for(let groupid in aircraft.weapongroups)
                                {
                                    let group = aircraft.weapongroups[groupid];
                                    group = group.filter(f=> FilterByTags(searchText, f));
                                    if(group && group.length)
                                    {
                                        results.push(<WeaponGroup key={groupid} id={groupid} group={group} aircraftid={id}/>);
                                    }
                                }

                                return results.length ? results : (<span>No equipment found</span>);
                            }
                            else
                            {
                                return (<span/>);
                            }
                        })()}
                </div>
                <div className="AircraftView-root-extra">
                    <p dangerouslySetInnerHTML={{ __html: aircraft.description }}></p>
                </div>
            </div>
        );
    }
}

class WeaponGroup extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isOpen: true
        }

        this.toggleGroup = this.toggleGroup.bind(this);
    }

    toggleGroup()
    {
        let {isOpen} = this.state;
        this.setState({isOpen: !isOpen});
    }

    render()
    {
        let {id, group, aircraftid} = this.props;
        let {isOpen} = this.state;
        return (
            <div className="WeaponGroup-root">
                <div className="WeaponGroup-root-header" onClick={this.toggleGroup}>
                    <span>
                        {(()=>{
                            switch(id)
                            {
                                case 'aam':
                                    return 'AA Missiles';
                                case 'agm':
                                    return 'AG Missiles';
                                case 'bomb':
                                    return 'Bombs';
                                case 'fuel':
                                    return 'Fuel Tanks';
                                case 'pod':
                                    return 'Pods';
                                case 'rocket':
                                    return 'Rockets';
                                default:
                                    return id;
                            }
                        })()}
                    </span>
                    {isOpen ? (<span className="material-icons">keyboard_arrow_down</span>) : (<span className="material-icons">keyboard_arrow_up</span>)}
                </div>
                <div className={"WeaponGroup-root-content " + (!isOpen ? "collapsed" : "")}>
                    {
                        isOpen ? group.sort((a,b)=> a.name-b.name).map(weapon=>(
                            <WeaponCard key={weapon.id} weapon={weapon} aircraftid={aircraftid}/>
                            ))
                            :
                            ""
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(AircraftView);