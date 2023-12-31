import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Layout } from "../../components/Layout";
import { Credits } from "../../components/credits/credits";
import { tinaField, useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const title = data.post.title;
  const content = data.post.body;
  const credits = data.post.credits;
  return (
    <Layout title={title}>
      <div data-tina-field={tinaField(data.post, "title")}>
        <h1>{title}</h1>
      </div>
      <div data-tina-field={tinaField(data.post, "body")}>
        <TinaMarkdown content={content} />
      </div>
      <div data-tina-field={tinaField(data.post, "credits")}>
        {<Credits data={credits} />}
      </div>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const { data } = await client.queries.postConnection();
  const paths = data.postConnection.edges.map((x) => {
    return { params: { slug: x.node._sys.filename } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { data, query, variables } = await client.queries.post({
    relativePath: ctx.params.slug + ".md",
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};
