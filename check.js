import { Buffer } from "buffer";
import { Hash } from "@keplr-wallet/crypto";

const assets = [
  { channel: "channel-1", denom: "uatom" },
  { channel: "channel-2", denom: "uusd" },
];

export function makeIBCMinimalDenom(sourceChannelId, coinMinimalDenom) {
  return (
    "ibc/" +
    Buffer.from(
      Hash.sha256(
        Buffer.from(`transfer/${sourceChannelId}/${coinMinimalDenom}`)
      )
    )
      .toString("hex")
      .toUpperCase()
  );
}

assets.forEach((asset) => {
  console.log(
    asset.denom + " on " + asset.channel + ":",
    makeIBCMinimalDenom(asset.channel, asset.denom)
  );
});
