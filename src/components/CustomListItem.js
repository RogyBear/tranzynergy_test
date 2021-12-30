import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemButton,
} from "@mui/material";

export default function CustomListItem(props) {
  let filteredUser = props.filteredUser.user;
  let index = props.filteredUser.index;
  let handleExpand = props.handleExpand;

  return (
    <>
      <ListItem key={index} alignItems="flex-start" style={{ color: "#FFF" }}>
        <ListItemButton
          sx={{ height: 56 }}
          onClick={() => handleExpand(filteredUser, index)}
        >
          <ListItemAvatar>
            <Avatar
              alt={`${filteredUser.name.first} ${filteredUser.name.last}`}
              src={filteredUser.picture.large}
            />
          </ListItemAvatar>
          <ListItemText
            primary={`${filteredUser?.name?.first} ${filteredUser?.name?.last}`}
            secondary={filteredUser.email}
            secondaryTypographyProps={{
              noWrap: true,
              fontSize: 12,
              lineHeight: "16px",
              color: "#D3D3D3",
            }}
            sx={{ my: 0 }}
          />
        </ListItemButton>
      </ListItem>
    </>
  );
}
