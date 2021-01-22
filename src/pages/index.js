import React from 'react';
import Img from 'gatsby-image';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import usePostList from '../hooks/use-post-list';
import PostDisplay from '../components/post-display';
import Layout from '../components/layout';

function Index({ data }) {
  const me = useStaticQuery(graphql`
    query {
      file(name: { eq: "me" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const posts = usePostList();

  return (
    <Layout>
      <Helmet>
        <title>Srijan's Blog</title>
        <meta name="description" content="This is Srijan's Blog" />
        <html lang="en" />
      </Helmet>
      <header className="relative">
        <Img
          className="rounded-full w-28 h-28 lg:w-44 lg:h-44 z-10 shadow-img pointer-events-none"
          fluid={me.file.childImageSharp.fluid}
        />
        <div className="bg-gray-800 w-28 h-28 lg:w-44 lg:h-44 rounded-full absolute top-0 left-12" />
        <h1 className="font-heading text-4xl lg:text-5xl font-black mt-10">
          Srijan's Blog
        </h1>
        <div className="flex flex-col justify-between h-full absolute right-0 top-0">
          <svg
            className="h-10 w-10 lg:h-12 lg:w-12"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="24" fill="black" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M31.4225 46.8287C29.0849 47.589 26.5901 48 24 48C21.4081 48 18.9118 47.5884 16.5728 46.8272C17.6533 46.9567 18.0525 46.2532 18.0525 45.6458C18.0525 45.3814 18.048 44.915 18.0419 44.2911C18.035 43.5692 18.0259 42.6364 18.0195 41.5615C11.343 43.0129 9.9345 38.3418 9.9345 38.3418C8.844 35.568 7.2705 34.8294 7.2705 34.8294C5.091 33.3388 7.4355 33.369 7.4355 33.369C9.843 33.5387 11.1105 35.8442 11.1105 35.8442C13.2525 39.5144 16.728 38.4547 18.096 37.8391C18.3135 36.2871 18.9345 35.2286 19.62 34.6283C14.2905 34.022 8.688 31.9625 8.688 22.7597C8.688 20.1373 9.6225 17.994 11.1585 16.3142C10.911 15.7065 10.0875 13.2657 11.3925 9.95888C11.3925 9.95888 13.4085 9.31336 17.9925 12.4206C19.908 11.8876 21.96 11.6222 24.0015 11.6114C26.04 11.6218 28.0935 11.8876 30.0105 12.4206C34.5915 9.31336 36.603 9.95888 36.603 9.95888C37.9125 13.2657 37.089 15.7065 36.8415 16.3142C38.3805 17.994 39.309 20.1373 39.309 22.7597C39.309 31.9849 33.6975 34.0161 28.3515 34.6104C29.2125 35.3519 29.9805 36.8168 29.9805 39.058C29.9805 41.2049 29.9671 43.0739 29.9582 44.3125C29.9538 44.9261 29.9505 45.385 29.9505 45.6462C29.9505 46.2564 30.3401 46.9613 31.4225 46.8287Z"
              fill="white"
            />
          </svg>
          <svg
            className="h-10 w-10 lg:h-12 lg:w-12"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="24" fill="#262626" />
            <path
              d="M19.0014 24C19.0014 21.2387 21.2393 18.9996 24.0006 18.9996C26.7619 18.9996 29.001 21.2387 29.001 24C29.001 26.7613 26.7619 29.0004 24.0006 29.0004C21.2393 29.0004 19.0014 26.7613 19.0014 24ZM16.2983 24C16.2983 28.254 19.7466 31.7023 24.0006 31.7023C28.2546 31.7023 31.7029 28.254 31.7029 24C31.7029 19.746 28.2546 16.2977 24.0006 16.2977C19.7466 16.2977 16.2983 19.746 16.2983 24ZM30.2078 15.9923C30.2077 16.3483 30.3131 16.6963 30.5108 16.9924C30.7085 17.2885 30.9895 17.5193 31.3184 17.6557C31.6472 17.7921 32.0091 17.8279 32.3583 17.7586C32.7075 17.6892 33.0283 17.5179 33.2801 17.2663C33.532 17.0147 33.7035 16.694 33.7731 16.3449C33.8427 15.9957 33.8072 15.6338 33.6711 15.3048C33.535 14.9759 33.3044 14.6947 33.0085 14.4968C32.7125 14.2989 32.3646 14.1931 32.0086 14.193H32.0078C31.5307 14.1932 31.0731 14.3828 30.7356 14.7202C30.3981 15.0576 30.2083 15.5151 30.2078 15.9923ZM17.9406 36.2096C16.4782 36.143 15.6833 35.8994 15.155 35.6936C14.4547 35.421 13.955 35.0963 13.4297 34.5716C12.9043 34.047 12.5791 33.5478 12.3077 32.8475C12.1018 32.3195 11.8582 31.5244 11.7917 30.0619C11.719 28.4808 11.7045 28.0058 11.7045 24.0001C11.7045 19.9944 11.7202 19.5208 11.7917 17.9383C11.8583 16.4759 12.1037 15.6823 12.3077 15.1528C12.5803 14.4524 12.9051 13.9528 13.4297 13.4274C13.9543 12.902 14.4535 12.5768 15.155 12.3054C15.683 12.0995 16.4782 11.8559 17.9406 11.7894C19.5217 11.7167 19.9967 11.7022 24.0006 11.7022C28.0045 11.7022 28.48 11.7179 30.0624 11.7894C31.5248 11.856 32.3184 12.1014 32.848 12.3054C33.5483 12.5768 34.048 12.9028 34.5733 13.4274C35.0987 13.952 35.4227 14.4524 35.6953 15.1528C35.9012 15.6808 36.1448 16.4759 36.2113 17.9383C36.284 19.5208 36.2986 19.9944 36.2986 24.0001C36.2986 28.0058 36.284 28.4795 36.2113 30.0619C36.1447 31.5244 35.8999 32.3192 35.6953 32.8475C35.4227 33.5478 35.098 34.0475 34.5733 34.5716C34.0487 35.0958 33.5483 35.421 32.848 35.6936C32.32 35.8996 31.5248 36.1432 30.0624 36.2096C28.4813 36.2824 28.0063 36.2969 24.0006 36.2969C19.9949 36.2969 19.5212 36.2824 17.9406 36.2096ZM17.8164 9.09084C16.2196 9.16356 15.1284 9.41676 14.1755 9.78756C13.1886 10.1705 12.3532 10.6842 11.5183 11.5177C10.6835 12.3512 10.1711 13.188 9.78817 14.1749C9.41737 15.1284 9.16417 16.219 9.09145 17.8158C9.01753 19.4152 9.00061 19.9265 9.00061 24C9.00061 28.0735 9.01753 28.5848 9.09145 30.1842C9.16417 31.7812 9.41737 32.8716 9.78817 33.8251C10.1711 34.8114 10.6836 35.6491 11.5183 36.4823C12.353 37.3154 13.1886 37.8284 14.1755 38.2124C15.1302 38.5832 16.2196 38.8364 17.8164 38.9092C19.4166 38.9819 19.9271 39 24.0006 39C28.0741 39 28.5854 38.9831 30.1848 38.9092C31.7818 38.8364 32.8722 38.5832 33.8257 38.2124C34.812 37.8284 35.648 37.3158 36.4829 36.4823C37.3177 35.6488 37.8291 34.8114 38.213 33.8251C38.5838 32.8716 38.8382 31.781 38.9098 30.1842C38.9825 28.5836 38.9994 28.0735 38.9994 24C38.9994 19.9265 38.9825 19.4152 38.9098 17.8158C38.837 16.2188 38.5838 15.1278 38.213 14.1749C37.8291 13.1886 37.3164 12.3526 36.4829 11.5177C35.6494 10.6829 34.812 10.1705 33.8269 9.78756C32.8722 9.41676 31.7816 9.16236 30.186 9.09084C28.5866 9.01812 28.0753 9 24.0018 9C19.9283 9 19.4166 9.01692 17.8164 9.09084Z"
              fill="white"
            />
          </svg>
          <svg
            className="h-10 w-10 lg:h-12 lg:w-12"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="24" fill="#1DA1F2" />
            <path
              d="M35.7625 18.8125C35.7625 19.075 35.7625 19.3375 35.7625 19.5625C35.7625 27.325 29.8375 36.2875 19.0375 36.2875C15.7 36.2875 12.625 35.3125 10 33.6625C10.45 33.7 10.9375 33.7375 11.3875 33.7375C14.125 33.7375 16.675 32.8 18.7 31.225C16.1125 31.1875 13.9375 29.4625 13.225 27.1375C13.6 27.2125 13.9375 27.25 14.35 27.25C14.875 27.25 15.4 27.175 15.8875 27.025C13.1875 26.5 11.1625 24.1375 11.1625 21.2875C11.1625 21.25 11.1625 21.25 11.1625 21.2125C11.95 21.6625 12.85 21.925 13.825 21.9625C12.25 20.9125 11.2 19.1125 11.2 17.05C11.2 15.9625 11.5 14.95 11.9875 14.0875C14.875 17.65 19.225 19.975 24.1 20.2375C23.9875 19.825 23.95 19.3375 23.95 18.8875C23.95 15.625 26.575 13 29.8375 13C31.525 13 33.0625 13.7125 34.1125 14.8375C35.4625 14.575 36.7 14.0875 37.8625 13.4125C37.4125 14.8 36.475 15.925 35.275 16.675C36.475 16.525 37.6 16.225 38.65 15.7375C37.9 16.9375 36.925 17.9875 35.7625 18.8125Z"
              fill="white"
            />
          </svg>
          <svg
            className="h-10 w-10 lg:h-12 lg:w-12"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="24" fill="#0077B5" />
            <path
              d="M37.325 35.325C35.75 35.2875 34.2125 35.2875 32.6375 35.325C32.3 35.325 32.225 35.25 32.225 34.9125C32.225 32.1375 32.225 29.325 32.225 26.55C32.225 25.9125 32.1875 25.275 32 24.675C31.4375 22.725 29.1875 22.0125 27.575 23.325C26.7125 24 26.375 24.9375 26.375 26.0625C26.375 28.6875 26.375 31.3125 26.375 33.9375C26.375 34.275 26.3375 34.6125 26.375 34.9875C26.4125 35.2875 26.2625 35.3625 26 35.325C24.3875 35.325 22.8125 35.325 21.2 35.325C20.9 35.325 20.825 35.25 20.825 34.95C20.8625 32.5875 20.8625 30.225 20.8625 27.825C20.8625 24.9 20.8625 21.975 20.825 19.0875C20.825 18.75 20.9 18.675 21.2 18.675C22.8125 18.675 24.3875 18.675 26 18.675C26.3 18.675 26.375 18.75 26.375 19.05C26.375 19.65 26.375 20.25 26.375 20.9625C26.4875 20.85 26.525 20.8125 26.5625 20.775C28.025 18.6375 30.0875 18.0375 32.525 18.4125C35.3375 18.8625 37.1374 20.8125 37.5875 23.8125C37.6999 24.525 37.7375 25.2375 37.7375 25.95C37.7375 28.95 37.7375 31.9125 37.7375 34.9125C37.7375 35.2125 37.6625 35.325 37.325 35.325Z"
              fill="white"
            />
            <path
              d="M17.825 27C17.825 29.625 17.825 32.25 17.825 34.875C17.825 35.2125 17.75 35.325 17.4125 35.325C15.8375 35.2875 14.2625 35.325 12.6875 35.325C12.3875 35.325 12.3125 35.25 12.3125 34.95C12.3125 29.6625 12.3125 24.3375 12.3125 19.05C12.3125 18.7875 12.3875 18.675 12.6875 18.675C14.3 18.675 15.9125 18.675 17.525 18.675C17.8625 18.675 17.9 18.7875 17.9 19.0875C17.825 21.7125 17.825 24.3375 17.825 27Z"
              fill="white"
            />
            <path
              d="M18.0874 14.325C17.7124 15.825 16.1749 16.6875 14.4124 16.3875C12.5374 16.0875 11.4874 14.25 12.1624 12.45C12.6124 11.325 13.6999 10.65 15.0874 10.6875C17.1874 10.65 18.5749 12.3375 18.0874 14.325Z"
              fill="white"
            />
          </svg>
        </div>
      </header>
      <div className="mt-12 h-px w-full bg-gradient-to-r from-white via-black to-white"></div>
      <div className="mt-12 space-y-16">
        {posts.map((post) => (
          <PostDisplay key={post.slug} post={post} />
        ))}
      </div>
    </Layout>
  );
}

export default Index;
