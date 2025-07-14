import { useState, useEffect } from "react";
import {
  getAllUsers,
  getRoles,
  updateUserRole,
  deleteUser,
} from "../services/userService";
import { toast } from "react-toastify";
import { usePagination } from "../Hook/usePagination";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch {
      toast.error("Error al obtener los usuarios");
    }
  };

  const fetchRoles = async () => {
    try {
      const data = await getRoles();
      setRoles(data);
    } catch {
      toast.error("Error al obtener roles");
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchRoles();
  }, []);

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole =
      selectedRole === "All" ||
      (user.roleName ?? "").toLowerCase() === selectedRole.toLowerCase();

    return matchesSearch && matchesRole;
  });

  const { currentPage, totalPages, goToPage, setCurrentPage } = usePagination(
    filteredUsers.length,
    8
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedRole, setCurrentPage]);

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * 8,
    currentPage * 8
  );

  const handleRoleChange = async (id, newRoleId) => {
    try {
      await updateUserRole(id, newRoleId);
      setUsers((prev) =>
        prev.map((user) =>
          user.id === id ? { ...user, roleId: newRoleId } : user
        )
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

  return {
    users: paginatedUsers,
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
  };
}
