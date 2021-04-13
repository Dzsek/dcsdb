import React from 'react';
import AircraftCard from './AircraftCard';
import './AircraftList.scss';
import {FilterByTags} from '../../helper/Helper';
import DataAccess from '../../dataaccess/DataAccess';

class AircraftList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            aircrafts:[]
        };
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
    }

    render(){
        const aircrafts = this.state.aircrafts;

        return(
            <div className="AircraftList-root">
                {
                    aircrafts
                        .filter(f=> {
                            return FilterByTags(this.props.filter, f);
                        })
                        .sort((a,b)=>a.name-b.name)
                        .map(plane=>
                        (
                            <AircraftCard key={plane.id}  plane={plane}/>
                        )
                    )
                }
            </div>
        );
    }
}

export default AircraftList;