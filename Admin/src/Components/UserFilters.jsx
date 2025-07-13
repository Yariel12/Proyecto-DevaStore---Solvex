import React from "react";

function UserFilters({
  searchTerm,
  setSearchTerm,
  selectedRole,
  setSelectedRole,
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
        <option value="User">Cliente</option>
        <option value="Seller">Vendedor</option>
        <option value="Admin">Administrador</option>
      </select>
    </div>
  );
}

export default UserFilters;
