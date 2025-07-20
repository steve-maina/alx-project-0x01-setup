import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";
import { useState } from "react";

const Users: React.FC = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState<UserData | null>(null);

  const handleAddUser = (newPost: UserData) => {
    setPost({ ...newPost, id: posts.length + 1 });
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-700 px-4 py-2 rounded-full text-white self-end"
      >
        Add Post
      </button>
      <div className="grid grid-cols-3 gap-2 ">
        {posts.map(
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
      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
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
