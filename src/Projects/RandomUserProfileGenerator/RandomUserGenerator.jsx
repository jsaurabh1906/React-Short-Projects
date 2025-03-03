import React, { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const RandomUserGenerator = () => {
  const [data, isLoading, error, refetch] = useFetch(
    "https://randomuser.me/api/"
  );
  const [user, setUser] = useState(null);

  // Extract user details when data changes
  useEffect(() => {
    if (data && data.results) {
      setUser(data.results[0]);
    }
  }, [data]);

  const handleGenerate = () => {
    refetch(); // Trigger a new fetch
  };

  return (
    <div className="w-full h-full flex flex-col items-center bg-gradient-to-b from-indigo-200 to-indigo-500 p-6">
      {/* Title */}
      <h1 className="text-3xl w-full text-center font-bold bg-indigo-700 text-white mb-6 py-3 rounded-lg shadow-lg">
        Random User Profile Generator
      </h1>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error error={error} msg="Failed to load user data" />
      ) : user ? (
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-96 text-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src={user.picture.large}
              alt="User"
              className="rounded-full w-32 h-32 border-4 border-indigo-500 shadow-md"
            />
          </div>

          {/* User Details */}
          <h3 className="text-2xl font-semibold mt-4 text-gray-800">
            {user.name.title}. {user.name.first} {user.name.last}
          </h3>
          <p className="text-gray-600 text-sm">{user.email}</p>
          <p className="text-gray-500 mt-2">
            {user.location.city}, {user.location.country}
          </p>

          {/* Additional Details */}
          <div className="mt-4 p-4 bg-indigo-100 rounded-lg shadow-inner text-gray-700">
            <p className="text-sm">
              <strong>Age:</strong> {user.dob.age}
            </p>
            <p className="text-sm">
              <strong>Phone:</strong> {user.phone}
            </p>
            <p className="text-sm">
              <strong>Nationality:</strong> {user.nat}
            </p>
          </div>

          {/* Generate New User Button */}
          <button
            onClick={handleGenerate}
            className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            Get New User
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default RandomUserGenerator;
