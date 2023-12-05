/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Design",
  name: "design",
  path: "content/design",
  format: "mdx",
  fields: [
    {
      name: "body",
      label: "Main Content",
      type: "rich-text",
      isBody: true,
    },
  ],
  ui: {
    router: ({ document }) => {
      // navigate to the post that was clicked
      return `/design/${document._sys.filename}`;
    },
  },
};
