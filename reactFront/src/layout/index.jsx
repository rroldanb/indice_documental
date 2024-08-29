
const Layout = (props) => {
    return (
        <div >
                
            <header className='bg-gray-900 shadow'>
                <div className='mx-auto py-6 px-4 ml-4'>
                    <h1 className='text-amber-500 font-serif font-bold text-4xl '>Henriette Larrère Ravanal</h1>
                    <h2 className='text-white font-bold text-2xl '>Índice de Documentos 1998-2024</h2>
                    <p className="text-slate-200 ">Actualizado hasta Julio-2024</p>
                    <p className="text-slate-200 text-xs">by @Gago</p>
                </div>
            </header>
            <main className="mx-auto py-6 ">
                {props.children}
            </main>

        </div>
    )
}

export default Layout