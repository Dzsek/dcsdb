import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component
{
    constructor(props)
    {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.clear = this.clear.bind(this);
    }

    handleChange(event)
    {
        this.props.onSearchTextChanged(event.target.value);
    }

    clear(e)
    {
        e.preventDefault();
        this.props.onSearchTextChanged("");
    }

    render()
    {
        const text = this.props.searchText;
        return (
            <div className="SearchBar-root">
                <input type="text" placeholder="Search" value={text} onChange={this.handleChange} />
                <span class="material-icons" onClick={this.clear}>close</span>
            </div>
        );
    }
}

export default SearchBar;