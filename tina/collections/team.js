/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Team",
  name: "team",
  path: "content/team",
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
      return `/team/${document._sys.filename}`;
    },
  },
};
