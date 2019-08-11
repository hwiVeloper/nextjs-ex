import Link from 'next/link';

const lineStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={lineStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={lineStyle}>About</a>
    </Link>
  </div>
);

export default Header;