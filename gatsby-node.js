exports.createPages = async ({ actions, graphql, reporter }) => {
  const postSlugs = await graphql(`
    query {
      allMdx {
        posts: nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  const { posts } = postSlugs.data.allMdx;

  posts.forEach((post) => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve('./src/components/blog-template.js'),
      context: {
        slug: post.frontmatter.slug,
      },
    });
  });
};
