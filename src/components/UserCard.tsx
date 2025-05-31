import { User } from "@/types";

const UserCard = ({ user }: { user: User }) => (
  <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {user.name}
    </h2>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Email: {user.email}
    </p>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Phone: {user.phone}
    </p>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      City: {user.address.city}
    </p>
  </div>
);

export default UserCard;
