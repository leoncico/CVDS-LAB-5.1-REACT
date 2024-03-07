import React, { useState, useEffect } from 'react';

function HelloWorld() {
    const [errorFlag, setErrorFlag] = useState(false);

    useEffect(() => {
        const apiUrl = 'http://localhost:8080/new';

        fetch(apiUrl)
            .then(response => {
                if(response.ok){
                    setErrorFlag(true);
                }
                else{
                    throw new Error ('Error en la solicitud: ${response.statusText}');
                }
            })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
    }, []);

    if(errorFlag) {
        return <h1>Hello World!</h1>;
    } else {
        return <h1>Error</h1>;
    }
}

export default HelloWorld;
