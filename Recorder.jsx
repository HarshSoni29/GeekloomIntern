import React from 'react'
import "../assests/css/app.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
export const Recorder = () => {
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null
  }
  return (
    <div className='container'>
      <h3>Recorder</h3>

      <div className="main-content">
        {transcript} 
    </div>
      <button onClick={startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
    </div>

  )
}