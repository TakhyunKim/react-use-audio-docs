---
sidebar_position: 1
---

# useAudio

useAudio provides <code>play</code>, <code>pause</code>, and <code>stop</code> functionality and provides<br />
the <code>name</code> of the current audio, the <code>playback state</code>, and the <code>audioBufferSource</code>.

## API

```tsx
const {
  data: { name, isPause, isPlaying, audioBufferSourceNode },
  play,
  stop,
  pause,
} = useAudio(audioFile);
```

#### options

- `audioFile: string`
  - **Required**
  - mp3, wav file
- `name`
  - mp3, wav file name(title)
- `isPause`
  - This means whether the audio file is on pause.
  - It becomes true when the pause function is executed.
  - It is false when playing..
- `isPlaying`
  - Means whether the audio file is playing.
  - True if the play function is executed.
  - True if playing.
- `audioBufferSourceNode`
  - Means Web Audio API's audioBufferSourceNode.
  - [AudioBufferSourceNode MDN](https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode)
- `play`
  - Play the audio file.
  - When this function is run, `isPause` will be `false` and `isPlaying` will be `true`.
- `pause`
  - Pause the audio file.
  - When this function is run, `isPause` will be `true` and `isPlaying` will be `false`.
- `stop`
  - Stop the audio file.
  - When this function is run, `isPause`, `isPlaying` will be `false`,
