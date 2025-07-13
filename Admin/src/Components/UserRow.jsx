import React from "react";
import { FiTrash2 } from "react-icons/fi";

function UserRow({ user, onDelete, onRoleChange }) {
  return (
    <tr className="border-t">
      <td className="px-4 py-2">{user.name}</td>
      <td className="px-4 py-2">{user.email}</td>
      <td className="px-4 py-2">
        <select
          value={user.role}
          onChange={(e) => onRoleChange(user.id, e.target.value)}
          className="p-1 border rounded"
        >
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="Seller">Seller</option>
        </select>
      </td>
      <td className="px-4 py-2 text-center">
        <button
          onClick={() => onDelete(user.id)}
          className="text-red-500 hover:text-red-700"
        >
          <FiTrash2 size={18} />
        </button>
      </td>
    </tr>
  );
}

export default UserRow;
