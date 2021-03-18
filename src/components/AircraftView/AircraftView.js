import React from 'react';
import {withRouter} from 'react-router-dom';
import './AircraftView.css';

class AircraftView extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            aircraft:{}
        }
    }

    componentDidMount()
    {
        let {params} = this.props.match;

        fetch(process.env.PUBLIC_URL+"/data/aircrafts/"+params.id+"/data.json")
        .then(res=>res.json())
        .then(
            (result)=>{
                this.setState({
                    aircraft: result
                })
            }
        )
    }

    render()
    {
        const {aircraft} = this.state;
        return (
            <div className="AircraftView-root">
                <h1>
                    {aircraft.name}
                </h1>

                <p>{aircraft.description}</p>
            </div>
        );
    }
}

export default withRouter(AircraftView);