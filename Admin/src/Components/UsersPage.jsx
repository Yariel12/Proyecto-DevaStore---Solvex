import React from "react";
import UserFilters from "../components/UserFilters";
import UserTable from "../Components/UserTable";
import Pagination from "../components/Pagination";
import { useUsers } from "../Hook/useUsers";

function UsersPage() {
  const {
    users,
    roles,
    searchTerm,
    setSearchTerm,
    selectedRole,
    setSelectedRole,
    currentPage,
    totalPages,
    goToPage,
    handleRoleChange,
    handleDelete,
  } = useUsers();

  return (
    <div className="max-w-6xl p-8 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Gestión de Usuarios</h1>

      <UserFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
        roles={roles}
      />

      <UserTable
        users={users}
        roles={roles}
        onRoleChange={handleRoleChange}
        onDelete={handleDelete}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={goToPage}
      />
    </div>
  );
}

export default UsersPage;
