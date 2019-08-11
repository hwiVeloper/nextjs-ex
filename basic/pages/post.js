import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const Content = () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  )
}

const Page = () => (
  <Content/>
);

export default Page;