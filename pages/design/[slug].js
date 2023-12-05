import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Layout } from "../../components/Layout";
import { tinaField, useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const content = data.design.body;
  return (
    <Layout>
      <div data-tina-field={tinaField(data.design, "body")}>
        <TinaMarkdown content={content} />
      </div>
    </Layout>
  );
}

// This is an example of a page generated with Serverside Rendering.
// This can be switched to a static page by using getStaticProps
export const getServerSideProps = async ({ params }) => {
  const { data, query, variables } = await client.queries.design({
    relativePath: `${params.slug}.mdx`,
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};
