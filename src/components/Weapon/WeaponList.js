import React from 'react';
import WeaponCard from './WeaponCard';
import './WeaponList.scss';

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
                            let weaponname = f.name.replaceAll(' ','').replaceAll('-','').replaceAll('/','').replaceAll('.','').toLowerCase();
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

                            return f.name.toLowerCase().includes(filter) || weaponname.includes(filter) || foundintag;
                        })
                        // .slice(0,20)
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