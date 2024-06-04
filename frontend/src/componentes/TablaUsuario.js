import {getInmobiliaria}from '../redux/action/ActionInmobiliaria'
import { AgGridReact } from 'ag-grid-react';
function TablaUsuario(){
    const dispatch = useDispatch();
    const { inmobiliaria } = useSelector((state) => state.getInmobiliaria);
    useEffect(() => {
        dispatch(getInmobiliaria());
      }, [dispatch]);
    
      const [colDefs, setColDefs] = useState([
        { field: 'idInmobiliaria', headerName: 'ID de Inmobiliaria' },
        { field: 'razonSocial', headerName: 'Razon Social' },
        { field: 'rfc', headerName: 'RFC' },
        { field: 'telefono', headerName: 'Telefono' }
      ]);
      return (
        <AgGridReact
                ref={gridRef}
                rowData={realstates.response}
                columnDefs={colDefs}
                rowSelection={"single"}
                onSelectionChanged={onSelectionChanged}
              />
      )
}