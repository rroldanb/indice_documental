import { useState } from 'react';

const IngresoForm = () => {
  // Estado local para cada campo del formulario
  const [formData, setFormData] = useState({
    Nombre1: '',
    Nombre2: '',
    Materia: '',
    YearRep: '',
    Fojas: '',
    FechaEscritura: '',
  });

  // Estado para manejar errores de validación
  const [errors, setErrors] = useState({});

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validaciones del formulario
  const validate = () => {
    const newErrors = {};

    // Validar Fojas (debe ser un número positivo)
    if (!formData.Fojas) {
      newErrors.Fojas = 'Fojas es requerido';
    } else if (isNaN(formData.Fojas) || Number(formData.Fojas) <= 0) {
      newErrors.Fojas = 'Fojas debe ser un número positivo';
    }

    // Validar FechaEscritura (debe ser una fecha válida)
    if (!formData.FechaEscritura) {
      newErrors.FechaEscritura = 'Fecha Escritura es requerida';
    } else {
      const fecha = new Date(formData.FechaEscritura);
      if (isNaN(fecha.getTime())) {
        newErrors.FechaEscritura = 'Fecha Escritura debe ser una fecha válida';
      }
    }

    // Puedes agregar más validaciones si es necesario

    setErrors(newErrors);

    // Retornar verdadero si no hay errores
    return Object.keys(newErrors).length === 0;
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/rrdocsindex', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }

      const data = await response.json();
      console.log('Datos enviados exitosamente:', data);

      // Opcional: Resetear el formulario después del envío exitoso
      setFormData({
        Nombre1: '',
        Nombre2: '',
        Materia: '',
        YearRep: '',
        Fojas: '',
        FechaEscritura: '',
      });
      setErrors({});
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      // Opcional: Manejar el error en la UI
    }
  };

  return (
    <div className=" mx-auto mt-10 p-6 bg-gray-400  shadow-md rounded-md ">
      <h2 className="text-2xl font-bold mb-6 text-center ">Formulario de Ingreso</h2>
      <form onSubmit={handleSubmit} noValidate className=''>
        <div className='flex bg-slate-300 p-4 rounded-t-lg'>

        {/* Nombre1 */}
        <div className="mb-4 ">
          <label htmlFor="Nombre1" className="block text-gray-700 mb-2 font-bold">
            Concurrente 1
          </label>
          <input
            type="text"
            id="Nombre1"
            name="Nombre1"
            value={formData.Nombre1}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${
              errors.Nombre1 ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.Nombre1 && (
            <p className="text-red-500 text-sm mt-1">{errors.Nombre1}</p>
          )}
        </div>

        {/* Nombre2 */}
        <div className="mb-4">
          <label htmlFor="Nombre2" className="block text-gray-700 mb-2  font-bold">
            Concurrente 2
          </label>
          <input
            type="text"
            id="Nombre2"
            name="Nombre2"
            value={formData.Nombre2}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${
              errors.Nombre2 ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.Nombre2 && (
            <p className="text-red-500 text-sm mt-1">{errors.Nombre2}</p>
          )}
        </div>

        {/* Materia */}
        <div className="mb-4">
          <label htmlFor="Materia" className="block text-gray-700 mb-2  font-bold">
            Materia
          </label>
          <input
            type="text"
            id="Materia"
            name="Materia"
            value={formData.Materia}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${
              errors.Materia ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.Materia && (
            <p className="text-red-500 text-sm mt-1">{errors.Materia}</p>
          )}
        </div>

        {/* Year-Rep */}
        <div className="mb-4">
          <label htmlFor="YearRep" className="block text-gray-700 mb-2  font-bold">
            Año-Rep
          </label>
          <input
            type="text"
            id="YearRep"
            name="YearRep"
            value={formData.YearRep}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${
              errors.YearRep ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.YearRep && (
            <p className="text-red-500 text-sm mt-1">{errors.YearRep}</p>
          )}
        </div>

        {/* Fojas */}
        <div className="mb-4  ">
          <label htmlFor="Fojas" className="block text-gray-700 mb-2  font-bold">
            Fojas
          </label>
          <input
            type="number"
            id="Fojas"
            name="Fojas"
            value={formData.Fojas}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${
              errors.Fojas ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.Fojas && (
            <p className="text-red-500 text-sm mt-1">{errors.Fojas}</p>
          )}
        </div>

        {/* FechaEscritura */}
        <div className="mb-6  ">
          <label htmlFor="FechaEscritura" className="block text-gray-700 mb-2  font-bold">
            Fecha Escritura
          </label>
          <input
            type="date"
            id="FechaEscritura"
            name="FechaEscritura"
            value={formData.FechaEscritura}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${
              errors.FechaEscritura ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.FechaEscritura && (
            <p className="text-red-500 text-sm mt-1">{errors.FechaEscritura}</p>
          )}
        </div>
        </div>

        {/* Botón de Envío */}
        <div>
            
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Enviar
        </button>
        </div>
      </form>
    </div>
  );
};

export default IngresoForm;
