import { GetServerSidePropsContext } from "next";
import Link from "next/link";

export const Post = ({ id }: { id: number }) => {
  return (
    <div>
      <h1>This is post {id}</h1>
      <Link href="/">Go home</Link>
    </div>
  );
};

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const { query } = context;

  return {
    props: {
      id: query.id,
    },
  };
};

export default Post;
