import React, { useContext } from "react";
import { InputBase, AppBar, Toolbar } from "@mui/material";
import { ComponentContext } from "../contexts/ComponentContext";

export default function SearchBar(props) {
  const { users, tags, setFilteredUsers } = useContext(ComponentContext);

  const handleSearch = (input) => {
    let tempUsersArr = users.filter((user) => {
      let fullName = `${user.user.name.first} ${user.user.name.last}`;
      let tagSearchString = "";
      tags
        .find((tag) => tag.id === user.index)
        ?.savedValues.forEach((val) => (tagSearchString += `${val} `));

      return fullName.match(input) || tagSearchString.match(input);
    });

    setFilteredUsers(tempUsersArr);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <InputBase
          style={{
            color: "#fff",
            paddingLeft: "10px",
            borderRadius: "5px",
            background: "#FFFFFF4D",
          }}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search"
        />
      </Toolbar>
    </AppBar>
  );
}
