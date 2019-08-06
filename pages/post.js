import { useRouter } from 'next/router';
import withLayout from '../components/Layout';

const Content = () => {
  const router = useRouter();

  return (
    <>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </>
  )
}

const Page = () => (
  <Content/>
);

export default withLayout(Page);