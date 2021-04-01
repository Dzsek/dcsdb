import React from 'react';
import './WeaponPage.scss';
import WeaponList from './WeaponList';
import SearchBar from '../Common/SearchBar';

class WeaponPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            searchText : "",
            searchterms : ["Air-to-Ground", "Air-to-Air", "Bomb", "Rocket", "Pod", "Fuel", "GPS", "Radar", "Laser"]
        }

        this.handleSearchTextChanged = this.handleSearchTextChanged.bind(this);
    }

    handleSearchTextChanged(value)
    {
        this.setState({searchText: value});
    }

    render()
    {
        return (
            <div className="WeaponPage-root">
                <SearchBar searchText={this.state.searchText} onSearchTextChanged={this.handleSearchTextChanged} chips={this.state.searchterms}/>
                <WeaponList filter={this.state.searchText}/>
            </div>
        );
    }
}

export default WeaponPage;