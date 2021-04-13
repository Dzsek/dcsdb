import React from 'react';
import WeaponCard from './WeaponCard';
import './WeaponList.scss';
import {OptimizeWeaponTags, FilterByTags, hideunfinished} from '../../helper/Helper';
import DataAccess from '../../dataaccess/DataAccess';

class WeaponList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            weapons:[]
        };
    }

    componentDidMount(){
        const da = new DataAccess();
        da.getWeaponList()
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
                        .filter(f=> hideunfinished ? f.id!==f.name : true)
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