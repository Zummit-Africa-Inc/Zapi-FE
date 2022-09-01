import React from "react";
import { Typography, List } from "@mui/material";
import { makeStyles, } from '@mui/styles';
import { MarketPlaceText } from "../testdata";


const MarketPlace = () => {
    const classes = useStyles()

    return (
        <>
            <div className={classes.marketPlace}>
                <div className={classes.marketplaceText}>
                    <Typography gutterBottom variant="subtitle1" sx=
                        {{
                            color: "#071B85", fontFamily: "Space Grotesk", fontWeight: 700, fontSize: "36px",
                            lineHeight: "45.94px", textAlign: "center", marginTop: "116px"
                        }}>Explore the marketplace
                    </Typography>

                    <Typography gutterBottom variant="subtitle1" sx={{
                        color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 400,
                        fontSize: "24px", lineHeight: "40px", textAlign: "center", marginTop: "28px"
                    }}>Production ready, fast, scalable and reliable APIs for your <br />{""}
                        A.I deployments.
                    </Typography>
                </div>
                <div className={classes.marketApi}>
                    <div className={classes.column}>
                        {MarketPlaceText.map((market, index) => (
                            <div key={index} className={classes.columnText}>
                                <>
                                    <Typography gutterBottom variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 700, fontSize: "24px", lineHeight: "30.62px" }}>{market.title}</Typography>
                                    <Typography gutterBottom variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 400, fontSize: "20px", lineHeight: "26px" }}>{market.subtitle}</Typography>
                                    {market.apis.map((api, index) => (
                                        <div key={index} className={classes.api}>
                                            <img src={api.image} alt={api.name} />
                                            <Typography variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 400, fontSize: "20px", }}>{api.name}</Typography>
                                        </div>
                                    ))}
                                </>
                            </div>
                        ))}
                    </div>
                    <div className={classes.column}>
                        {MarketPlaceText.map((market, index) => (
                            <div key={index} className={classes.columnText}>
                                <>
                                    <Typography gutterBottom variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 700, fontSize: "24px", lineHeight: "30.62px" }}>{market.title}</Typography>
                                    <Typography gutterBottom variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 400, fontSize: "20px", lineHeight: "26px" }}>{market.subtitle}</Typography>
                                    {market.apis.map((api, index) => (
                                        <div key={index} className={classes.api}>
                                            <img src={api.image} alt={api.name} />
                                            <Typography variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 400, fontSize: "20px", }}>{api.name}</Typography>
                                        </div>
                                    ))}
                                </>
                            </div>
                        ))}
                    </div>
                    <div className={classes.column}>
                        {MarketPlaceText.map((market, index) => (
                            <div key={index} className={classes.columnText}>
                                <>
                                    <Typography gutterBottom variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 700, fontSize: "24px", lineHeight: "30.62px" }}>{market.title}</Typography>
                                    <Typography gutterBottom variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 400, fontSize: "20px", lineHeight: "26px" }}>{market.subtitle}</Typography>
                                    {market.apis.map((api, index) => (
                                        <div key={index} className={classes.api}>
                                            <img src={api.image} alt={api.name} />
                                            <Typography variant="subtitle1" sx={{ color: "#071B85", fontFamily: "Space Grotesk", fontStyle: "normal", fontWeight: 400, fontSize: "20px", }}>{api.name}</Typography>
                                        </div>
                                    ))}
                                </>
                            </div>
                        ))}
                    </div>
                </div>
            <button className={classes.button}>
                    <Typography>Explore the marketplace</Typography>
                    <img className={classes.arrow} src="images/arrow.svg" />
            </button>
            </div>
        </>
    )
};

export default MarketPlace

const useStyles = makeStyles({
    marketPlace: {
        // width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    marketplaceText: {

    },
    columnText: {
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
    },
    marketApi: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2rem",
        paddingTop: "3rem",
        paddingBottom: "5rem",
        margin: "0 auto",
        "@media screen and (max-width:800px)": {
            flexDirection: "column",
        }
    },
    column: {
        display: "flex",
        flexDirection: "column",
        gap: "2.25rem",
        padding: "24px 48px 40px 24px",
        "&:nth-child(1)": {
            borderRight: "1px solid rgba(19, 50, 159, 0.45)",
            "@media screen and (max-width:800px)": {
                borderRight: "none"
            }
        },
        "&:nth-child(2)": {
            borderRight: "1px solid rgba(19, 50, 159, 0.45)",
            "@media screen and (max-width:800px)": {
                borderTop: "1px solid rgba(19, 50, 159, 0.45)",
                borderRight: "none"
            }
        },
        "&:nth-child(3)": {
            "@media screen and (max-width:800px)": {
                borderTop: "1px solid rgba(19, 50, 159, 0.45)",
            }
        }
    },
    api: {
        display: "flex",
        aligItems: "center",
        gap: "1rem",
    },

    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        backgroundColor: '#081F4A',
        border: 'none',
        color: '#FFEA00',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '20.42px',
        padding: "1.5rem 3rem",
        borderRadius:"4px",
        margin: "0 auto",
        cursor: "pointer"
    },

    arrow: {
        width: '13px',
        height: '13px',
        top: '23px',
        background: '#081F4A',
    },

})



