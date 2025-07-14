import React from "react";
import { FiTrash2 } from "react-icons/fi";

function UserRow({ user, roles = [], onDelete, onRoleChange }) {
  return (
    <tr className="border-t">
      <td className="px-4 py-2">{user.name}</td>
      <td className="px-4 py-2">{user.email}</td>
      <td className="px-4 py-2">
        <select
          name="roleId"
          value={user.roleId}
          onChange={(e) => onRoleChange(user.id, parseInt(e.target.value))}
          className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
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
