import React from 'react';
import AirplaneCard from '../AirplaneCard/AirplaneCard';
import './AirplaneList.css';

class AirplaneList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            airplanes:[]
        };
    }

    componentDidMount(){
        fetch(process.env.PUBLIC_URL+"/data/airplanes.json")
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
            <div className="AirplaneList-root">
                {
                    airplanes.map(plane=>
                        (
                            <AirplaneCard  plane={plane}/>
                        )
                    )
                }
            </div>
        );
    }
}

export default AirplaneList;