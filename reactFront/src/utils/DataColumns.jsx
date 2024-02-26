
const DataColumns = [
    {
        accessorKey: 'Nombre1',
        header: () => <span>Concurrente 1</span>,
        // cell: info => <span>{info.getValue()}</span>
        enableSorting: true
    },
    {
        accessorKey: 'Nombre2',
        header: () => <span>Concurrente 2</span>,
        enableSorting: true
    },
    {
        accessorKey: 'Materia',
        header: () => <span>Materia</span>,
        enableSorting: true
    },
    {
        accessorKey: 'Repertorio',
        header: () => <span>Repertorio</span>,
        enableSorting: true
    },
    {
        accessorKey: 'Year',
        header: () => <span>Año</span>,
        enableSorting: true
    },
    {
        accessorKey: 'Fojas',
        header: () => <span>Fojas</span>,
        enableSorting: true
    },
    {
        accessorKey: 'FechaEscritura',
        header: () => <span>Fecha Escritura</span>,
        enableSorting: true
    }
    // {
    //     accessorKey: 'status',
    //     header: () => <span>estado</span>,
    //     cell: info => {
    //         return (
    //             <span className={classNames({
    //                 'text-white px-2 rounded-full font-semibold': true,
    //                 'bg-red-500': 'Inactivo' === info.getValue(),
    //                 'bg-green-500': 'Activo' === info.getValue()
    //             })}>
    //                 {info.getValue()}
    //             </span>
    //         )
    //     },
    // },
    // {
    //     accessorKey: 'actions',
    //     header: 'Acciones',
    //     cell: info => {
    //         return (
    //             <div className='space-x-2'>
    //                 <button className='text-red-600'>Eliminar</button>
    //                 <button className='text-blue-600'>Editar</button>
    //             </div>
    //         )
    //     },
    //     enableSorting: false

    // }
]

/* const DataColumnsOri = [
    {
        accessorKey: 'name',
        header: () => <span>Nombre</span>,
        cell: info => <span className='font-bold'>{info.getValue()}</span>


    },
    {
        accessorKey: 'lastName',
        header: () => <span>Apellido</span>
    },
    {
        accessorKey: 'age',
        header: () => <span>Edad</span>
    },
    {
        accessorKey: 'activity',
        header: () => <span>actividad</span>,
        enableSorting: true
    },
    {
        accessorKey: 'status',
        header: () => <span>estado</span>,
        cell: info => {
            return (
                <span className={classNames({
                    'text-white px-2 rounded-full font-semibold': true,
                    'bg-red-500': 'Inactivo' === info.getValue(),
                    'bg-green-500': 'Activo' === info.getValue()
                })}>
                    {info.getValue()}
                </span>
            )
        },
    },
    {
        accessorKey: 'actions',
        header: 'Acciones',
        cell: info => {
            return (
                <div className='space-x-2'>
                    <button className='text-red-600'>Eliminar</button>
                    <button className='text-blue-600'>Editar</button>
                </div>
            )
        },
        enableSorting: false

    }
] */

export default DataColumns