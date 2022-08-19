import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts.js';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Pedro. I love being a developer and the possibilities that a simple line of code can bring to our lives.
          You can contact me on <a href="htts://twitter.com/pedrotchang">Twitter</a>.
        </p>
        <p>
          {' '}
          <a href="https://pedrotchang.github.io">Portfolio</a>
          {' '}
          <a href="https://github.com/pedrotchang">Github</a>
          {' '}
          <a href="https://www.linkedin.com/in/pedrotchang/">LinkedIn</a>
        </p>
      </section>
         <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>     
    </Layout>
  );
}

