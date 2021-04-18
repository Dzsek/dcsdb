import React from 'react';
import AircraftCard from './AircraftCard';
import './AircraftList.scss';
import {FilterByTags, hideunfinished} from '../../helper/Helper';
import DataAccess from '../../dataaccess/DataAccess';
import History from '../../helper/History';

class AircraftList extends React.Component{
    _history = new History();

    constructor(props){
        super(props);
        this.state={
            aircrafts:[]
        };

        this.cardClicked = this.cardClicked.bind(this);
    }

    cardClicked(planeid)
    {
        this._history.pushHistory(window.location.hash, {search: this.props.filter, scroll: window.scrollY});
    }

    componentDidMount(){
        const da = new DataAccess();
        da.getAircraftList()
        .then(
            (result)=>{
                for(let a of result)
                {
                    let aircraftname = a.name.replaceAll(' ','').replaceAll('-','').replaceAll('/','').replaceAll('.','').toLowerCase();

                    if(!a.tags)
                    {
                        a.tags = [];
                    }

                    a.tags.push(aircraftname);
                }

                this.setState({
                    aircrafts: result
                })
            }
        )
        .then(()=>
            {
                if(window.scrollToThis)
                {
                    window.scrollTo(0,window.scrollToThis);
                    delete(window.scrollToThis);
                }
            }
        )
    }

    render(){
        const aircrafts = this.state.aircrafts;

        let res = aircrafts.filter(f=> FilterByTags(this.props.filter, f, 'exact'));
        if(!res.length)
        {
            res = aircrafts.filter(f=> FilterByTags(this.props.filter, f, 'starts'));
        }

        if(!res.length)
        {
            res = aircrafts.filter(f=> FilterByTags(this.props.filter, f, 'includes'));
        }

        return(
            <div className="AircraftList-root">
                {
                    res
                        .filter(f=> hideunfinished ? f.id!==f.name : true)
                        .sort((a,b)=>a.name-b.name)
                        .map(plane=>
                        (
                            <AircraftCard key={plane.id}  plane={plane} clickCallback={this.cardClicked}/>
                        )
                    )
                }
            </div>
        );
    }
}

export default AircraftList;