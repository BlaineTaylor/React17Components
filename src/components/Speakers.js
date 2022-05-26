import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";
import { useState }from 'react';

function Speakers({ theme, setTheme }) {
    const [showSessions, setShowSesssions] = useState(true);

    return (
        <>
            <SpeakersToolbar theme={theme}
                setTheme={setTheme}
                showSessions={showSessions}
                setShowSesssions={setShowSesssions}
            />
            <SpeakersList showSessions={showSessions}/>
        </>
    )
}

export default Speakers;