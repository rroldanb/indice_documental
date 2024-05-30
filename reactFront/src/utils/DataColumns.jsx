
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
        accessorKey: 'Year-Rep',
        header: () => <span>Año-Rep</span>,
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
]


export default DataColumns