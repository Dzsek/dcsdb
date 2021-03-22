import React from 'react';
import {withRouter} from 'react-router-dom';
import BackButton from '../Common/BackButton';
import './WeaponView.scss';

class WeaponView extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            weapon:{},
            id: ""
        }
    }

    componentDidMount()
    {
        let {params} = this.props.match;
        this.setState({id:params.id});

        fetch(process.env.PUBLIC_URL+"/data/weapons/"+params.id+"/data.json")
        .then(res=>res.json())
        .then(
            (result)=>{
                this.setState({
                    weapon: result
                })
            }
        )
    }

    render()
    {
        const query = new URLSearchParams(this.props.location.search);
        const fromId = query.get('from');

        const {weapon, id} = this.state;
        return (
            <div className="WeaponView-root">
                <BackButton className="WeaponView-root-backbutton" returnTo={fromId ? "/aircraft/"+fromId : "/weapons"}/>
                <img alt={weapon.name} src={process.env.PUBLIC_URL+"/data/weapons/"+id+"/thumbnail.jpg"}></img>
                <span>{weapon.name}</span>
                <div className="WeaponView-root-content">
                    <p>weapon details</p>
                </div>
                <div className="WeaponView-root-extra">
                    <p>planes</p>
                </div>
            </div>
        );
    }
}

export default withRouter(WeaponView);