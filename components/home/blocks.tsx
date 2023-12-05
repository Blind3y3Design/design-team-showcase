import React from "react";
import type { HomeBlocks } from "../../tina/__generated__/types";
import { Design } from "./blocks/design";
import { Hero } from "./blocks/hero";
import { Writing } from "./blocks/writing";

export const Blocks = (props: HomeBlocks) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            switch (block.__typename) {
              case "HomeBlocksHomeDesign":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Design data={block} />
                  </React.Fragment>
                );
              case "HomeBlocksHomeHero":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Hero data={block} />
                  </React.Fragment>
                );
              case "HomeBlocksHomeWriting":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Writing data={block} />
                  </React.Fragment>
                );
              default:
                return null;
            }
          })
        : null}
    </>
  );
};
