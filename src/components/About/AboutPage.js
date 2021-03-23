import React from 'react';
import './AboutPage.scss';

class AboutPage extends React.Component{
    render()
    {
        return (
            <div className="AboutPage-root">
                <p>This website was created to provide a quick reference for the aircraft and weapons available in Digital Combat Simulator.</p>
                <p>I will try to keep this site updated to reflect the latest open beta version of DCS, but I can not guarantee that the information presented here is going to be 100% accurate at all times.</p>
                
                <p>The data presented on this website is only applicable to DCS, and it does not necessarily reflect any real-world characteristics of the various aircraft and weapons.</p>
                <p>This is a hobby project and is in no way affiliated with Eagle Dynamics.</p>

                <p>If you would like to contribute to the project with either code or keeping the data updated, you can find the github project <a href="https://github.com/Dzsek/dcsdb">here</a>, or send me a pm on reddit (<a href="https://www.reddit.com/user/Dzsekeb/">/u/Dzsekeb</a>)</p>
            </div>
        );
    }
}

export default AboutPage;