import { useState } from "react";
import { Link } from 'react-router-dom';

import { useCourses } from "../../hooks/useCourse";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";
import EditModal from "../EditModal";

// 1. Mapea aquí todas las clases que difieren por categoría
const categoryBackgroundClasses = {
  FrontEnd: "bg-blue-600",
  BackEnd: "bg-green-600",
  DevOps: "bg-yellow-600",
};

const categoryBorderClasses = {
  FrontEnd: "border-blue-500 from-blue-500 via-blue-300 to-blue-500",
  BackEnd: "border-green-500 from-green-500 via-green-300 to-green-500",
  DevOps: "border-yellow-500 from-yellow-500 via-yellow-300 to-yellow-500",
};

// 2. Clases base comunes (para no repetir en cada uso)
const cardBaseClasses = "rounded-lg border-4 overflow-hidden relative";
const imageBaseClasses = "w-full relative border-b-4 bg-gradient-to-r";
const buttonBaseClasses =
  "flex items-center justify-center gap-2 border-[#000000] border text-white px-4 py-2 rounded-md";

// 3. Clases para “hover” específicas de cada botón
const deleteButtonHoverClasses = "hover:border-red-500 hover:text-red-500";
const editButtonHoverClasses = "hover:border-blue-500 hover:text-blue-500";

export default function Courses () {
  const { groupedCourses, deleteCourse, updateCourse } = useCourses();

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Abrir modal
  const handleEdit = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  // Cerrar modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  // Actualizar el curso
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedCourse({ ...selectedCourse, [name]: value });
  };

  const handleSave = () => {
    updateCourse(selectedCourse);
    closeModal();
  };

  return (
    <div className="container mx-auto p-4  py-10">
      {Object.entries(groupedCourses).map(([category, courses]) => {
        // Obtenemos las clases según la categoría.
        // Si la categoría no existe, podrías usar por defecto la de DevOps u otra.
        const bgClass =
          categoryBackgroundClasses[category] ||
          categoryBackgroundClasses["DevOps"];
        const borderClass =
          categoryBorderClasses[category] ||
          categoryBorderClasses["DevOps"];

        return (
          <div key={category} className="mb-8">
            {/* Título de la categoría */}
            <h2
              id={category}
              className={`text-sm md:text-2xl font-bold mb-4 text-white w-fit rounded-md px-8 py-3 ${bgClass}`}
            >
              {category === 'InnovationAndManagement' ? 'INNOVATION AND MANAGEMENT' : category.toUpperCase()}
            </h2>

            {/* Tarjetas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className={`${cardBaseClasses} ${borderClass} `}
                >
                  <Link to={course.video} target="_blank" rel="noreferrer" className="overflow-hidden h-40 md:h-52 block"> 
                    <img
                      src={course.image}
                      alt={course.title}
                      className={`${imageBaseClasses} ${borderClass}  transition-transform duration-300 ease-in-out hover:scale-110 h-full object-cover`} 
                    />
                  </Link>
                  <div className="p-1">
                    <div className="flex justify-center gap-5">
                      {/* Botón Delete */}
                      <button
                        className={`${buttonBaseClasses} ${deleteButtonHoverClasses}`}
                        onClick={() => deleteCourse(course.id)}
                      >
                        <TrashIcon className="size-6" />
                        Delete
                      </button>
                      {/* Botón Edit */}
                      <button
                        className={`${buttonBaseClasses} ${editButtonHoverClasses}`}
                        onClick={() => handleEdit(course)}
                      >
                        <PencilSquareIcon className="size-6" />
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Modal para Editar el curso */}
      <EditModal
        isOpen={isModalOpen}
        course={selectedCourse}
        onClose={closeModal}
        onChange={handleChange}
        onSave={handleSave}
      />
    </div>
  );
}
