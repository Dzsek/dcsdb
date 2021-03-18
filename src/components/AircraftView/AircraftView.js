import React from 'react';
import {withRouter} from 'react-router-dom';


class AircraftView extends React.Component
{
    render()
    {
        let {params} = this.props.match;

        return (
            <div>{params.id}</div>
        );
    }
}

export default withRouter(AircraftView);