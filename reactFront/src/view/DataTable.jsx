import { flexRender, 
    getCoreRowModel, 
    getFilteredRowModel, 
    getPaginationRowModel, 
    getSortedRowModel, 
    useReactTable } from '@tanstack/react-table'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { rankItem } from '@tanstack/match-sorter-utils'
import { BarsArrowDownIcon, 
    BarsArrowUpIcon, 
    ChevronDoubleLeftIcon, 
    ChevronDoubleRightIcon, 
    ChevronLeftIcon, 
    ChevronRightIcon, 
    ChevronUpDownIcon, 
    MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { XCircleIcon } from '@heroicons/react/24/outline'
import DataColumns from '../utils/DataColumns'

// Inicio Conexion a los datos

import axios from 'axios'
const URI = 'https://larrereravanal.cl/rrdocsindex'

let data = []

const fuzzyFilter = (row, columnid, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnid), value)
    addMeta({ itemRank })
    return itemRank.passed
}

// Fin Conexion a los datos


// Input bùsqueda

const DebouncedInput = ({ value: keyWord, onChange, ...props }) => {
    const [value, setValue] = useState(keyWord);

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value);
        }, 300);
        return () => clearTimeout(timeout);
    }, [value, onChange]);

    useEffect(() => {
        setValue(keyWord);
    }, [keyWord]);

    return (
        <input {...props} value={value} onChange={e => setValue(e.target.value)} id='cuadroBuscar' />
    );
};




const DataTable = () => {

    // Inicio Acceso a datos

    const [defaultData, setDefaultData] = useState([])
    useEffect(() => {
        gatData()
    }, [])


    const gatData = async () => {
        try {
            const res = await axios.get(URI);
            if (Array.isArray(res.data)) {
                setDefaultData(res.data);
            } else {
                console.log("Response data is not an array:" + res.data);
            }
        } catch (error) {
            console.log("Error fetching docs:" + error);
        }
    };

    useEffect(() => {
        data = defaultData
    }, [defaultData]);

    // Fin Acceso a datos

    let [globalFilter, setGlobalFilter] = useState('')
    const [sorting, setSorting] = useState([])

    const columns = DataColumns

    const getStateTable = () => {
        const totalRows = table.getFilteredRowModel().rows.length;
        const pageSize = table.getState().pagination.pageSize;
        const pageIndex = table.getState().pagination.pageIndex;
        const rowsPerPage = table.getRowModel().rows.length;

        const firstIndex = (pageIndex * pageSize) + 1;
        const lastIndex = (pageIndex * pageSize) + rowsPerPage;

        return {
            totalRows,
            firstIndex,
            lastIndex
        }
    }

    const table = useReactTable(
        {
            data,
            columns,
            state: {
                globalFilter,
                sorting
            },
            initialState: {
                pagination: {
                    pageSize: 5
                }
            },
            getCoreRowModel: getCoreRowModel(),
            getPaginationRowModel: getPaginationRowModel(),
            getFilteredRowModel: getFilteredRowModel(),
            globalFilterFn: fuzzyFilter,
            getSortedRowModel: getSortedRowModel(),
            onSortingChange: setSorting
        }
    )

    const getPageButtons = () => {
        const pageIndex = table.getState().pagination.pageIndex;
        const pageCount = table.getPageCount();
        const startPage = Math.max(0, pageIndex - 3);
        const endPage = Math.min(pageCount, startPage + 7);

        const pageButtons = [];
        for (let i = startPage; i < endPage; i++) {
            pageButtons.push(
                <button key={i}
                    className={classNames({
                        "text-gray-600 bg-gray-200 py-2 px-2 font-bold rounded border border-gray-500 hover:bg-slate-300 disabled:hover:bg-white disabled:hover:text-gray-300": true,
                        "bg-indigo-200 text-indigo-700": i === pageIndex
                    })}
                    onClick={() => table.setPageIndex(i)}>
                    {i + 1}
                </button>
            );
        }
        return pageButtons;
    }



    const clearFilter = () => {
        const cuadroBuscar = document.getElementById("cuadroBuscar")
        // Limpia el filtro global
        cuadroBuscar.value = ''
        cuadroBuscar.ariaLabel=''
        setGlobalFilter('');

    };



    return (
        <div className='px-6 py-4'>
            {/* Buscar */}
            <div className='my-2 flex justify-end'>
                <div className='relative'>
                    {/* <DebouncedInput  onChange={value => setGlobalFilter(String(value))} />  */}
                    <DebouncedInput type="text"
                        value={globalFilter ?? ''}
                        onChange={value => setGlobalFilter(String(value))}
                        className=' text-gray-600 border-gray-300 outline-indigo-700 px-6 py-2 bg-gray-200 rounded p-2'
                        placeholder='Buscar...' />
                    <MagnifyingGlassIcon className='w-5 h-5 absolute top-2.5 left-1' />
                    {globalFilter && (
                        <XCircleIcon className='w-5 h-5 absolute top-2.5 right-1 cursor-pointer' onClick={clearFilter} />
                    )}

                </div>
            </div>
            {/* Tabla */}
            <div className='overflow-auto'>
                <table className='table-auto w-full min-w-[560px]'>
                    {/* Tabla Head */}
                    <thead>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id} className='border-b border-gray-300 text-gray-600 bg-gray-400'>
                                {headerGroup.headers.map(header => (
                                    <th key={header.id} className='py-2 px-4 text-left uppercase'>
                                        {header.isPlaceholder
                                            ? null
                                            :
                                            <div className={classNames(
                                                { 'cursor-pointer select-none flex justify-between': header.column.getCanSort(), }
                                            )}
                                                onClick={header.column.getToggleSortingHandler()}
                                            >
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                                {{
                                                    asc: <BarsArrowUpIcon className="h-5 w-5" />,
                                                    desc: <BarsArrowDownIcon className="h-5 w-5" />
                                                }[header.column.getIsSorted()] ?? (header.column.getCanSort() ? <ChevronUpDownIcon className='h-5 w-5' /> : null)}
                                            </div>
                                        }

                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    {/* Tabla Body */}
                    <tbody className='bg-slate-200 '>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id} className='text-gray-600 hover:bg-slate-300'>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id} className='py-2 px-4'>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Footer */}
            <div className="mt-4 md:flex items-center justify-between ">
                {/* Botones Paginacion */}
                <div className='flex items-center gap-0.5 '>
                    {/* boton primera pagina */}
                    <button className='text-gray-600 bg-gray-200 py-2 px-1 rounded border border-gray-500 hover:bg-slate-300 disabled:hover:bg-white disabled:hover:text-gray-300'
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}>
                        {<ChevronDoubleLeftIcon className='h-6 w-4' />}
                    </button>
                    {/* boton pagina anterior */}
                    <button className='text-gray-600 bg-gray-200 py-2 px-1 rounded border border-gray-500 hover:bg-slate-300 disabled:hover:bg-white disabled:hover:text-gray-300'
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}>
                        {<ChevronLeftIcon className='h-6 w-4' />}
                    </button>
                    {/* grupo de paginas abterior */}
                    <button
                        className="text-gray-600 bg-gray-200 py-2 px-2 font-bold rounded border border-gray-500 hover:bg-slate-300 disabled:hover:bg-white disabled:hover:text-gray-300 "
                        onClick={() => table.setPageIndex(table.getState().pagination.pageIndex - 7)}
                        hidden={table.getState().pagination.pageIndex < 7}>
                        ...
                    </button>
                    {/* funcion con las paginas y numeros */}
                    {getPageButtons()}
                    {/* grupo de paginas siguiente */}
                    <button
                        className="text-gray-600 bg-gray-200 py-2 px-2 font-bold rounded border border-gray-500 hover:bg-slate-300 disabled:hover:bg-white disabled:hover:text-gray-300"
                        onClick={() => table.setPageIndex(table.getState().pagination.pageIndex + 7)}
                        hidden={(table.getState().pagination.pageIndex + 8) > table.getPageCount()}>
                        ...
                    </button>
                    {/* boton siguiente */}
                    <button className='text-gray-600 bg-gray-200 py-2 px-1 rounded border border-gray-500 hover:bg-slate-300 disabled:hover:bg-white disabled:hover:text-gray-300'
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}>
                        {<ChevronRightIcon className='h-6 w-4' />}
                    </button>
                    {/* boton fin */}
                    <button className='text-gray-600 bg-gray-200 py-2 px-1 rounded border border-gray-500 hover:bg-slate-300 disabled:hover:bg-white disabled:hover:text-gray-300'
                        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                        disabled={!table.getCanNextPage()}>
                        {<ChevronDoubleRightIcon className='h-6 w-4' />}
                    </button>
                </div>
                {/* Estado mostrando n de m */}
                <div className='text-gray-600 font-semibold px-4 py-2 bg-gray-200 rounded'>
                    Mostrando registros {getStateTable().firstIndex}&nbsp;
                    al {getStateTable().lastIndex}&nbsp;
                    de un total de {getStateTable().totalRows}&nbsp;
                    registros
                </div>
                {/* Select cantidad registros*/}
                <select className='text-gray-600 border-gray-300 outline-indigo-700 px-4 py-2 bg-gray-200 rounded'
                    onChange={e => {
                        table.setPageSize(Number(e.target.value))
                    }}>
                    <option value="5">5 reg/pág</option>
                    <option value="10">10 reg/pág</option>
                    <option value="15">15 reg/pág</option>
                    <option value="20">20 reg/pág</option>
                    <option value="50">50 reg/pág</option>
                </select>
            </div>
        </div >
    )
}

export default DataTable