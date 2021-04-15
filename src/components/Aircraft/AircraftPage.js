import React from 'react';
import './AircraftPage.scss';
import AircraftList from './AircraftList';
import SearchBar from '../Common/SearchBar';
import {AircraftSearchTerms, RegisterPage} from '../../helper/Helper';

class AircraftPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            searchText : "",
            searchterms : AircraftSearchTerms
        }

        this.handleSearchTextChanged = this.handleSearchTextChanged.bind(this);
    }

    componentDidMount(){
        document.title = "DCSDB - Aircraft";
        RegisterPage();
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