import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Welcome Home!</h1>
      <Link href="/dashboard">Dashboard</Link>
    </>
  );
};

export default Home;
