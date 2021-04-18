import React from 'react';
import './WeaponPage.scss';
import WeaponList from './WeaponList';
import SearchBar from '../Common/SearchBar';
import {WeaponSearchTerms, RegisterPage} from '../../helper/Helper';
import History from '../../helper/History';

class WeaponPage extends React.Component
{
    _history = new History();
    
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

        const last = this._history.getLast();
        if(last)
        {
            if(last.url === window.location.hash)
            {
                const lastHist = this._history.popHistory();
                this.setState({searchText: lastHist.obj.search});
                window.scrollToThis = lastHist.obj.scroll;
            }
        }
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