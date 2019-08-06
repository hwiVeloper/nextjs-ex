import withLayout from '../components/Layout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

const Blog = () => {
  return (
    <div>
      <h1>hwiveloper's Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="how-to-study-reactjs" />
        <PostLink id="javascript-framework-comparison" />
      </ul>
    </div>
  )
}

export default withLayout(Blog);