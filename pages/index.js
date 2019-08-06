import withLayout from '../components/Layout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Blog = () => {
  return (
    <div>
      <h1>hwiveloper's Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="How to study react.js" />
        <PostLink title="Javascript Framework Comparison" />
      </ul>
    </div>
  )
}

export default withLayout(Blog);