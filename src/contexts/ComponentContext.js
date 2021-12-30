import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ComponentContext = createContext();

export function ComponentProvider(props) {
  const [tags, setTags] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState();
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState({ state: false, id: 0 });

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=10").then((res) => {
      let tempArray = res.data.results.map((user, index) => {
        return { user: user, index: index };
      });
      setFilteredUsers(tempArray);
      setUsers(tempArray);
    });
  }, []);

  const handleExpand = (element, index) => {
    if (index === open.id) {
      setOpen({ state: !open.state, id: index });
    } else {
      setOpen({ state: true, id: index });
    }
  };

  return (
    <ComponentContext.Provider
      value={{
        tags,
        setTags,
        filteredUsers,
        setFilteredUsers,
        handleExpand,
        users,
        setUsers,
        open,
        setOpen,
      }}
    >
      {props.children}
    </ComponentContext.Provider>
  );
}
