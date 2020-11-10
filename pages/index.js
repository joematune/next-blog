import Head from 'next/head'
import { GetStaticProps } from 'next'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Alert from '../components/alert'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

// type HomeProps = {
//   id: String,
//   title: String,
//   date: String
// }

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



        {/*
          Great opportunity to use SWR https://swr.vercel.app/
          Fetch a dev joke, display it as me
        */}
        <Alert type="error"> Bad</Alert>
        <Alert type="error"> Bad</Alert>
        <Alert type="error"> Not good</Alert>
        <Alert type="success">Decent</Alert>


      </section>

      <section className={utilStyles.headingMd}></section>
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
  )
}

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

// export const getStaticProps: GetStaticProps = async context => {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }
