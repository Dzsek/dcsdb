import React from 'react';
import AircraftCard from '../AircraftCard/AircraftCard';
import './AircraftList.css';

class AircraftList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            airplanes:[]
        };
    }

    componentDidMount(){
        fetch(process.env.PUBLIC_URL+"/data/aircrafts/aircrafts.json")
        .then(res=>res.json())
        .then(
            (result)=>{
                this.setState({
                    airplanes: result
                })
            }
        )
    }

    render(){
        const airplanes = this.state.airplanes;

        return(
            <div className="AircraftList-root">
                {
                    airplanes.map(plane=>
                        (
                            <AircraftCard  plane={plane}/>
                        )
                    )
                }
            </div>
        );
    }
}

export default AircraftList;