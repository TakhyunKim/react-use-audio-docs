---
sidebar_position: 3
---

# pause

The Pause function pause an audio file.

## Example

### Pause sound with onClick Event

If you run the play function and then run the pause function, the audio will pause.<br />
**When you run the play function again, it will pick up where it left off.**

**When you pause**, <code>isPlaying</code> becomes <code>false</code> and <code>isPause</code> becomes <code>true</code>.<br />
**If you play again**, <code>isPlaying</code> becomes <code>true</code> and <code>isPause</code> becomes <code>false</code>.<br />

- [playground (codesandbox)](https://codesandbox.io/p/sandbox/elastic-voice-hgqghg?file=%2Fsrc%2FApp.tsx%3A6%2C17)

```tsx
import { useAudio } from "react-use-audio";

// You need to add sound-related files
import testSound from "./sounds/test.mp3";

function App() {
  const {
    data: { isPlaying, isPause },
    play,
    pause,
  } = useAudio(testSound);

  return (
    <>
      <p>isPlaying: {isPlaying ? "true" : "false"}</p>
      <p>isPause: {isPause ? "true" : "false"}</p>
      <button onClick={play}>play</button>
      <button onClick={pause}>pause</button>
    </>
  );
}

export default App;
```
