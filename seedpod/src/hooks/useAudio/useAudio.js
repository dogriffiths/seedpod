import AudioContext from './AudioContext'
import { useContext } from 'react'

const useAudio = () => useContext(AudioContext)

export default useAudio