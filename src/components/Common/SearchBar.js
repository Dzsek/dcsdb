import React from 'react';
import './SearchBar.scss';

class SearchBar extends React.Component
{
    constructor(props)
    {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.clear = this.clear.bind(this);
        this.chipClicked = this.chipClicked.bind(this);
    }

    handleChange(event)
    {
        this.props.onSearchTextChanged(event.target.value);
    }

    chipClicked(data)
    {
        if(this.props.searchText.includes(data))
        {
            let newtext = this.props.searchText.replaceAll(data, "").replaceAll("  "," ");
            if(newtext===" ")
            {
                newtext = "";
            }

            this.props.onSearchTextChanged(newtext);
        }
        else
        {
            let newtext = this.props.searchText;
            if(newtext.length)
            {
                newtext += " " 
            }

            newtext += data;
            this.props.onSearchTextChanged(newtext);
        }
    }

    clear(e)
    {
        e.preventDefault();
        this.props.onSearchTextChanged("");
    }

    render()
    {
        const text = this.props.searchText;
        const chips = this.props.chips;
        return (
            <div className="SearchBar-root">
                <div className="SearchBar-root-bar">
                    <input type="text" placeholder="Search" value={text} onChange={this.handleChange} />
                    <span className="material-icons" onClick={this.clear}>close</span>
                </div>
                <div className="SearchBar-root-chips">
                    {
                        chips ? chips.map(c=>(
                                <div key={c} className={text.includes(c)? "chip-active":""} onClick={(e)=>this.chipClicked(c)}>
                                    <span>{c}</span>
                                    <span className="material-icons" onClick={this.clear}>close</span>
                                </div>
                            )) : ""
                    }
                </div>
            </div>
        );
    }
}

export default SearchBar;