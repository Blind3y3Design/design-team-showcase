/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Author",
  name: "author",
  path: "authors",
  fields: [
    {
      label: "Name",
      name: "name",
      type: "string",
    },
    {
      label: "Avatar",
      name: "avatar",
      type: "image",
    },
    {
      name: "role",
      label: "Role",
      type: "string",
    },
    {
      name: "bio",
      label: "Bio",
      type: "string",
      ui: {
        component: "textarea",
      },
    },
  ],
};
