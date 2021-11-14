import React from 'react';
import Box from "@mui/material/Box";
import Header from "../Header/Header";
import Routes from "../Routes/Routes";
import Footer from "../Footer/Footer";

const Main = () => {
    return (
        <Box style={{display: 'flex', flexDirection: 'column', minHeight: '100vh', overflow: 'hidden'}}>
            <Header/>
            <Routes/>
            <Footer/>
        </Box>
    )
}

export default Main;