import React from "react";
import UserRow from "./UserRow";

function UserTable({ users, roles, onRoleChange, onDelete }) {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full text-left border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Correo</th>
            <th className="px-4 py-2">Rol</th>
            <th className="px-4 py-2 text-center">Acción</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              roles={roles}
              onRoleChange={onRoleChange}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
