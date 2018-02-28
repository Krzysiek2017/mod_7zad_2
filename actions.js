import uuid from "uuid";

export const CREATE_COMMENT = "CREATE_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const THUMB_UP_COMMENT = "THUMB_UP_COMMENT";
export const THUMB_DOWN_COMMENT = "THUMB_DOWN_COMMENT";

function createComment(text) {
  return {
    type: CREATE_COMMENT,
    text,
    id: uuid.v4()
  };
}

function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    text,
    id
  };
}

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  };
}

function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id
  };
}

function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id
  };
}

const boundCreateComment = text => dispatch(createComment(text));
