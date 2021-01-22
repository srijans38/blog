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
            image {
              childImageSharp {
                fluid(maxHeight: 200, maxWidth: 180) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
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
    image: post.frontmatter.image.childImageSharp.fluid,
  }));
};

export default usePostList;
