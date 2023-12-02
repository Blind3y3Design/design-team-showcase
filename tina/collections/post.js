/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Writing",
  name: "post",
  path: "content/post",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      name: "body",
      label: "Post Content",
      type: "rich-text",
      isBody: true,
    },
    {
      name: "credits",
      label: "Credits",
      type: "object",
      list: true,
      fields: [
        {
          name: "authors",
          label: "Authors",
          type: "reference",
          collections: ["author"],
        },
      ],
    },
  ],
  ui: {
    router: ({ document }) => {
      return `/posts/${document._sys.filename}`;
    },
  },
};
