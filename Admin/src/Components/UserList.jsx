import React from "react";

function UserList({ users }) {
  if (users.length === 0) {
    return (
      <p className="text-gray-500">
        No hay usuarios que coincidan con la búsqueda.
      </p>
    );
  }

  return (
    <table className="w-full border border-gray-200">
      <thead>
        <tr className="text-left bg-gray-100">
          <th className="p-2">Nombre</th>
          <th className="p-2">Correo</th>
          <th className="p-2">Rol</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id} className="border-t">
            <td className="p-2">{user.name}</td>
            <td className="p-2">{user.email}</td>
            <td className="p-2">{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserList;
