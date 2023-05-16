# Minimal context examples

```bash
# install
pnpm install
# OR
npm install

# run
vite
```

This repo shows two minimal examples which use react context to do the same thing: use an onClick to update shared state. A third example uses prop drilling tot the same effect. The component structure is:

- App
    - Parent
        - Button
    - Parent
        - Child

Context is used at the App level to allow a button press to update a counter and show the count in the child.

The main branch puts as much as possible into the `CountContext.ts(x)`. The `minimal-context` branch puts in as little as possible. The `prop-drilling` example achieves the same effect with props

![](./screenshot.png)