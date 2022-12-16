import axios from "axios";

const urlMessage = "http://localhost:8080/message";

export const getChatUsers = (paramChatUser) =>
  axios.post(`${urlMessage}/getMessage2Users`, paramChatUser);

export const createMessage = (paramMessage) =>
  axios.post(`${urlMessage}/createMessage`, paramMessage);

const urlFriend = "http://localhost:8080/friend";

export const getFriendByUser = (paramFriend) =>
  axios.post(`${urlFriend}/getFriendByUser`, paramFriend);

export const addFriend = (paramNewFriend) =>
  axios.post(`${urlFriend}/createFriend`, paramNewFriend);

export const deleteFriend = (paramNewFriend) =>
  axios.post(`${urlFriend}/deleteFriend`, paramNewFriend);

const urlUser = "http://localhost:8080/user";

export const getAllOtherUser = (paramAllUser) =>
  axios.post(`${urlUser}/getAllOtherUser`, paramAllUser);

export const getAllMessage = () => axios.get(`${urlMessage}/getAllMessage`);

// axios({
//   method: "post",
//   url: `http://localhost:8080/message/getMessage2Users`,
//   data: paramChatUser,
// });
// axios.post(`${urlMessage}/getMessage2Users`, );

// export const createPost = (newPost) => axios.post(url, newPost);

// export const updatePost = (id, updatedPost) =>
//   axios.patch(`${url}/${id}`, updatedPost);

// export const deletePost = (id) => axios.delete(`${url}/${id}`);

// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
