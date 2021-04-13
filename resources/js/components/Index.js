import axios from "axios";
import react, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Index = () => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        axios.get("/api/").then(data=>setUserInfo(data.data));
    }, [userInfo])

    return <>
        {userInfo && (<>{userInfo.map(user=>{
            return <h1>{user.name} <br/> {user.id} <br/> {user.email}</h1>
        })}</>)}
    </>
};

export default Index;
