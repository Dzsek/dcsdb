import React from 'react';
import './AboutPage.scss';
import {RegisterPage} from '../../helper/Helper';

class AboutPage extends React.Component{

    componentDidMount(){
        document.title = "DCSDB - About";
        RegisterPage();
    }

    render()
    {
        return (
            <div className="AboutPage-root">
                <p>This website was created to provide a quick reference for the aircraft and weapons available in Digital Combat Simulator.</p>

                <p>Support for this project has been stopped as of April 2024 and the aircraft and loadout information will no longer be updated.</p>
                
                <p>The data presented on this website is only applicable to DCS, and it does not necessarily reflect any real-world characteristics of the various aircraft and weapons.</p>
                <p>This is a hobby project and is in no way affiliated with Eagle Dynamics.</p>

                <p>You can find the github project <a href="https://github.com/Dzsek/dcsdb">here</a>.</p>
                <p>This will always remain free and without ads, however if you would like to support development feel free to <a href="https://www.buymeacoffee.com/dzsek">buy me a coffee/beer</a>.</p>
            </div>
        );
    }
}

export default AboutPage;
