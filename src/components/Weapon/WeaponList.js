import React from 'react';
import WeaponCard from './WeaponCard';
import './WeaponList.scss';
import {OptimizeWeaponTags, FilterByTags, hideunfinished} from '../../helper/Helper';
import DataAccess from '../../dataaccess/DataAccess';
import History from '../../helper/History';

class WeaponList extends React.Component{

    _history = new History();
    
    constructor(props){
        super(props);
        this.state={
            weapons:[]
        };

        this.cardClicked = this.cardClicked.bind(this);
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
        .then(()=>
            {
                if(window.scrollToThis)
                {
                    window.scrollTo(0,window.scrollToThis);
                    delete(window.scrollToThis);
                }
            }
        )
    }
    
    cardClicked(weaponid)
    {
        this._history.pushHistory(window.location.hash, {search: this.props.filter, scroll: window.scrollY});
    }

    render(){
        const weapons = this.state.weapons;

        let res = weapons.filter(f=> FilterByTags(this.props.filter, f, 'exact'));
        if(!res.length)
        {
            res = weapons.filter(f=> FilterByTags(this.props.filter, f, 'starts'));
        }

        if(!res.length)
        {
            res = weapons.filter(f=> FilterByTags(this.props.filter, f, 'includes'));
        }

        return(
            <div className="WeaponList-root">
                {
                    res
                        .filter(f=> hideunfinished ? f.id!==f.name : true)
                        .sort((a,b)=>a.name-b.name)
                        //.slice(0,30)
                        .map(weapon=>
                        (
                            <WeaponCard key={weapon.id}  weapon={weapon} clickCallback={this.cardClicked}/>
                        )
                    )
                }
            </div>
        );
    }
}

export default WeaponList;