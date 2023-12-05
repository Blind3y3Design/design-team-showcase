import type { Template } from "tinacms";

const homeWritingBlock: Template = {
  name: "homeWriting",
  label: "Home Writing",
  fields: [
    {
      name: "writingHeadline",
      label: "Writing Headline",
      type: "string",
    },
    {
      name: "writingButton",
      label: "Writing Button",
      type: "object",
      fields: [
        {
          type: "string",
          name: "label",
          label: "Label",
        },
        {
          type: "string",
          name: "style",
          label: "Style",
          options: ["fill", "ghost", "flat"],
        },
        {
          type: "boolean",
          name: "pill",
          label: "Pill",
        },
      ],
    },
  ],
};

export default homeWritingBlock;
