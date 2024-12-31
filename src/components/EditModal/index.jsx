import { XCircleIcon } from "@heroicons/react/16/solid";

const EditModal = ({ isOpen, course, onClose, onChange, onSave }) => {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed z-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#101828] text-white p-6 rounded-lg w-[90%] max-w-lg">
        <XCircleIcon className="h-6 w-6 text-white float-end top-4 right-4 cursor-pointer" onClick={onClose} />
        <h2 className="text-2xl font-bold mb-4 text-center">EDITAR CARD:</h2>
        <div className="space-y-4">
          {/* Título */}
          <div>
            <label className="block text-sm font-medium mb-1">Título</label>
            <input
              type="text"
              name="title"
              value={course.title}
              onChange={onChange}
              className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Categoría */}
          <div>
            <label className="block text-sm font-medium mb-1">Categoría</label>
            <select
              name="category"
              value={course.category}
              onChange={onChange}
              className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="FrontEnd">FrontEnd</option>
              <option value="BackEnd">BackEnd</option>
              <option value="InnovationAndManagement">Innovación y Gestión</option>
            </select>
          </div>
          {/* Imagen */}
          <div>
            <label className="block text-sm font-medium mb-1">Imagen</label>
            <input
              type="text"
              name="image"
              value={course.image}
              onChange={onChange}
              className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Video */}
          <div>
            <label className="block text-sm font-medium mb-1">Video</label>
            <input
              type="text"
              name="video"
              value={course.video}
              onChange={onChange}
              className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Descripción */}
          <div>
            <label className="block text-sm font-medium mb-1">Descripción</label>
            <textarea
              name="description"
              rows="3"
              value={course.description}
              onChange={onChange}
              className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>
        {/* Botones */}
        <div className="flex justify-end space-x-4 mt-4">
          <button
            onClick={onClose}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            Cancelar
          </button>
          <button
            onClick={onSave}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
