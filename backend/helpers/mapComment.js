import { formatTime } from "../utils/format-time.js";

export default (comment) => {
  return {
    content: comment.content,
    author: comment.author.login,
    id: comment._id,
    publishedAt: formatTime(comment.createdAt),
  };
};
