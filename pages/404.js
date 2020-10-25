import Link from 'next/link'
import Layout from 'components/layout/layout'

export default function Custom404Page() {
  return (
    <Layout>
      <h1>OOPS.</h1>
      <p>Sorry, the page you are looking for isn't here.</p>
      <Link href="/">
        <a>Go back to the beginning?</a>
      </Link>
    </Layout>
  )
}
