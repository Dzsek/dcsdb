import React from 'react';
import './AircraftPage.css';
import AircraftList from '../AircraftList/AircraftList';
import SearchBar from '../SearchBar/SearchBar';

class AircraftPage extends React.Component
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
            <div className="AircraftPage-root">
                <SearchBar searchText={this.state.searchText} onSearchTextChanged={this.handleSearchTextChanged}/>
                <AircraftList filter={this.state.searchText}/>
            </div>
        );
    }
}

export default AircraftPage;