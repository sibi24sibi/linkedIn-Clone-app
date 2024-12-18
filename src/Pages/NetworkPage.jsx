import React, { useEffect, useState } from "react";
import ConnectModel from "../Components/ConnectModel";
import { listenToUsers } from "../Api/UploadApi";
import { useAuth } from "../Api/AuthApi";

export const NetworkPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userData } = useAuth();

  useEffect(() => {
    const unsubscribe = listenToUsers((fetchedData) => {
      setData(fetchedData);
      setLoading(false); // Set loading to false after data has been fetched
    });

    return () => unsubscribe();
  }, []);

  // Filter out the current user and shuffle the remaining users
  const filteredData = data.filter((u) => u.userID !== userData.userID);
  const shuffledNetworksData = filteredData.sort(() => Math.random() - 0.5);

  return (
    <div className="md:p-10 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-4xl font-semibold m-6 uppercase text-center">People You May Know</h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4 p-4">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse md:min-w-[184px] md:max-w-[184px] h-72 rounded-md shadow-sm relative border-[1px] border-gray-300"
                >
                  <div className="w-full h-16 bg-gray-200 rounded-t-md"></div>
                  <div className="flex justify-center items-center">
                    <div className="rounded-full w-24 bg-gray-200 absolute"></div>
                  </div>
                  <div className="mt-14 px-2 flex items-center justify-center flex-col">
                    <div className="h-5 bg-gray-200 rounded w-1/2"></div>
                    <div className="mt-2 h-11 w-full bg-gray-200 rounded overflow-hidden"></div>
                  </div>
                  <div className="bottom px-2">
                    <div className="min-h-11">
                      <div className="mt-2 h-4 w-full bg-gray-200 rounded overflow-hidden"></div>
                    </div>
                    <div className="button mt-2">
                      <div className="bg-gray-200 h-[30px] rounded-[1rem]"></div>
                    </div>
                  </div>
                </div>
              ))
            : shuffledNetworksData.length === 0 ? (
                <div className="flex items-center justify-center w-[100vw] md:w-[70vw]">
                  <p className="text-center">No users found.</p>
                </div>
              ) : (
                shuffledNetworksData.map((user) => (
                  <ConnectModel key={user.id} user={user} userData={userData} />
                ))
              )}
        </div>
      </div>
    </div>
  );
};
