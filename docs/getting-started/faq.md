---
sidebar_position: 3
---

# FAQ

## mp3 or wav path not found Error

Add **audio.d.ts** under the src directory and add the code below.

```ts
declare module "*.mp3";
declare module "*.wav";
```
