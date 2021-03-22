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
                            let planename = f.name.replaceAll(' ','').replaceAll('-','').replaceAll('/','').replaceAll('.','').toLowerCase();
                            let filter = this.props.filter.replaceAll(' ','').toLowerCase();
                            let foundintag = false;
                            if(f.tags)
                            {
                                for(let tag of f.tags)
                                {
                                    if(tag.startsWith(filter))
                                    {
                                        foundintag = true;
                                        break;
                                    }
                                }
                            }

                            return f.name.toLowerCase().includes(filter) || planename.includes(filter) || foundintag;
                        })
                        // .slice(0,20)
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