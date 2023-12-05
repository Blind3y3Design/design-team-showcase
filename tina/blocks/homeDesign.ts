import type { Template } from "tinacms";

const homeDesignBlock: Template = {
  name: "homeDesign",
  label: "Home Design",
  fields: [
    {
      name: "designHeadline",
      label: "Design Headline",
      type: "string",
    },
  ],
};

export default homeDesignBlock;
