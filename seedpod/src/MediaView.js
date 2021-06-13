import useAudio from "./hooks/useAudio";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";

const MediaView = ({children}) => {
    const audio = useAudio();
    const currentAudio = audio.current();
    const currentAudioURL = currentAudio && currentAudio.url;

    return <>
        {children}
        <div style={{
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
            color: 'white',
            backgroundColor: 'black'
        }}>
            {
                currentAudioURL &&
                    <>
                        <p style={{
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
                        }}>{currentAudio.title}</p>
                        <p style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\', \'Ubuntu\', \'Cantarell\', \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', sans-serif;',
                            fontSize: 12,
                            marginLeft: 8,
                            marginRight: 8,
                            marginTop: 8,
                            marginBottom: 0,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}>{currentAudio.description}</p>
                <AudioPlayer src={currentAudioURL}/>
                </>
            }
        </div>
    </>;

}

export default MediaView;