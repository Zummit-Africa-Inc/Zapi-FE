import React, { useState } from "react";
import { Container, createTheme, Tabs, Tab, ThemeProvider } from "@mui/material";
import User from "../components/User";
import InviteUser from "../components/InviteUser";
import { grey, blue } from "@mui/material/colors";


const theme = createTheme({
    palette: {
        primary: grey
    },
    typography: {
        button: {
            textTransform: 'none'
        }
    }
});

const Community = () => {

    const [selectedTab, setSelectedTab] = useState(0);
    const [active, setActive] = useState(true)
    const handleTabs = (e :any, value : number) => {
        setSelectedTab(value);
    };


    return (
        <ThemeProvider theme={theme}>
            <Container>
                <div>
                    <Tabs
                        value={selectedTab}
                        onChange={handleTabs}
                        TabIndicatorProps={{
                            hidden: true
                        }}
                        sx={{
                            "& button":{borderRadius: 1},
                            "& button.Mui-selected": {backgroundColor: "skyblue", color: "blue"}
                        }}
                    >
                        <Tab label="User" />
                        <Tab label="Invite user" />
                    </Tabs>
                </div>
                {selectedTab === 0 && <User />}
                {selectedTab === 1 && <InviteUser />}

            </Container>
        </ThemeProvider>
    );
}

export default Community;
