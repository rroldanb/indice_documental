
const Layout = (props) => {
    return (
        <div >
                
            <header className='bg-gray-900 shadow'>
                <div className='mx-auto py-6 px-4'>
                    <h1 className='text-white font-bold text-3xl '>Índice de Documentos</h1>
                </div>
            </header>
            <main className="mx-auto py-6 ">
                {props.children}
            </main>

        </div>
    )
}

export default Layout