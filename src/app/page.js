import Counter from "@/components/Counter/Counter";
import Link from "next/link";

const HomePage = () => {
  // throw new Error();
  return (
    <div>
      <h1 className="ml-5">This is next app</h1>
      <Counter></Counter>
      <Link href="/about">
        <button className="btn btn-accent ml-5 mr-10">About</button>
      </Link>
      <Link href="/news">
        <button className="btn btn-accent">News</button>
      </Link>
    </div>
  );
};

export default HomePage;
