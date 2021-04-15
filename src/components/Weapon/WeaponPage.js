import React from 'react';
import './WeaponPage.scss';
import WeaponList from './WeaponList';
import SearchBar from '../Common/SearchBar';
import {WeaponSearchTerms, RegisterPage} from '../../helper/Helper';

class WeaponPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            searchText : "",
            searchterms : WeaponSearchTerms
        }

        this.handleSearchTextChanged = this.handleSearchTextChanged.bind(this);
    }

    componentDidMount(){
        document.title = "DCSDB - Weapons";
        RegisterPage();
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