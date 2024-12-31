import { useState } from "react";
import { useCourses } from "../../hooks/useCourse";
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate

const Form = () => {

    const { addCourse } = useCourses();
    // Estado para los valores del formulario
    const [formValues, setFormValues] = useState({
        title: "",
        category: "",
        image: "",
        video: "",
        description: "",
    });

    const navigate = useNavigate(); // Inicializa el hook useNavigate

    // Estado para los errores
    const [errors, setErrors] = useState({});

    // Manejar cambios en los campos
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });


        // Elimina el error si el campo se llena correctamente
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    // Validar campos al enviar
    const validate = () => {
        const newErrors = {};

        if (!formValues.title.trim()) {
            newErrors.title = "El título es obligatorio";
        }
        if (!formValues.category) {
            newErrors.category = "Seleccione una categoría";
        }
        if (!formValues.image.trim()) {
            newErrors.image = "El enlace de la imagen es obligatorio";
        }
        if (!formValues.video.trim()) {
            newErrors.video = "El enlace del video es obligatorio";
        }
        if (!formValues.description.trim()) {
            newErrors.description = "La descripción es obligatoria";
        }

        return newErrors;
    };

    // Manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {


            addCourse(formValues);


            navigate("/");


        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
            <div className="w-full max-w-4xl bg-black p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-4">NEW VIDEO</h1>
                <p className="text-center text-gray-400 mb-8">
                    COMPLETE THE FORM TO CREATE A NEW VIDEO CARD
                </p>
                <form onSubmit={handleSubmit} className="flex flex-wrap">
                    {/* Título */}
                    <div className="w-1/2  p-3">
                        <label className={`block text-sm font-medium mb-1 ${errors.title ? "text-red-500" : "text-white"}`}
                            htmlFor="title">
                            Title
                        </label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            value={formValues.title}
                            onChange={handleChange}
                            placeholder="Wath is FrontEnd?"
                            className={`w-full  bg-gray-800 text-white border ${errors.title ? "border-red-500 focus:ring-red-500 placeholder:text-red-500" : "border-gray-600 focus:ring-blue-500"
                                } rounded-lg px-4 py-2 focus:outline-none`}
                        />
                        {errors.title && <p className="text-sm text-red-500 mt-1">{errors.title}</p>}
                    </div>

                    {/* Categoría */}
                    <div className="w-1/2 p-3 ">
                        <label className={`block text-sm font-medium mb-1 ${errors.category ? "text-red-500" : "text-white"}`}
                            htmlFor="category">
                            Category
                        </label>
                        <select
                            id="category"
                            name="category"
                            value={formValues.category}
                            onChange={handleChange}
                            className={`w-full bg-gray-800 text-white border ${errors.category ? "border-red-500 focus:ring-red-500 placeholder:text-red-500" : "border-gray-600 focus:ring-blue-500"
                                } rounded-lg px-4 py-2 focus:outline-none`}
                        >
                            <option value="">
                                Select a category
                            </option>
                            <option value="FrontEnd">FrontEnd</option>
                            <option value="BackEnd">BackEnd</option>
                            <option value="InnovationAndManagement">Innovation and Management</option>
                        </select>
                        {errors.category && <p className="text-sm text-red-500 mt-1">{errors.category}</p>}
                    </div>

                    {/* Imagen */}
                    <div className="w-1/2 p-3">
                        <label className={`block text-sm font-medium mb-1 ${errors.image ? "text-red-500" : "text-white"}`} htmlFor="image">
                            Image
                        </label>
                        <input
                            id="image"
                            name="image"
                            type="text"
                            value={formValues.image}
                            onChange={handleChange}
                            placeholder="www.example.com/image.jpg"
                            className={`w-full bg-gray-800 text-white border ${errors.image ? "border-red-500 focus:ring-red-500 placeholder:text-red-500" : "border-gray-600 focus:ring-blue-500"
                                } rounded-lg px-4 py-2 focus:outline-none`}
                        />
                        {errors.image && <p className="text-sm text-red-500 mt-1">{errors.image}</p>}
                    </div>

                    {/* Video */}
                    <div className="w-1/2 p-3">
                        <label className={`block text-sm font-medium mb-1 ${errors.video ? "text-red-500" : "text-white"}`} htmlFor="video">
                            Video
                        </label>
                        <input
                            id="video"
                            name="video"
                            type="text"
                            value={formValues.video}
                            onChange={handleChange}
                            placeholder="www.example.com/video.mp4"
                            className={`w-full bg-gray-800 text-white border ${errors.video ? "border-red-500 focus:ring-red-500 placeholder:text-red-500" : "border-gray-600 focus:ring-blue-500"
                                } rounded-lg px-4 py-2 focus:outline-none`}
                        />
                        {errors.video && <p className="text-sm text-red-500 mt-1">{errors.video}</p>}
                    </div>

                    {/* Descripción */}
                    <div className="w-full p-3">
                        <label className={`block text-sm font-medium mb-1 ${errors.description ? "text-red-500" : "text-white"}`} htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formValues.description}
                            onChange={handleChange}
                            placeholder="This video is about..."
                            rows="4"
                            className={`w-full bg-gray-800 text-white border ${errors.description ? "border-red-500 focus:ring-red-500 placeholder:text-red-500" : "border-gray-600 focus:ring-blue-500"
                                } rounded-lg px-4 py-2 focus:outline-none`}
                        ></textarea>
                        {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description}</p>}
                    </div>

                    {/* Botones */}
                    <div className="flex  justify-start gap-5 w-full p-3">
                        <button
                            type="submit"
                            className="border-[#000000] font-bold hover:border-blue-500 border text-white hover:text-blue-500 px-4 py-2 rounded-md"
                        >
                            SAVE
                        </button>
                        <button
                            type="reset"
                            onClick={() => {
                                setFormValues({
                                    title: "",
                                    category: "",
                                    image: "",
                                    video: "",
                                    description: "",
                                });
                                setErrors({});
                            }}
                            className=" border-[#000000] font-bold hover:border-slate-500 border text-white  px-4 py-2 rounded-md"
                        >
                            CLEAR
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
