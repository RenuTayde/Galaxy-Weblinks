import Title from "../components/Title"
import styles from '../styles/Home.module.css'
import Head from "next/head"

export default function Home(posts) {
  return (
    <>
    
    <Head>
    <Title title="Home" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
    </Head>
    <div className={styles.container}>
      <h1>Hello Everyone </h1>
      <button type="button" className="btn btn-primary">Primary</button>
      <style jsx>{`
      .green{
        color:green;
      }
      `}</style>
      <p className='green'>Home Page Styled Jsx</p>

    </div>
    </>
  )
}
export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}
