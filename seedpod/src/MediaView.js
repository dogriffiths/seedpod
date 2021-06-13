import useAudio from "./hooks/useAudio";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";

const MediaView = ({children}) => {
    const audio = useAudio();
    const currentAudioURL = audio.current();

    return <>
        {children}
        <div style={{
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
            backgroundColor: 'red',
            color: 'white',
            textAlign: 'center'
        }}>
            {
                currentAudioURL &&
                <AudioPlayer src={currentAudioURL}/>
            }
        </div>
    </>;

}

export default MediaView;