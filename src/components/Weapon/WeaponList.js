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

                            if(f.category==="aam")
                            {
                                f.tags.push("airtoair")
                            }

                            if(f.category==="agm")
                            {
                                f.tags.push("airtoground")
                            }
                            
                            if(f.category==="bomb")
                            {
                                f.tags.push("bombs")
                            }
                            
                            if(f.category==="pod")
                            {
                                f.tags.push("pods")
                                f.tags.push("sensors")
                            }
                            
                            if(f.category==="rocket")
                            {
                                f.tags.push("rockets")
                            }

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

                            let foundincategory = f.category.toLowerCase().includes(filter);

                            return f.name.toLowerCase().includes(filter) || weaponname.includes(filter) || foundintag || foundincategory;
                        })
                        .sort((a,b)=>a.name-b.name)
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