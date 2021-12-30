import React, { Fragment, useContext } from "react";
import ExpandedView from "./ExpandedView";
import CustomListItem from "./CustomListItem";
import { Divider, List } from "@mui/material";
import { ComponentContext } from "../contexts/ComponentContext";

export default function UsersList() {
  const {
    filteredUsers,
    setFilteredUsers,
    handleExpand,
    open,
    users,
    setUsers,
  } = useContext(ComponentContext);

  return (
    <>
      <List>
        {filteredUsers?.map((filteredUser, index) => {
          return (
            <Fragment key={index}>
              <CustomListItem
                filteredUser={filteredUser}
                handleExpand={handleExpand}
              />
              <ExpandedView
                open={open}
                index={index}
                filteredUser={filteredUser}
                users={users}
                setUsers={setUsers}
                setFilteredUsers={setFilteredUsers}
              />
              <Divider color="#D3D3D3" />
            </Fragment>
          );
        })}
      </List>
    </>
  );
}
