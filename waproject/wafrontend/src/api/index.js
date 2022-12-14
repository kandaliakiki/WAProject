import axios from "axios";

const urlMessage = "https://waprojectkiki.herokuapp.com/message";

export const getChatUsers = (paramChatUser) =>
  axios.post(`${urlMessage}/getMessage2Users`, paramChatUser);

export const getLastChatUsers = (paramChatUser) =>
  axios.post(`${urlMessage}/getLastMessage2Users`, paramChatUser);

export const createMessage = (paramMessage) =>
  axios.post(`${urlMessage}/createMessage`, paramMessage);

export const countUnread = (paramMessage) =>
  axios.post(`${urlMessage}/countUnread`, paramMessage);

export const updateRead = (paramMessage) =>
  axios.post(`${urlMessage}/updateRead`, paramMessage);

const urlFriend = "https://waprojectkiki.herokuapp.com/friend";

export const getFriendByUser = (paramFriend) =>
  axios.post(`${urlFriend}/getFriendByUser`, paramFriend);

export const addFriend = (paramNewFriend) =>
  axios.post(`${urlFriend}/createFriend`, paramNewFriend);

export const deleteFriend = (paramNewFriend) =>
  axios.post(`${urlFriend}/deleteFriend`, paramNewFriend);

export const isFriend = (paramIsFriend) =>
  axios.post(`${urlFriend}/isFriend`, paramIsFriend);

const urlUser = "https://waprojectkiki.herokuapp.com/user";

export const getAllOtherUser = (paramAllUser) =>
  axios.post(`${urlUser}/getAllOtherUser`, paramAllUser);

export const loginUser = (paramLogin) =>
  axios.post(`${urlUser}/loginUser`, paramLogin);

export const getUserObj = (paramLogin) =>
  axios.post(`${urlUser}/getUserByQuery`, paramLogin);

export const registerUser = (paramLogin) =>
  axios.post(`${urlUser}/createUser`, paramLogin);

export const updateUser = (paramUser) =>
  axios.post(`${urlUser}/updateUser`, paramUser);

export const getUserByID = (paramUser) =>
  axios.post(`${urlUser}/getUserByID`, paramUser);

// axios({
//   method: "post",
//   url: `https://waprojectkiki.herokuapp.com/message/getMessage2Users`,
//   data: paramChatUser,
// });
// axios.post(`${urlMessage}/getMessage2Users`, );

// export const createPost = (newPost) => axios.post(url, newPost);

// export const updatePost = (id, updatedPost) =>
//   axios.patch(`${url}/${id}`, updatedPost);

// export const deletePost = (id) => axios.delete(`${url}/${id}`);

// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
