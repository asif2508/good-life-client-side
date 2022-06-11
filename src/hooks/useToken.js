import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const postReq = async () => {
            const email = user?.user?.email;
            if(email){
                await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setToken(data.token);
                    localStorage.setItem("accessToken", data.token);
                })
            }
        }
        postReq();
    }, [user])
    return [token];
}

export default useToken;