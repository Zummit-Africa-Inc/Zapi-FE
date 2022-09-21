import { useState } from "react";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from "@mui/styles";


 const Settings = () => {
    // const classes = useStyles()
    
  const [status, setStatus] = useState("");

  function onChangeValue(event) {
    setStatus(event.target.value);
  }
  console.log("okkk", status);

  return (
    <section className="set-col">
      <div className="text-col">
        <h3>Transfer Ownership</h3>
      </div>
      <div className="col-col">
        <span>
          Transfer ownership of this API to another RapidAPI user or team
        </span>
      </div>
      <div className="col-4">
        <h3>Transfer to</h3>
      </div>

      <div>
        <div onChange={onChangeValue}>
          <div className="name-handler">
            <input
              id="gender"
              type="radio"
              value="User"
              name="User"
              checked={status === "User"}
            />
            <label>User</label>
          </div>
          <div>
            <input
              id="gender"
              type="radio"
              value="Team"
              name="Team"
              checked={status === "Team"}
            />
            <label>Team</label>
          </div>

          {status === "User" ? (
            <div className="form-outer">
              <div className="container">
                <div className="form">
                  <span className="icon">
                    <SearchIcon className="icon2" />{" "}
                  </span>
                  <input
                    id="input-input"
                    className="search-col"
                    placeholder="Search RapidAPI users"
                  />
                </div>
              </div>
            </div>
          ) : status === "Team" ? (
            <div className="input-box-box">
              <select className="select-box">
                <option value="" className="select-box" placeholder="Select a team...">Select a team...
                  
                </option>
                <option className="none-name">None</option>
              </select>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <button className="button-1">Transfer Ownership</button>

      <div className="name-pro">
        <h3 className="name-col">Delete API Project</h3>
      </div>
      <span className="more-text">
        Permanently deleting this API project will remove it from the RapidAPI
        Hub <br />
        Listing, will destroy your team's data from Requests, Testing and
        Descriptions. <br /> This action is not reversible
      </span>
      <br />
      <button>Delete API Project</button>



      {/* <form className="del-col">
        <div className="del-con1">
          <span className="doc">Delete API Project
          </span>
        </div>
        <button className="butt-butt"></button>

        <div className="del-del">
          <span className="sue-del">
          Are you sure you want to permanentely 
          delete this API Project?
          <br/>
          This action CANNOT be undone.
          </span>
        </div>
        <br/>

        <div className="lose-del">
          <span className="sue-del">
            You will permanentely lose: 
            <ul>
              <li>
                Your API subscribers (1)
              </li>
              <li>
                Your API data & analysis
              </li>
              <li>
                Your API documentation
              </li>
              <li>
                Any data from RapidAPI Testing
              </li>
              <li>
                Any data from RapidAPI Requests (previously known as Paw)
              </li>
            </ul>
            <div className="paw-paw">
              <span className="paw-name">
                Type this API project name "Bayo" to confirm the deletion:
              </span>
              <br/>
              <div className="spell-col">
              <input className="spells" value="Bayo" placeholder="Bayo"/>
              </div>
            </div>
          </span>
        </div>
        <hr/>

        <button className="buttons-1">Delete API Project</button>
        </form> */}
    </section>
  );
};


// const useStyles = makeStyles({
//     setcol: {
//         margin: "50px",
//         padding: "0",
//         boxSizing: "border-box"
//     },
//     textcol: {
//         marginBottom: "16px",
//         color: "rgba 0, 0, 0, 0.87",
//         fontSize: "16px",
//         letterSpacing: "normal",
//         lineHeight: "24px",
//         fontFamily: "Inter, -apple-system, BlinkMacSystemFont, "Avenir Next", Avenir, Helvetica, sans-serif",
//         fontWeight: "600",
//         display: "block",
//         boxSizing: "border-box"
//     },
//     colcol: {
//         marginBottom: "16px",
//         color: "rgba 0, 0, 0, 0.38",
//         fontSize: "14px",
//         letterSpacing: "normal",
//         lineHeight: "20px",
//         fontFamily: "Inter, -apple-system, BlinkMacSystemFont, "Avenir Next", Avenir, Helvetica, sans-serif",
//         display: "block",
//         boxSizing: "border-box",
//       },
// })


export default Settings;