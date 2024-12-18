import React from 'react'
import "../assests/css/app.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import {useState} from "react";
export const Recorder = () => {
  // const [textToCopy, setTextToCopy] = useState();
  //   const [isCopied, setCopied] = useClipboard(textToCopy, {
  //       successDuration:1000
  //   });

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
      {/* <button onClick={setCopied}>
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </button> */}
      <button onClick={startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
    </div>

  )
}
