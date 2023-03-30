## Check Description

This is a JavaScript code snippet that defines a function `makeIBCMinimalDenom` which takes in two parameters: `sourceChannelId` and `coinMinimalDenom`.

The `makeIBCMinimalDenom` function generates a unique identifier for an asset based on its `channel` and `denom`. It does this by hashing a specific string using the SHA256 algorithm and encoding it as a hexadecimal string. The final output is in the format "ibc/[hexadecimal string]".

The code also defines an array called `assets` that contains objects with two properties: `channel` and `denom`. The `forEach` loop iterates over each object in the `assets` array and prints out the minimal denomination identifier for each asset in the format: `[denom] on [channel]: [minimal denomination identifier]`.

To Run:
add the assets you want to check and Run `npm i` and `node check.js`
