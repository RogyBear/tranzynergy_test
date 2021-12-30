import React, { useContext } from "react";
import { ListItem, TextField } from "@mui/material";

import { ComponentContext } from "../contexts/ComponentContext";

export default function Tags(props) {
  const { tags, setTags } = useContext(ComponentContext);

  let index = props.index;

  const handleTagSubmission = (tagElement, userIndex) => {
    tagElement.preventDefault();

    let tempTagsArr = tags?.map((tag) => {
      let tempTagObject;
      if (tag.id === userIndex && !tag.hasOwnProperty("savedValues")) {
        return { ...tag, savedValues: [tag.value] };
      }
      if (tag.id === userIndex && tag.hasOwnProperty("savedValues")) {
        tempTagObject = JSON.parse(JSON.stringify(tag)); // Deep Copy to not modify state
        tempTagObject.savedValues.push(tag.value);
        return tempTagObject;
      }

      return tag;
    });

    setTags(tempTagsArr);

    // Reset Current Input Field
    tagElement.currentTarget.reset();
  };

  const handleTag = (input, index) => {
    let tempTagArr = [];
    let flag = true;

    if (tags.length <= 0) {
      tempTagArr.push({ value: input, id: index });
    } else {
      tempTagArr = tags.map((tag) => {
        // if the
        if (tag?.id === index) {
          flag = false;
          return { ...tag, value: input };
        }

        return tag;
      });

      if (flag) {
        tempTagArr.push({ value: input, id: index });
      }
    }

    setTags(tempTagArr);
  };

  return (
    <>
      <ListItem alignItems="center" sx={{ pl: 7 }}>
        <form
          id={`form-${index}`}
          onSubmit={(tagElement) => handleTagSubmission(tagElement, index)}
        >
          <TextField
            helperText="Hit Enter To Submit"
            label="Enter Tag"
            id="filled-basic"
            onInput={(textInput) => handleTag(textInput.target.value, index)}
          />
        </form>
      </ListItem>
    </>
  );
}

////////////////
// Scratch Pad
////////////////

// set the current value to saved value
// if not saved value then create saved value

// if the selected Index === the tag id then insert the value right there

// display tags seporately
// use functionality already in place to associate the tags with the user based on the tag id and the index of the user

// add the tags to the users

// let tempUsersArr = users.map((user, ind) => {
//   // If the tags property does not exist then set the property.
//   if (userIndex === ind && !user.hasOwnProperty("tags")) {
//     return { ...user, tags: [tags[selectedIndex].value] };
//   }

//   // If the tags property does exists then push the value.
//   if (userIndex === ind && user.hasOwnProperty("tags")) {
//     let tempUserObject = JSON.parse(JSON.stringify(user));
//     tempUserObject.tags.push(tags[selectedIndex].value);
//     return tempUserObject;
//   }

// let tempUsersArr = users.map((user, ind) => {
//   // If the tags property does not exist then set the property.
//   if (userIndex === ind && !user.hasOwnProperty("tags")) {
//     return { ...user, tags: [tags[selectedIndex].value] };
//   }

//   // If the tags property does exists then push the value.
//   if (userIndex === ind && user.hasOwnProperty("tags")) {
//     let tempUserObject = JSON.parse(JSON.stringify(user));
//     tempUserObject.tags.push(tags[selectedIndex].value);
//     return tempUserObject;
//   }

//   return user;
// });
