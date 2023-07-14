---
sidebar_position: 2
---

# play

The Play function plays an audio file.

## Example

### Play sound with onClick Event

play will cause the ` isPlaying` state to be `true` until the song ends.

- [playground (codesandbox)](https://codesandbox.io/p/sandbox/react-use-sound-playing-mp3-x29jgs)

```tsx
import { useAudio } from "react-use-audio";

// You need to add sound-related files
import testSound from "./sounds/test.mp3";

function App() {
  const {
    data: { isPlaying },
    play,
  } = useAudio(testSound);

  return (
    <>
      <p>isPlaying: {isPlaying ? "true" : "false"}</p>
      <button onClick={play}>play</button>
    </>
  );
}

export default App;
```
