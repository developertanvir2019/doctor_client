import React, { useEffect, useState } from 'react';

const useToken = email => {
    const [token, setToken] = useState('')
    useEffect(() => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accesstoken=', data.accessToken)
                    setToken(data.accessToken);
                }
            });
    }, [email])
    return [token];
};

export default useToken;