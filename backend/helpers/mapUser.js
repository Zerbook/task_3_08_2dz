import { formatDate } from "../utils/format-date.js";

export default (user) => ({
  id: user.id,
  login: user.login,
  roleId: user.role,
  registeredAt: formatDate(user.createdAt),
});
