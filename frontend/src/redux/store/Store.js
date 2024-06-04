import { configureStore } from "@reduxjs/toolkit";
import { getInmobiliariaReducer } from "../slice/InmobiliariaSlice";
export default configureStore({
    reducer:{
        getInmobiliaria: getInmobiliariaReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});