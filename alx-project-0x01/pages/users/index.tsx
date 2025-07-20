import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

const Users: React.FC = ({ posts }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="grid grid-cols-3 gap-2 ">
        {posts?.map(
          (
            {
              name,
              email,
              id,
              username,
              address,
              phone,
              company,
              website,
            }: UserProps,
            key: number
          ) => (
            <UserCard
              id={id}
              key={key}
              name={name}
              email={email}
              username={username}
              address={address}
              phone={phone}
              company={company}
              website={website}
            />
          )
        )}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
