export function filterUsers(users, searchTerm, selectedRole) {
  return users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole =
      selectedRole === "All" ||
      user.role.toLowerCase() === selectedRole.toLowerCase();

    return matchesSearch && matchesRole;
  });
}
