import React from 'react';
import {withRouter} from 'react-router-dom';
import DataAccess from '../../dataaccess/DataAccess';

class Tutorial extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            tutorial: {}
        }
    }

    componentDidMount()
    {
        const da = new DataAccess();
        const {params} = this.props.match;
        da.getTutorial(params.planeid, params.tutorialid).then(
            (res)=>{
                this.setState({tutorial: res});
            });
    }

    render()
    {
        return (<div>{JSON.stringify(this.state.tutorial)}</div>);
    }
}

export default withRouter(Tutorial);