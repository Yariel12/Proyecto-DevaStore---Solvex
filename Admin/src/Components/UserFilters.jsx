import React from "react";

function UserFilters({
  searchTerm,
  setSearchTerm,
  selectedRole,
  setSelectedRole,
  roles = [],
}) {
  return (
    <div className="flex flex-col gap-4 mb-6 sm:flex-row">
      <input
        type="text"
        placeholder="Buscar por nombre o correo"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded sm:w-1/2"
      />
      <select
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
        className="w-full p-2 border rounded sm:w-1/4"
      >
        <option value="All">Todos los roles</option>
        {roles.map((role) => (
          <option key={role.id} value={role.name}>
            {role.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserFilters;
