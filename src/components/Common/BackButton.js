import React from 'react';
import './BackButton.scss';

class BackButton extends React.Component
{
    render()
    {
        let {className} = this.props;
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