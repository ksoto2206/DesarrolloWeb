import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getInmobiliaria = createAsyncThunk("inmobiliaria/getInmobiliaria",
    async () => {
        try
        {      
            const resp = await axios.get('http://endingapi2.somee.com/api/Inmobiliaria/lista');

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);

export const getInmobiliariaUnique = createAsyncThunk("inmobiliaria/getInmobiliariaUnique",
    async (idInmobiliaria, {rejectWithValue}) => {
        try
        {      
            const resp = await axios.get('http://endingapi2.somee.com/api/Inmobiliaria/Obtener/'+idInmobiliaria);

            return resp.data;
        } 
        catch (error) 
        {
            
        }
    }
);

export const addInmobiliaria = createAsyncThunk("inmobiliaria/addInmobiliaria",
    async (data, {rejectWithValue}) => {
        try
        {      
            const resp = await axios.post('http://endingapi2.somee.com/api/Inmobiliaria/Guardar', data);

            return resp.data;
        } 
        catch (error) 
        {
            
        }
    }
);

export const deleteInmobiliaria = createAsyncThunk("inmobiliaria/deleteInmobiliaria",
    async (id, {rejectWithValue}) => {
        try
        {      
            const resp = await axios.delete('http://endingapi2.somee.com/api/Inmobiliaria/Eliminar/'+id);

            return resp.data;
        } 
        catch (error) 
        {
            
        }
    }
);

export const editInmobiliaria = createAsyncThunk("inmobiliaria/editInmobiliaria",
    async (data, {rejectWithValue}) => {
        try
        {      
            const resp = await axios.put('http://endingapi2.somee.com/api/Inmobiliaria/Editar', data);

            return resp.data;
        } 
        catch (error) 
        {
            
        }
    }
);