import React from 'react';
import './WeaponPage.scss';
import WeaponList from '../WeaponList/WeaponList';
import SearchBar from '../SearchBar/SearchBar';

class WeaponPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            searchText : ""
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
                <SearchBar searchText={this.state.searchText} onSearchTextChanged={this.handleSearchTextChanged}/>
                <WeaponList filter={this.state.searchText}/>
            </div>
        );
    }
}

export default WeaponPage;