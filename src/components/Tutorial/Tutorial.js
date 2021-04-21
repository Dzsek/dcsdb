import React from 'react';
import {withRouter} from 'react-router-dom';
import DataAccess from '../../dataaccess/DataAccess';
import "./Tutorial.scss";

class Tutorial extends React.Component
{
    _mq = window.matchMedia('only screen and (max-width: 800px)');

    constructor(props)
    {
        super(props);
        this.state={
            tutorial: {},
            planeid: "",
            fullscreenVisible: false,
            fullscreenInstruction: {}
        }
    }

    maximizeInstruction(instr, ev)
    {
        this.setState({
            fullscreenInstruction: instr,
            fullscreenVisible: true
        });

        document.body.style.overflow = "hidden"
    }

    minimizeInstruction()
    {
        this.setState({
            fullscreenInstruction: {},
            fullscreenVisible: false
        });

        document.body.style.overflow = "auto"
    }

    componentDidMount()
    {
        const da = new DataAccess();
        const {params} = this.props.match;
        da.getTutorial(params.planeid, params.tutorialid).then(
            (res)=>{
                this.setState({
                    tutorial: res,
                    planeid: params.planeid
                });
            });
    }

    render()
    {
        const {tutorial, planeid, fullscreenVisible, fullscreenInstruction} = this.state;
        return (
                <div className="Tutorial-root">
                    <div className="Tutorial-title">
                        <h1>{tutorial.title}</h1>
                        <h2>{tutorial.subtitle}</h2>
                    </div>
                    { 
                         tutorial.steps ? tutorial.steps
                            .sort((a,b)=> a.step-b.step)
                            .map((item)=>(
                                <div key={item.step} className="Tutorial-instructionCard" >
                                    <div>
                                        <span>{item.step}</span>
                                    </div>
                                    <div>
                                        {item.image ? (<img alt={"Instruction "+item.step} src={process.env.PUBLIC_URL+"/data/aircrafts/"+planeid+"/tutorials/"+item.image} onClick={(ev)=> this.maximizeInstruction(item)}></img>) : ""}
                                        <p dangerouslySetInnerHTML={{ __html: item.instructions}}></p>
                                    </div>
                                </div>
                            )) : ""
                    }
                    {
                        fullscreenVisible ? 
                        (<div className="Tutorial-fullscreenInstruction" onClick={(ev)=> this.minimizeInstruction()}>
                                {fullscreenInstruction.image ? (<img alt={"Instruction "+fullscreenInstruction.step} src={process.env.PUBLIC_URL+"/data/aircrafts/"+planeid+"/tutorials/"+fullscreenInstruction.image}></img>) : ""}
                                <p dangerouslySetInnerHTML={{ __html: fullscreenInstruction.instructions}}></p>
                        </div>) : ""
                    }
                </div>
            );
    }
}

export default withRouter(Tutorial);