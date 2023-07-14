---
sidebar_position: 4
---

# stop

The Stop function stop an audio file.

## Example

### Stop sound with onClick Event

If you run the play function and then run the stop function, the audio will stop.<br />
**When you run the play function again, it will run from the beginning.**

**When you stop**, <code>isPlaying</code> becomes <code>false</code>.<br />
**If you play again**, <code>isPlaying</code> becomes <code>true</code>.

- [playground (codesandbox)](https://codesandbox.io/p/sandbox/trusting-lena-vqdcx2?welcome=true)

```tsx
import { useAudio } from "react-use-audio";

// You need to add sound-related files
import testSound from "./sounds/test.mp3";

function App() {
  const {
    data: { isPlaying },
    play,
    stop,
  } = useAudio(testSound);

  return (
    <>
      <p>isPlaying: {isPlaying ? "true" : "false"}</p>
      <button onClick={play}>play</button>
      <button onClick={stop}>stop</button>
    </>
  );
}

export default App;
```
