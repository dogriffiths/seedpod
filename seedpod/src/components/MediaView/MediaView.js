import {useHistory} from "react-router-dom";
import useAudio from "../../hooks/useAudio";
import AudioPlayer from "../AudioPlayer/AudioPlayer";

const MediaView = ({children}) => {
    const history = useHistory();
    const audio = useAudio();
    const currentAudio = audio.current();
    const currentAudioURL = currentAudio && currentAudio.url;

    return <>
        <div style={{
            paddingBottom: currentAudioURL ? 100 : 0
        }}>
            {children}
        </div>
        <div style={{
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
            color: 'white',
            backgroundColor: 'black',
        }}
        >
            {
                currentAudioURL &&
                <>
                    <div className='MediaView-info'
                         onClick={() => history.push('/player')}
                         style={{
                             cursor: 'pointer',
                         }}
                    >
                        <div style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\', \'Ubuntu\', \'Cantarell\', \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', sans-serif;',
                            fontSize: 12,
                            marginLeft: 8,
                            marginRight: 8,
                            marginTop: 8,
                            marginBottom: 0,
                            padding: 0,
                            fontWeight: 'bold',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                        >{currentAudio.title}</div>
                        <div style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\', \'Ubuntu\', \'Cantarell\', \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', sans-serif;',
                            fontSize: 12,
                            marginLeft: 8,
                            marginRight: 8,
                            marginTop: 8,
                            marginBottom: 0,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                        >{currentAudio.description}</div>
                    </div>
                    <AudioPlayer src={currentAudioURL}/>
                </>
            }
        </div>
    </>;

}

export default MediaView;