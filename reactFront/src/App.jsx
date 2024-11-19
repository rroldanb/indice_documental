import Layout from "./layout";
import DataTable from "./view/DataTable";
import IngresoForm from "./view/IngresoForm";


function App() {

  return (
    <>
      <Layout>
        <DataTable />
        <div className="mt-4 flex items-center justify-center bg-slate-400 p-8">
      <IngresoForm />
    </div>
      </Layout>
    </>
  )
}

export default App
