import DefaultLayout from "./layout/DefaultLayout";
import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { API_URL } from "../auth/constants";



export default function SingUp() {

    //ENVIAR AL BACKEND

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        try{
            const response = await fetch(`${API_URL}/singup`,{
                method: 'POST',
                headers: {
                    'Content-Type': ' application/json'
                        },
                        body: JSON.stringify({
                            codigo,
                            primerNombre,
                            segundoNombre,
                            primerApellido,
                            segundoApellido,
                            correo,
                            password,
                            conPassword
                        }), 
            });

            if(response.ok){
                console.log('El usuario se creo satisfactoria mente');
            }else{
                console.log('Algo Ocurrio');
            }
        }catch(error){
            console.log(error);
        }

    }

    const auth = useAuth();

    if(auth.isAuthenticated){
        return<Navigate to="/dashboard" />;
    }

    //ATRIBUTOS
    const [codigo, setCodigo] = useState("");
    const [primerNombre, setPrimerNombre] = useState("");
    const [segundoNombre, setSegundoNombre] = useState("");
    const [primerApellido, setPrimerApellido] = useState("");
    const [segundoApellido, setSegundoApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");



        return (
            <DefaultLayout>
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Registro de Usuario</h1>
                    <div>
                        <label htmlFor="">Codigo</label>
                        <input type="text" value = {codigo} onChange={(e) => setCodigo(e.target.value)}/>

                        <label htmlFor="">Primer nombre</label>
                        <input type="text" value={primerNombre} onChange={(e) => setPrimerNombre(e.target.value)}/>
                        <label htmlFor="">Segundo nombre</label>
                        <input type="text" value={segundoNombre} onChange={(e) => setSegundoNombre(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="">Primer apellido</label>
                        <input type="text" value={primerApellido} onChange={(e) => setPrimerApellido(e.target.value)}/>
                        <label htmlFor="">Segundo apellido</label>
                        <input type="text" value={ segundoApellido} onChange={(e) => setSegundoApellido(e.target.value)}/>
                        <label htmlFor="">Correo institucional</label>
                        <input type="text" value={correo} onChange={(e) => setCorreo(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="">Contraseña</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <label htmlFor="">Confirma la Contraseña</label>
                        <input type="password" value={conPassword} onChange={(e) => setConPassword(e.target.value)}/>
                    
                    </div>

                    <button type="submit">Iniciar Sesion</button>
                </form>

            </DefaultLayout>


        );
    }

