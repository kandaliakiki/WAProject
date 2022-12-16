import axios from "axios";

const urlMessage = "http://localhost:8080/message";

export const getChatUsers = (paramChatUser) =>
  axios({
    method: "get",
    url: `${urlMessage}/getMessage2Users`,
    params: JSON.stringify(paramChatUser),
  });
// axios.post(`${urlMessage}/getMessage2Users`, );

// export const createPost = (newPost) => axios.post(url, newPost);

// export const updatePost = (id, updatedPost) =>
//   axios.patch(`${url}/${id}`, updatedPost);

// export const deletePost = (id) => axios.delete(`${url}/${id}`);

// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
