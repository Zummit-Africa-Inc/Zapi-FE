import { useState } from "react";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import { removeEndpoint } from "../redux/slices/userSlice";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import { Paper } from "@mui/material";
import { useAppDispatch, useAppSelector, useFormInputs, useHttpRequest } from "../hooks";
import { Spinner } from "../assets";
import { removeApi } from "../redux/slices/apiSlice";

// const core_url = import.meta.env.VITE_CORE_URL
const core_url = "VITE_CORE_URL";

const SettingsPage: React.FC = () => {
  const [status, setStatus] = useState("");
  const [popup, setPop] = useState(false);
  const { error, loading, sendRequest } = useHttpRequest();
  const { id } = useParams();
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useAppDispatch()

  const cookies = new Cookies();
  const profileId = cookies.get("profileId");
  // const [delete, setDelete] = useState("")
  let payload : object;

  console.log(id)

  const handleClickDelete = () => {
    setPop(!popup);
  };

  const closePopup = () => {
    setPop(false);
  };
  function onChangeValue(event: any) {
    setStatus(event.target.value);
  }
  console.log("okkk", status);

  const handleDeleteApi = async (e: any) => {
    e.preventDefault();
    const headers = { 'Content-Type': 'application/json'}
    try {
      const data = await sendRequest(
        `/api/${id}?profileId=${profileId}`,
        "del",
        core_url, payload, headers
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
          Transfer ownership of this API to another RapidAPI user or team
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
                    className={classes.searchcol}
                    placeholder="Search RapidAPI users"
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
      <span className={classes.spantext}>
        Permanently deleting this API project will remove it from the RapidAPI
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
            </div>
            <hr />

            <button onClick={handleDeleteApi} className={classes.buttn}>
            {loading ? <Spinner /> : "Delete"}
            </button>
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
    marginTop: "20px",
    padding: "2rem 2rem",
    "@media screen and (max-width: 576px)": {
      paddingTop: "40px",
      paddingLeft: "20px",
      paddingBottom: "40px",
      width: "100%",
    },
    "@media screen and (max-width: 768px)": {
      height: "auto",
      width: "auto",
      paddingTop: "20px",
      paddingLeft: "20px",
      paddingBottom: "40px",
    }
  },
  textCol: {
    padding: "0px",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: "28px",
  },
  colcol: {
    color: "rgb(130, 120, 120)",
    paddingTop: "15px",
    paddingBottom: "15px",
    fontWeight: "500",
  },
  headcol: {
    fontSize: "18px",
    marginBottom: "12px"
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
    "@media screen and (max-width: 576px)": {
      width: "auto",
      height: "auto",
      padding: "10px",
    }
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
    width: "265px",
    "@media screen and (max-width: 576px)": {
      height: "auto",
      width: "auto",
      padding: "10px",
    }
  },
  btn: {
    fontSize: "16px", 
    boxSizing: "border-box",
    fontWeight: "500",
    fontFamily: "'Gill Sans', sans-serif",
    transition: "color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s",
    alignItems: "center",
    width: "auto",
    height: "40px",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "15px",
    padding: "5px",
    backgroundColor: "rgb(239, 29, 29)",
    borderColor: "rgb(243, 104, 104)",
    opacity: "0.4",
  },
  props: {
    paddingTop: "15px",
  },
  nameprops: {
    marginBottom: "16px",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: "24px",
    letterSpacing: "normal",
    lineHeight: "28px",
    outline: "none 0px",
  },
  spantext: {
    margin: "0px",
    color: "rgba(0, 0, 0, 0.38)",
    fontSize: "20px",
    letterSpacing: "normal",
    lineHeight: "40px",
  },
  btnbtns: {
    fontSize: "16px",
    margin: "10px", 
    boxSizing: "border-box",
    fontWeight: "500",
    fontFamily: "'Gill Sans', sans-serif",
    transition: "color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s",
    alignItems: "center",
    borderRadius: "9px",
    width: "auto",
    height: "40px",
    padding: "5px",
    cursor: "pointer",
    marginTop: "10px",
    marginBottom: "10px",
    backgroundColor: "rgb(239, 29, 29)",
    borderColor: "rgb(243, 104, 104)",
    opacity: "0.9",
  },
  delmain: {
    paddingTop: "15px",
    paddingLeft: "24px",
    backgroundColor: "#ddd",
    boxSizing: "border-box",
    borderRadius: "10px",
    position: "absolute",
    width: "550px",
    top: "38%",
    left: "55%",
    transform: "translate(-50%, -50%)",
    "@media screen and (max-width: 576px)": {
      top: "23%",
      width: "auto",
      height: "340px",
      paddingTop: "0px",
      paddingLeft: "20px",
      alighItems: "center",
      justifyContent: "center",
      position: "absolute",
    },
    "@media screen and (max-width: 768px)": {
      top: "25%",
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
    fontSize: "26px",
    fontWeight: "600",
    "@media screen and (max-width: 576px)": {
      fontSize: "20px",
      paddingTop: "5px",
    },
    "@media screen and (max-width: 768px)": {
      fontSize: "17px",
    }
  },
  xlm: {
    fontSize: "15px",
    fontWeight: "600",
    margin: "10px",
    cursor: "pointer",
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    "@media screen and (max-width: 576px)": {
      fontSize: "15px",
      padding: "3px",
    },
  },
  sctn: {
    display: "block",
    width: "500px",
    fontSize: "18px",
    fontWeight: "500",
    "@media screen and (max-width: 576px)": {
      fontSize: "10px",
      padding: "3px",
      width: "200px",
    },
    "@media screen and (max-width: 768px)": {
      fontSize: "14px",
      width: "auto",
    }
  },
  deldel: {
    lineHeight: "30px",
    "@media screen and (max-width: 576px)": {
      fontSize: "17px",
      lineHeight: "25px",
    }
  },
  lose: {
    position: "relative",
    paddingBottom: "40px",
    margin: "5px",
    textDecoration: "none",
    "@media screen and (max-width: 576px)": {
      fontSize: "15px",
      lineHeight: "20px",
      margin: "0",
      padding: "3px"
    },
    "@media screen and (max-width: 768px)": {
      fontSize: "14px",
      padding: "0px",
    }
  },
  ulnum: {
    display: "block",
    paddingTop: "5px",
    paddingLeft: "70px",
    lineHeight: "30px",
    "@media screen and (max-width: 576px)": {
      fontSize: "14px",
      paddingLeft: "30px",
      width: "auto",
      lineHeight: "18px",
    },
    "@media screen and (max-width: 768px)": {
      width: "300px",
      paddingLeft: "38px",
      fontSize: "14px",
      lineHeight: "22px",

    }
  },
  buttn: {
    boxSizing: "border-box",
    fontSize: "20px",
    fontWeight: "500",
    fontFamily: "'Gill Sans', sans-serif",
    transition: "color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s",
    alignItems: "center",
    borderRadius: "9px",
    width: "100px",
    height: "40px",
    cursor: "pointer",
    marginLeft: "80%",
    backgroundColor: "rgb(239, 29, 29)",
    borderColor: "rgb(243, 104, 104)",
    opacity: "0.9",
    "@media screen and (max-width: 576px)": {
      marginLeft: "auto",
      height: "30px",
    },
    "@media screen and (max-width: 768px)": {
      marginLeft: "auto",
    }
  }
});

export default SettingsPage;
