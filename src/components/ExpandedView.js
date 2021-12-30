import React, { useContext } from "react";
import { ComponentContext } from "../contexts/ComponentContext";
import { ListItem, ListItemText, List } from "@mui/material";
import Tags from "../components/Tags";

export default function ExpandedView(props) {
  let open = props.open;
  // let tags = props.tags;
  let filteredUser = props.filteredUser.user;
  let filteredUserIndex = props.filteredUser.index;

  const { tags } = useContext(ComponentContext);

  const handleSavedTags = () => {
    let tempArr = tags.filter((tag) => {
      let allTags = "";
      return tag?.id === filteredUserIndex && tag.savedValues !== undefined
        ? "ok"
        : "";
    });
    console.log(tempArr);
    return "ok";
  };

  return (
    <div>
      {open.state === true && open.id === filteredUserIndex ? (
        <List>
          <ListItem alignItems="flex-start" style={{ color: "#FFF" }}>
            <ListItemText
              primary={`City / State: ${filteredUser.location.city} / ${filteredUser.location.state}`}
              sx={{ pl: 5 }}
            />
          </ListItem>
          <ListItem alignItems="flex-start" style={{ color: "#FFF" }}>
            <ListItemText
              primary={`Phone: ${filteredUser.phone}`}
              sx={{ pl: 5 }}
            />
          </ListItem>
          <ListItem alignItems="flex-start" style={{ color: "#FFF" }}>
            <ListItemText
              primary={`Age: ${filteredUser.dob.age}`}
              sx={{ pl: 5 }}
            />
          </ListItem>
          <ListItem alignItems="flex-start" style={{ color: "#FFF" }}>
            <ListItemText
              primary={`Tags: ${
                tags.find((tag) => tag.id === filteredUserIndex)?.savedValues ??
                ""
              }`}
              sx={{ pl: 5 }}
            />
          </ListItem>
          <Tags
            setUsers={props.setUsers}
            setFilteredUsers={props.setFilteredUsers}
            index={filteredUserIndex}
            users={props.users}
          />
        </List>
      ) : (
        ""
      )}
    </div>
  );
}

////////////////
// Scratch Pad
////////////////
