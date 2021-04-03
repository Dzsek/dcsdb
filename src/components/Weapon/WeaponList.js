import React from 'react';
import WeaponCard from './WeaponCard';
import './WeaponList.scss';
import {OptimizeWeaponTags, FilterByTags} from '../../helper/Helper';

class WeaponList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            weapons:[]
        };
    }

    componentDidMount(){
        fetch(process.env.PUBLIC_URL+"/data/weapons/weapons.json")
        .then(res=>res.json())
        .then(
            (result)=>{
                for(let w of result)
                {
                    OptimizeWeaponTags(w);
                }

                this.setState({
                    weapons: result
                })
            }
        )
    }

    render(){
        const weapons = this.state.weapons;

        return(
            <div className="WeaponList-root">
                {
                    weapons
                        .filter(f=> {
                            return FilterByTags(this.props.filter, f);
                        })
                        .sort((a,b)=>a.name-b.name)
                        //.slice(0,30)
                        .map(weapon=>
                        (
                            <WeaponCard key={weapon.id}  weapon={weapon}/>
                        )
                    )
                }
            </div>
        );
    }
}

export default WeaponList;