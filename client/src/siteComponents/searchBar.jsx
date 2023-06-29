import React, { useState, useEffect } from "react";
import api from "../api/axios";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchPublicData = async () => {
      try {
        const res = await api.get("/users");
        //console.log(res.data);
        setUsers(res.data);
      } catch (err) {
        if (err.res) {
          console.log(err.res.data);
          console.log(err.res.status);
          console.log(err.res.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchPublicData();
  }, []);

  //console.log(users);

  const searchHandle = async (e) => {
    //console.warn(e.target.value);
    let key = e.target.value;
    if (key) {
      let result = await api.get(`/search/${key}`);
      if (result) {
        setUsers(result);
      }
    }else{
      
    }
  };

  return (
    <div className="hidden xl:grid">
      <div className="grid justify-center items-center mt-[10%] shadow-gray-800">
        <div className="flex">
          <AiOutlineSearch size="28px" />
          <input
            className="bg-transparent focus:border-none"
            placeholder="Type to search..."
            onChange={searchHandle}
          />
        </div>
        <div className="grid gap-4 mt-3 mb-3">
          {users.map((user, index) => {
              return (
                <div key={index+1}>
                  <div className="border border-red-500 rounded-full w-10 h-10">
                    <p className="flex justify-center mt-1">{index+1}</p>
                  </div>
                  <div className="grid">
                    <p>{user.name}</p>
                    <p>{user.phone}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
