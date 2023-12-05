import type { Template } from "tinacms";

const homeHeroBlock: Template = {
  name: "homeHero",
  label: "Home Hero",
  fields: [
    {
      name: "heroHeadline",
      label: "Hero Headline",
      type: "string",
    },
    {
      name: "heroImage",
      label: "Hero Image",
      type: "image",
    },
  ],
};

export default homeHeroBlock;
