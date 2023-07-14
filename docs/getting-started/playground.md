---
sidebar_position: 2
---

# Playground

### Play sound with onClick Event

- [playground (codesandbox)](https://codesandbox.io/p/sandbox/react-use-sound-playing-mp3-x29jgs)

```tsx
import { useAudio } from "react-use-audio";

// You need to add sound-related files
import testSound from "../sounds/test.mp3";

function App() {
  const { play } = useAudio(testSound);

  return <button onClick={play}>play</button>;
}

export default App;
```
