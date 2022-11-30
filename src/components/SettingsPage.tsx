import { useState } from "react";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import { removeEndpoint } from "../redux/slices/userSlice";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import { Button, Paper } from "@mui/material";
import {
  useAppDispatch,
  useAppSelector,
  useFormInputs,
  useHttpRequest,
} from "../hooks";
import { Spinner } from "../assets";
import { removeApi } from "../redux/slices/apiSlice";

// const core_url = import.meta.env.VITE_CORE_URL
const core_url = "VITE_CORE_URL";

const SettingsPage: React.FC = () => {
  const [status, setStatus] = useState("");
  const [popup, setPop] = useState(false);
  const { error, loading, sendRequest } = useHttpRequest();
  const [value, setValue] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const cookies = new Cookies();
  const profileId = cookies.get("profileId");
 
  let payload: object;

  const handleClickDelete = () => {
    setPop(!popup);
  };

  const closePopup = () => {
    setPop(false);
  };
  function onChangeValue(event: any) {
    setStatus(event.target.value);
  }

  const handleDeleteApi = async (e: any) => {
    e.preventDefault();
    const headers = { "Content-Type": "application/json" };
    try {
      const data = await sendRequest(
        `/api/${id}?profileId=${profileId}`,
        "del",
        core_url,
        payload,
        headers
      );
      if (!data || data === undefined) return;
      toast.success(data.data.message);
      navigate("/developer/dashboard");
    } catch (error) {}
  };


    
  return (
    <Paper elevation={1} className={classes.paper}>
     <div className={classes.textCol}>
        <h3>Transfer Ownership</h3>
      </div>
      <div className={classes.colcol}>
        <span>
          Transfer ownership of this API to another ZAPI user or team
        </span>
      </div>
      <div className={classes.headcol}>
        <h3>Transfer to</h3>
      </div>

      <div>
        <div onChange={onChangeValue}>
          <div className={classes.handler}>
            <input
              type="radio"
              value="User"
              className={classes.radio}
              name="User"
              // disabled={true}
              checked={status === "User"}
            />
            <label className={classes.users}>User</label>
          </div>
          <div className={classes.handler}>
            <input
              type="radio"
              className={classes.radio}
              value="Team"
              name="Team"
              // disabled={true}
              checked={status === "Team"}
            />
            <label className={classes.users}>Team</label>
          </div>

          {status === "User" ? (
            <div className={classes.formx}>
              
                  <span className={classes.icon}>
                    <SearchIcon className={classes.icontag} />{" "}
                  </span>
                  <input
                    id="input-input"
                    disabled={true}
                    className={classes.searchcol}
                    placeholder="Search ZAPI users"
                  />
            </div>
          ) : status === "Team" ? (
              <div className={classes.forms}>
                <select className={classes.selectinputs}>
                  <option value="1" disabled selected hidden>
                    Select a team...
                  </option>
                  <option  disabled={true}>
                    <button>None</button>
                  </option>
                </select>
              </div>
            
          ) : (
            ""
          )}
        </div>
      </div>

      <button className={classes.btn}>Transfer Ownership</button>

      <div className={classes.props}>
        <h3 className={classes.nameprops}>Delete API Project</h3>
      </div>
      <span className="more-text">
        Permanently deleting this API project will remove it from the ZAPI
        Hub <br />
        Listing, will destroy your team's data from Requests, Testing and
        Descriptions. <br /> This action is not reversible
      </span>
      <br />
      <div>
        <button
          onClick={handleClickDelete}
          data-selected={false}
          type="button"
          className={classes.btnbtns}>
            Delete API Project
        </button>

        {popup ? (
          <form className={classes.delmain}>
            <div className={classes.delcon}>
              <span className={classes.docmain}>Delete API Project</span>
              <span onClick={closePopup} className={classes.xlm}>
                {" "}
                X{" "}
              </span>
            </div>

            <section className={classes.sctn}>
            <div className={classes.deldel}>
              <span>
                Are you sure you want to permanentely delete this API Project?
                <br />
                This action CANNOT be undone.
              </span>
            </div>

            <div className={classes.lose}>
              <span>
                You will permanentely lose:
                <ul className={classes.ulnum}>
                  <li>Your API subscribers</li>
                  <li>Your API data & analysis</li>
                  <li>Your API documentation</li>
                  <li>Any data from ZapiAPI Testing</li>
                  <li>
                    Any data from ZapiAPI Requests (previously known as Paw)
                  </li>
                </ul>
              </span>
              <span className={classes.delapi}>Type this API project name to confirm the deletion:</span>
              <br/>
              <input
              type="text"
              className={classes.deltext}
              value={value}
              onChange={(e)=>setValue(e.target.value)}
              />
            </div>
            <hr />
            <Button 
            sx={{
              marginLeft: "80%",
              borderRadius: "6px",
              backgroundColor: "rgb(235, 76, 76)",
              color: "rgba(255, 255, 255, 0.87)",
              marginTop: "5px",
              "@media screen and (max-width: 576px)": {
                marginLeft: "60%",
              },
            }}
            variant="contained"
            onClick={handleDeleteApi} 
            disabled={!value}
            >
            {loading ? <Spinner /> : "Delete"}
            </Button>
            </section>
          </form>
        ) : (
          ""
        )}
      </div>
    </Paper>
  );
};

const useStyles = makeStyles({
  paper: {
    width: "950px",
    margin: "0",
    padding: "50px",
    ["@media screen and (max-width: 576px)"]: {
      paddingTop: "40px",
      paddingLeft: "20px",
      paddingBottom: "40px",
      width: "100%",
    },
    ["@media screen and (max-width: 768px)"]: {
      height: "auto",
      width: "auto",
      paddingTop: "40px",
      paddingLeft: "20px",
      paddingBottom: "40px",
    }
  },
  textCol: {
    marginBottom: "16px",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: "16px",
    letterSpacing: "normal",
    lineHeight: "24px",
    fontWeight: "600",
    display: "block",
    boxSizing: "border-box",
    outline: "none 0px",
  },
  colcol: {
    marginBottom: "16px",
    color: "rgba(0, 0, 0, 0.38)",
    lineHeight: "20px",
    display: "block",
  },
  headcol: {
    marginBottom: "12px",
    letterSpacing: "normal",
    lineHeight: "20px",
    display: "block",
    boxSizing: "border-box",
    outline: "none 0px",
  },
  radio: {
    cursor: "pointer",
  },
  handler: {
    margin: "14px",
    flexDirection: "column",
  },
  users: {
    margin: "10px",
    fontSize: "20px",
  },
  formx: {
    margin: "0px",
    width: "100%",
    display: "flex",
  },
  icon: {
    marginTop: "0px",
    marginLeft: "30px",
    position: "absolute",
    left: "auto",
    backgroundColor: "#ddd",
    borderRadius: "2px",
    "@media screen and (max-width: 576px)": {
      visibility: "hidden",
    }
  },
  icontag: {
    padding: "0px",
    marginTop: "1px",
    "@media screen and (max-width: 576px)": {
      margin: "auto",
      visibility: "hidden",
    }
  },
  searchcol: {
    height: "30px",
    marginLeft: "30px",
    paddingLeft: "25px",
    fontSize: "19px",
    color: "#333",
    width: "256px",
    border: "1.5px solid #c7bebe",
    borderRadius: "5px",
    transition: "all 0.3s ease",
    // "@media screen and (max-width: 576px)": {
    //   width: "auto",
    //   height: "auto",
    //   padding: "10px",
    // }
  },
  forms: {
    position: "relative",
    alignItems: "center",
    margin: "0px",
  },
  selectinputs: {
    borderColor: "rgb(214, 217, 219)",
    borderRadius: "6px",
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "20px",
    marginLeft: "30px",
    height: "30px",
    width: "265px",
    // "@media screen and (max-width: 576px)": {
    //   height: "auto",
    //   width: "auto",
    //   padding: "10px",
    // }
  },
  btn: {
    marginTop: "20px",
    paddingLeft: "15px",
    paddingRight: "15px",
    fontSize: "14px",
    letterSpacing: "normal",
    justifyContent: "center",
    alignItems: "center",
    appearance: "none",
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "1px",
    boxSizing: "border-box",
    colorScheme: "light",
    cursor: "pointer",
    display: "inline-flex",
    fontWeight: "normal",
    height: "36px",
    outline: "none 0px",
    position: "relative",
    lineHeight: "20px",
    transition: "color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s, background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s",
    userSelect: "none",
    verticalAlign: "middle",
    backgroundColor: "rgb(235, 76, 76)",
    borderColor: "rgb(235, 76, 76)",
    color: "rgba(255, 255, 255, 0.87)",
    opacity: "0.2",
  },
  props: {
    paddingTop: "40px",
  },
  nameprops: {
    marginBottom: "16px",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: "16px",
    letterSpacing: "normal",
    lineHeight: "24px",
    fontWeight: "600",
    display: "block",
    boxSizing: "border-box",
  },
  spantext: {
    marginBottom: "16px",
    color: "rgba(0, 0, 0, 0.38)",
    fontSize: "14px",
    letterSpacing: "normal",
    lineHeight: "20px",
    display: "block",
  },
  btnbtns: {
    marginTop: "20px",
    paddingLeft: "10px",
    paddingRight: "10px",
    fontSize: "14px",
    alignItems: "center",
    borderRadius: "6px",
    borderStyle: "solid",
    boxSizing: "border-box",
    cursor: "pointer",
    fontWeight: "500",
    height: "36px",
    backgroundColor: "rgb(235, 76, 76)",
    borderColor: "rgb(235, 76, 76)",
    color: "rgba(255, 255, 255, 0.87)",
  },
  delmain: {
    paddingTop: "15px",
    paddingLeft: "24px",
    paddingRight: "24px",
    backgroundColor: "#ddd",
    width: "450px",
    height: "410px",
    justifyContent: "center",
    boxShadow: "rgb(0 0 0 / 8%) 0px 1px 4px",
    boxSizing: "border-box",
    borderRadius: "10px",
    position: "absolute",
    zIndex: "2",
    top: "40%",
    left: "55%",
    transform: "translate(-50%, -50%)",
    // "@media screen and (max-width: 576px)": {
    //   top: "46%",
    //   width: "250px",
    //   height: "390px",
    //   paddingTop: "0px",
    //   paddingLeft: "20px",
    //   alighItems: "center",
    //   justifyContent: "center",
    //   position: "absolute",
    // },
    ["@media screen and (max-width: 768px)"]: {
      top: "44%",
      width: "auto",
      height: "auto",
    }
  },
  delcon: {
    display: "flex",
    justifyContent: "space-between",
    
  },
  docmain: {
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: "16px",
    letterSpacing: "normal",
    lineHeight: "24px",
    fontWeight: "600",
    display: "block",
    boxSizing: "border-box",
    // "@media screen and (max-width: 576px)": {
    //   fontSize: "20px",
    //   paddingTop: "5px",
    // },
    "@media screen and (max-width: 768px)": {
      fontSize: "17px",
    }
  },
  xlm: {
    marginTop: "7px",
    marginBottom: "5px",
    cursor: "pointer",
    // "@media screen and (max-width: 576px)": {
    //   fontSize: "15px",
    //   padding: "3px",
    // },
  },
  sctn: {
    display: "block",
    fontSize: "18px",
    fontWeight: "500",
    // "@media screen and (max-width: 576px)": {
    //   fontSize: "10px",
    //   padding: "3px",
    //   width: "200px",
    // },
    "@media screen and (max-width: 768px)": {
      fontSize: "14px",
      width: "auto",
    }
  },
  deldel: {
    color: "rgba(0, 0, 0, 0.38)",
    fontSize: "15px",
    letterSpacing: "normal",
    lineHeight: "20px",
    display: "block",
    boxSizing: "border-box",
    // "@media screen and (max-width: 576px)": {
    //   fontSize: "13px",
    //   lineHeight: "15px",
    // }
  },
  lose: {
    position: "relative",
    paddingBottom: "5px",
    color: "rgba(0, 0, 0, 0.38)",
    margin: "5px",
    textDecoration: "none",
    // "@media screen and (max-width: 576px)": {
    //   fontSize: "10px",
    //   lineHeight: "20px",
    //   margin: "0",
    //   padding: "3px",
    // },
    "@media screen and (max-width: 768px)": {
      fontSize: "14px",
      padding: "0px",
    }
  },
  ulnum: {
    paddingLeft: "45px",
    paddingRight: "45px",
    fontSize: "15px",
    // "@media screen and (max-width: 576px)": {
    //   fontSize: "10px",
    //   paddingLeft: "30px",
    //   width: "auto",
    //   lineHeight: "15px",
    // },
    "@media screen and (max-width: 768px)": {
      width: "300px",
      paddingLeft: "38px",
      fontSize: "14px",
      lineHeight: "22px",
    },
  },
  delapi: {
      
    },
    deltext: {
    marginTop: "13px",
    height: "35px",
    backgroundColor: "#ddd",
    borderRadius: "7px",
    fontSize: "15px",
    width: "auto",
    // "@media screen and (max-width: 576px)": {
    //   width: "150px",
    // },
    },
  
});

export default SettingsPage;
