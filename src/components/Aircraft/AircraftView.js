import React from 'react';
import {withRouter} from 'react-router-dom';
import './AircraftView.scss';
import BackButton from '../Common/BackButton';
import WeaponCard from '../Weapon/WeaponCard';
import SearchBar from '../Common/SearchBar';
import {OptimizeWeaponTags, FilterByTags, WeaponSearchTerms, RegisterPage} from "../../helper/Helper";
import DataAccess from '../../dataaccess/DataAccess';
import History from '../../helper/History';
import {Link} from 'react-router-dom';

class AircraftView extends React.Component
{
    _history = new History();

    constructor(props)
    {
        super(props);
        this.state={
            aircraft:{},
            id: "",
            searchText: "",
            searchterms: WeaponSearchTerms,
            tutorials: []
        }

        this.loadAlternate = this.loadAlternate.bind(this);
        this.handleSearchTextChanged = this.handleSearchTextChanged.bind(this);
        this.cardClicked = this.cardClicked.bind(this);
    }

    componentDidMount()
    {
        const last = this._history.getLast();
        if(last)
        {
            if(last.url === window.location.hash)
            {
                const lastHist = this._history.popHistory();
                this.setState({searchText: lastHist.obj.search});
                window.scrollToThis = lastHist.obj.scroll;
            }
        }

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
                })
                .then(()=>{
                    da.getTutorialList(params.id).then((res)=>{
                        this.setState({
                            tutorials: res
                        });
                    }).then(()=>{
                        if(window.scrollToThis)
                        {
                            window.scrollTo(0,window.scrollToThis);
                            delete(window.scrollToThis);
                        }
                    });
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

    cardClicked(weapon)
    {
        this._history.pushHistory(window.location.hash, {search: this.state.searchText, scroll: window.scrollY});
    }

    render()
    {
        const query = new URLSearchParams(this.props.location.search);
        const fromId = query.get('from');

        const {aircraft, id, searchText, tutorials} = this.state;
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
                                    let res = group.filter(f=> FilterByTags(searchText, f, 'exact'));
                                    if(!res.length)
                                    {
                                        res = group.filter(f=> FilterByTags(searchText, f, 'starts'));
                                    }

                                    if(!res.length)
                                    {
                                        res = group.filter(f=> FilterByTags(searchText, f, 'includes'));
                                    }
                                    
                                    if(res && res.length)
                                    {
                                        results.push(<WeaponGroup cardClicked={this.cardClicked} key={groupid} id={groupid} group={res} aircraftid={id}/>);
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
                <div className="AircraftView-root-info">
                    <div className="AircraftView-root-extra">
                        <p dangerouslySetInnerHTML={{ __html: aircraft.description }}></p>
                    </div>
                    { tutorials.length ? (<div className="AircraftView-root-tutorials">
                        <h3>Guides</h3>
                        <ul>
                            {tutorials.map((t)=>(
                                <Link onClick={(ev)=>this.cardClicked()} to={"/tutorial/" + id + "/" + t.id}>
                                    <li>{t.name}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>) :""}
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

    cardClicked(weapon)
    {
        this.props.cardClicked(weapon);
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
                            <WeaponCard key={weapon.id} weapon={weapon} aircraftid={aircraftid} clickCallback={(x)=>this.cardClicked(x)}/>
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