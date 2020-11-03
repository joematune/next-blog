import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Alert from '../components/alert'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {


  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi! I'm Joe, a developer living and working in South Africa.</p>
        <p>
          This is a learning experience for Next.js as a framework. {' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <Alert type="error"> error!</Alert>
        <Alert type="success">success!</Alert>
      </section>

      {
        console.log(allPostsData)
      }

      <section className={utilStyles.headingMd}></section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
