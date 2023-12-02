/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Voice",
  name: "voice",
  path: "content/voice",
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
      return `/voice/${document._sys.filename}`;
    },
  },
};
