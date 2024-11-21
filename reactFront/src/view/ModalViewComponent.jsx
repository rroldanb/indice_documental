const ModalViewComponent = ({ onClose, selectedData }) => {
  console.log('selected data', selectedData)
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-slate-300 p-6 rounded-lg w-2/4">
          <div className="flex flex-col items-center py-2 bg-slate-900 w-full">
            <h2 className="text-4xl text-slate-100 font-bold">Detalles Repertorio </h2>
            <h2 className="text-4xl text-yellow-600 font-bold m-2">{selectedData['Year-Rep'] || 'No disponible'} </h2>
          </div>
          <div className="flex flex-wrap justify-center mt-4">
            <div className="max-w-10/12 container flex flex-wrap justify-evenly gap-1">


             {/* Campo por campo */}
          {[
            { name: 'Year', label: 'Año', type: 'number', width:"w-1/6", align:"text-center" },
            { name: 'Bimestre', label: 'Bimestre', type: 'text' , width:"w-1/6", align:"text-center"},
            { name: 'Repertorio', label: 'Repertorio', type: 'number', width:"w-1/6", align:"text-center"},
            { name: 'Fojas', label: 'Fojas', type: 'number', width:"w-1/6", align:"text-center"},
            { name: 'FechaEscritura', label: 'Fecha Escritura', type: 'text' , width:"w-1/4", align:"text-center"},
            { name: 'Nombre1', label: 'Concurrente 1', type: 'text' , width:"w-full"},
            { name: 'Nombre2', label: 'Concurrente 2', type: 'text', width:"w-full" },
            { name: 'Materia', label: 'Materia', type: 'text', width:"w-full" },
            // { name: 'YearRep', label: 'Año-Rep', type: 'text' },
            { name: 'Observacion', label: 'Observaciones', type: 'text' , width:"w-full"},
            // { name: 'N_BOLETA', label: 'N° Boleta', type: 'text' , width:"w-[100px]", align:"text-center"},
            // { name: 'Arancel', label: 'Arancel', type: 'text' , width:"w-[150px]", align:"text-center"},
            { name: 'Matricero', label: 'Matricera', type: 'text' , width:"w-1/4", align:"text-center"},
            { name: 'createdAt', label: 'Ingreso al Indice:', type: 'text' , width:"w-1/4", align:"text-center"},
            { name: 'updatedAt', label: 'ûltima revisión:', type: 'text' , width:"w-1/4", align:"text-center"},
            { name: 'id', label: 'Id Registro', type: 'text' , width:"w-1/6", align:"text-center"},
            // { name: 'CONT', label: 'Cód. Materia', type: 'text' , width:"w-[195px]"},
            // { name: 'FESC', label: 'FESC', type: 'text' , width:"w-[200px]"},
            // { name: 'MATRI', label: 'Matrícero Formato', type: 'text' , width:"w-[195px]"},
          ].map((field) => (
            <div key={field.name} className={`mb-2 ${field.width} ${field.align} `}>
              <label htmlFor={field.name} className="block text-gray-700 mb-1 font-bold ">
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={
                  // field.name === 'Bimestre'? parseInt(selectedData[field.name]):
                    (field.name === 'updatedAt' || field.name === 'createdAt' )  && selectedData[field.name]
                      ? 
                      // selectedData[field.name]
                      
                      new Date(selectedData[field.name]).toLocaleString('es-ES', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: false,  
                        })
                        // : field.name === 'Arancel'
                        // ? `$ ${selectedData[field.name]?.toLocaleString()}`  
                        : field.name === 'FechaEscritura'
                        ? new Date(
                            selectedData[field.name]
                                .split('-')
                                .reverse()
                                .join('/') 
                            ).toLocaleDateString('es-ES', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            })
                        : !selectedData[field.name]?"":selectedData[field.name]
                  }
                readOnly
                className={`w-full px-3 py-2 border text-wrap  border-gray-300 ${field.align}
                    rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              
            </div>
          ))}
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={onClose}
              className=" bg-red-500 text-white py-2 px-4 mt-8  rounded hover:bg-red-600">
              Cerrar
            </button>
          </div>

        </div>
      </div>
    );
  };
  
  export default ModalViewComponent;
  