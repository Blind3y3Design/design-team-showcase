/**
 * @type {import('tinacms').Collection}
 */
import { homeDesign, homeHero, homeWriting } from "../blocks";

export default {
  label: "Home",
  name: "home",
  path: "content/home",
  format: "mdx",
  fields: [
    {
      name: "blocks",
      label: "Blocks",
      type: "object",
      list: true,
      templates: [homeDesign, homeHero, homeWriting],
    },
  ],
  ui: {
    router: () => {
      // navigate to the post that was clicked
      return `/`;
    },
  },
};
