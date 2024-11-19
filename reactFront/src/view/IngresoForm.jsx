import { useState, useEffect } from 'react';

const IngresoForm = ({ preloadedData })=> {
  const [formData, setFormData] = useState({
    Fojas: '',
    Repertorio: '',
    Year:'',
    Bimestre: '',
    Nombre1: '',
    Nombre2: '',
    Materia: '',
    FechaEscritura: '',
    N_BOLETA: '',
    Arancel: '',
    Matricero: '',
    Observacion: '',
    // YearRep: '',
    CONT: '',
    FESC: '',
    MATRI: '',
    Dif_Corr: '',
  });

  useEffect(() => {
    if (preloadedData) {
      setFormData(preloadedData); // Carga los datos recibidos
    }
  }, [preloadedData]);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};

    // Ejemplo de validaciones adicionales
    if (!formData.Year) {
      newErrors.Year = 'Año es requerido';
    } else if ((isNaN(formData.Year) || Number(formData.Year)) <= 0) {
      newErrors.Year = 'Año debe ser un número positivo';
    }
    if (!formData.Repertorio) {
      newErrors.Repertorio = 'Repertorio es requerido';
    } else if ((isNaN(formData.Repertorio) || Number(formData.Repertorio)) <= 0) {
      newErrors.Repertorio = 'Repertorio debe ser un número positivo';
    }


    if (formData.Fojas && (isNaN(formData.Fojas) || Number(formData.Fojas)) <= 0) {
      newErrors.Fojas = 'Fojas debe ser un número positivo';
    }

    if (!formData.FechaEscritura) {
      newErrors.FechaEscritura = 'Fecha Escritura es requerida';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await fetch('http://127.0.0.1:8000/rrdocsindex', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Error al enviar los datos');

      const data = await response.json();
      console.log('Datos enviados exitosamente:', data);

      setFormData({
        Fojas: '',
        Repertorio: '',
        Year:'',
        Bimestre: '',
        Nombre1: '',
        Nombre2: '',
        Materia: '',
        FechaEscritura: '',
        N_BOLETA: '',
        Arancel: '',
        Matricero: '',
        Observacion: '',
        // YearRep: '',
        CONT: '',
        FESC: '',
        MATRI: '',
        Dif_Corr: '',
      });
      setErrors({});
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-gray-400 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Formulario de Ingreso</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="flex flex-wrap justify-center gap-4 max-w-[900px]">
          {/* Campo por campo */}
          {[
            { name: 'Year', label: 'Año', type: 'number', width:"w-[187px]"},
            { name: 'Repertorio', label: 'Repertorio', type: 'number', width:"w-[187px]"},
            { name: 'Fojas', label: 'Fojas', type: 'number', width:"w-[187px]"},
            { name: 'Bimestre', label: 'Bimestre', type: 'number' , width:"w-[187px]"},
            { name: 'Nombre1', label: 'Concurrente 1', type: 'text' , width:"w-[800px]"},
            { name: 'Nombre2', label: 'Concurrente 2', type: 'text', width:"w-[800px]" },
            { name: 'Materia', label: 'Materia', type: 'text', width:"w-[800px]" },
            // { name: 'YearRep', label: 'Año-Rep', type: 'text' },
            { name: 'FechaEscritura', label: 'Fecha Escritura', type: 'date' , width:"w-[187px]"},
            { name: 'N_BOLETA', label: 'N° Boleta', type: 'text' , width:"w-[187px]"},
            { name: 'Arancel', label: 'Arancel', type: 'text' , width:"w-[187px]"},
            { name: 'MATRI', label: 'Matrícula', type: 'text' , width:"w-[187px]"},
            { name: 'Observacion', label: 'Observaciones', type: 'text' , width:"w-[800px]"},
            // { name: 'CONT', label: 'CONT', type: 'text' , width:"w-[187px]"},
            // { name: 'FESC', label: 'FESC', type: 'date' , width:"w-[200px]"},
            // { name: 'Matricero', label: 'Matricero', type: 'text' , width:"w-[200px]"},
            // { name: 'Dif_Corr', label: 'Diferencia Corr.', type: 'text' , width:"w-[200px]"},
          ].map((field) => (
            <div key={field.name} className={`mb-4 ${field.width}`}>
              <label htmlFor={field.name} className="block text-gray-700 mb-2 font-bold ">
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${
                  errors[field.name] ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors[field.name] && (
                <p className="text-red-500 bg-slate-200 font-bold text-sm mt-1">{errors[field.name]}</p>
              )}
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default IngresoForm;
