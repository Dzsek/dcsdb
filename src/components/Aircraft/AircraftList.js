import React from 'react';
import AircraftCard from './AircraftCard';
import './AircraftList.scss';

class AircraftList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            aircrafts:[]
        };
    }

    componentDidMount(){
        fetch(process.env.PUBLIC_URL+"/data/aircrafts/aircrafts.json")
        .then(res=>res.json())
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
                            let filter = this.props.filter.replaceAll('-','').toLowerCase();
                            let filters = filter.split(' ');
                            
                            let allwordsfound = true;
                            for(let word of filters)
                            {
                                let wordvalid = false;
                                for(let tag of f.tags)
                                {
                                    if(tag.includes(word))
                                    {
                                        wordvalid = true;
                                        break;
                                    }
                                }

                                if(!wordvalid)
                                {
                                    allwordsfound = false;
                                    break;
                                }
                            }

                            return allwordsfound;
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