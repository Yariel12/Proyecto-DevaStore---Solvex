import React, { useEffect, useState } from "react";
import UserFilters from "../components/UserFilters";
import UserTable from "../components/UserTable";
import Pagination from "../components/Pagination";
import {
  getAllUsers,
  updateUserRole,
  deleteUser,
} from "../services/userService";
import { usePagination } from "../Hook/usePagination";
import { toast } from "react-toastify";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (err) {
      toast.error("Error al obtener los usuarios");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole =
      selectedRole === "All" ||
      user.role.toLowerCase() === selectedRole.toLowerCase();

    return matchesSearch && matchesRole;
  });

  const { currentPage, totalPages, goToPage, setCurrentPage } = usePagination(
    filteredUsers.length,
    8
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedRole]);

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * 8,
    currentPage * 8
  );

  const handleRoleChange = async (id, newRole) => {
    try {
      await updateUserRole(id, newRole);

      setUsers((prev) =>
        prev.map((user) => (user.id === id ? { ...user, role: newRole } : user))
      );

      toast.success("Rol actualizado correctamente");
    } catch {
      toast.error("Error al actualizar el rol");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      toast.success("Usuario eliminado");
      fetchUsers();
    } catch {
      toast.error("No se pudo eliminar el usuario");
    }
  };

  return (
    <div className="max-w-6xl p-8 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Gestión de Usuarios</h1>

      <UserFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
      />

      <UserTable
        users={paginatedUsers}
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
