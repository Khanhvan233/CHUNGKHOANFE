import Home from "../UIContainer/Home";
import { useLocation, useNavigate } from 'react-router-dom';
import { removeAccessToken } from "../../Utils/TokenHandler";
import React, { useState, useEffect } from 'react';
import { ConfigVariable } from "../../config";

const HomeContainer = () => {
    const location = useLocation();
    const role = location.state?.role;
    const navigate = useNavigate();
    const [currentView, setCurrentView] = useState(null);

    useEffect(() => {
        if(role === ConfigVariable.roleNV){
            setCurrentView(ConfigVariable.NVtapQLNV);
        }else if(role === ConfigVariable.roleSoGD){
            setCurrentView(ConfigVariable.SoGDtapQLNVSan);
        }else{
            setCurrentView(ConfigVariable.NDTtapSoDu);
        }
    }, []);

    const onItemClick = (key) => {
      setCurrentView(key);
    }

    const onLogout = async() => {
        removeAccessToken();
        navigate('/login');
    }

    return(
        <Home role={role} onLogout={onLogout} onItemClick={onItemClick} currentView={currentView}/>
    )
}

export default HomeContainer;