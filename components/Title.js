import Head from "next/head"

const Title = (props) => {
  return (
    <Head>
        <Title>{props.title}</Title>
    </Head>
  )
}

export default Title