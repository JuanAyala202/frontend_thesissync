import DefaultLayout from "./layout/DefaultLayout";
import { useState } from 'react';
import { useAuth } from "../auth/AuthProvider";
import { Navigate } from "react-router-dom";
import { Button } from 'react-bootstrap';




export default function Login(){
    
    const [codigo, setCodigo] = useState("");
    const [password, setPassword] = useState("");
    
    const auth = useAuth();

    if(auth.isAuthenticated){
        return<Navigate to="/dashboard" />;
    }


    return(

        <DefaultLayout>
        <form className="form">
            <h1>Login</h1>
            <div>
            <label htmlFor="">Codigo</label>
            <input type="text" value = {codigo} onChange={(e) => setCodigo(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="">Contraseña</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <Button type='submit' variant="primary">Iniciar sesion</Button>{' '}
        </form>
        </DefaultLayout>


    );
}

