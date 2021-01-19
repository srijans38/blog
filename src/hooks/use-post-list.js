import { graphql, useStaticQuery } from 'gatsby';

const usePostList = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx {
        nodes {
          excerpt
          frontmatter {
            author
            slug
            title
          }
        }
      }
    }
  `);

  return data.allMdx.nodes.map((post) => ({
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    author: post.frontmatter.author,
    excerpt: post.excerpt,
  }));
};

export default usePostList;
