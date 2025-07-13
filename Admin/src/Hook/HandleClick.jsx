import { toast } from "react-toastify";

export function useDeleteResource(deleteFunc, reloadFunc) {
  const confirmDelete = async (id) => {
    try {
      await deleteFunc(id);
      toast.success("Eliminado con éxito");
      await reloadFunc();
    } catch (error) {
      console.error("Error eliminando:", error);
      toast.error("No tienes permisos");
    }
  };

  const handleDelete = (id, name) => {
    const toastId = toast.warning(
      <div>
        <p>
          ¿Estás seguro de eliminar <b>{name}</b>?
        </p>
        <div className="flex justify-end gap-2 mt-2">
          <button
            onClick={() => {
              toast.dismiss(toastId);
              confirmDelete(id);
            }}
            className="px-3 py-1 text-white transition bg-red-600 rounded hover:bg-red-700"
          >
            Sí
          </button>
          <button
            onClick={() => toast.dismiss(toastId)}
            className="px-3 py-1 transition bg-gray-300 rounded hover:bg-gray-400"
          >
            No
          </button>
        </div>
      </div>,
      {
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
      }
    );
  };

  return { handleDelete };
}
