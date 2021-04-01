import React from 'react';
import './AircraftPage.scss';
import AircraftList from './AircraftList';
import SearchBar from '../Common/SearchBar';

class AircraftPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            searchText : "",
            searchterms : ["Modern", "Cold War", "Multirole", "Blue", "Red"]
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
                <SearchBar searchText={this.state.searchText} onSearchTextChanged={this.handleSearchTextChanged} chips={this.state.searchterms}/>
                <AircraftList filter={this.state.searchText}/>
            </div>
        );
    }
}

export default AircraftPage;