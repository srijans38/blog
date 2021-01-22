import { graphql, useStaticQuery } from 'gatsby';

const usePostList = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx(sort: { fields: frontmatter___image___changeTime, order: DESC }) {
        nodes {
          excerpt(pruneLength: 300)
          timeToRead
          frontmatter {
            author
            slug
            title
            date
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
    date: post.frontmatter.date,
    timeToRead: post.timeToRead,
  }));
};

export default usePostList;
