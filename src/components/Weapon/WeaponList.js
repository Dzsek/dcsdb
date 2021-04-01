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
                for(let w of result)
                {
                    let weaponname = w.name.replaceAll(' ','').replaceAll('-','').replaceAll('/','').replaceAll('.','').toLowerCase();

                    if(!w.tags)
                    {
                        w.tags = [];
                    }

                    w.tags.push(weaponname);
                    w.tags.push(w.category.toLowerCase());

                    if(w.category==="aam")
                    {
                        w.tags.push("airtoair")
                        w.tags.push("aa")
                    }

                    if(w.category==="agm")
                    {
                        w.tags.push("airtoground")
                        w.tags.push("ag")
                    }
                    
                    if(w.category==="bomb")
                    {
                        w.tags.push("bombs")
                        w.tags.push("airtoground")
                        w.tags.push("ag")
                    }
                    
                    if(w.category==="pod")
                    {
                        w.tags.push("pods")
                        w.tags.push("sensors")
                    }
                    
                    if(w.category==="rocket")
                    {
                        w.tags.push("rockets")
                        w.tags.push("airtoground")
                        w.tags.push("ag")
                    }
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
                            let filter = this.props.filter.replaceAll('-','').toLowerCase();
                            let filters = filter.split(' ');
                            
                            let allwordsfound = true;
                            for(let word of filters)
                            {
                                let wordvalid = false;
                                for(let tag of f.tags)
                                {
                                    if(tag.includes(word))
                                    {
                                        wordvalid = true;
                                        break;
                                    }
                                }

                                if(!wordvalid)
                                {
                                    allwordsfound = false;
                                    break;
                                }
                            }

                            return allwordsfound;
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