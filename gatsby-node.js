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
    reporter.info(`Created Page ${post.frontmatter.slug}`);
  });

  const postsList = await graphql(`
    query {
      allMdx(limit: 5) {
        pageInfo {
          pageCount
        }
      }
    }
  `);

  const { pageCount } = postsList.data.allMdx.pageInfo;

  for (let i = 0; i < pageCount; i++) {
    actions.createPage({
      path: `posts${i === 0 ? '' : `/${i + 1}`}`,
      component: require.resolve('./src/components/all-posts.js'),
      context: {
        skip: i * 5,
      },
    });
  }
};
