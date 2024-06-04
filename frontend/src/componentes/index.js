import React, { useEffect, useState } from 'react';
import FormInmobiliaria from './FormUsuarios';
import TableInmobiliaria from './TablaUsuario';
import { useDispatch } from 'react-redux';

function Inmobiliarias() {
    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(false);


    const showTable = () => {
        setShowForm(prevShowForm => !prevShowForm);

    };



    return (
        showForm ? (
            <FormInmobiliaria showForm={showTable} />
        ) : (
            <TableInmobiliaria showForm={showTable} />
        )
    );
}

export default Inmobiliarias;