import { getInmobiliaria } from '../redux/action/ActionInmobiliaria'
import { AgGridReact } from 'ag-grid-react';
import { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { Form, Button, Col, Row, Card, CardBody, CardFooter, FormLabel } from 'react-bootstrap'
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

function TablaUsuario({ showForm }) {

    function cambio(){
        showForm()
    }
    const dispatch = useDispatch();
    const { inmobiliarias } = useSelector((state) => state.getInmobiliaria);
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
        <div
            className="ag-theme-quartz" // applying the grid theme
            style={{ height: 500, width: 802 }} // the grid will fill the size of the parent container
        >
            <AgGridReact
                rowData={inmobiliarias.response}
                columnDefs={colDefs}
                rowSelection={"single"}
            />
            <Col>
          <Button variant='primary' onClick={cambio}>Nueva Inmobiliaria</Button>
        </Col>
        </div>

    )
}

export default TablaUsuario;