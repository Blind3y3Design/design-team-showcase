/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Home",
  name: "home",
  path: "content/home",
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
    router: () => {
      // navigate to the post that was clicked
      return `/`;
    },
  },
};
