import React from 'react';
import {Link} from 'react-router-dom';
import './BackButton.scss';

class BackButton extends React.Component
{
    render()
    {
        let {returnTo, className} = this.props;
        return (
            <div className={className} onClick={(ev)=> window.history.back()}>
                {/* <Link to={returnTo}> */}
                    <span className="material-icons backButton">keyboard_arrow_left</span>
                {/* </Link> */}
            </div>
        )
    }
}

export default BackButton;