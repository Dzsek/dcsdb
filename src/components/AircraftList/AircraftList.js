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
                    airplanes
                        .filter(f=> {
                            let planename = f.name.replace('-','').replace('/','').replace('.','').toLowerCase();

                            return f.name.toLowerCase().includes(this.props.filter.toLowerCase()) || planename.includes(this.props.filter.toLowerCase());
                        })
                        // .slice(0,20)
                        .map(plane=>
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