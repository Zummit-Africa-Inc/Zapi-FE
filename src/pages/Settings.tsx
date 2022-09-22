import { useState } from "react";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from "@mui/styles";


 const Settings:React.FC = () => {
    
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
              className="radio"
              name="User"
              checked={status === "User"}
            />
            <label className="users">User</label>
          </div>
          <div>
            <input
              id="gender"
              type="radio"
              className="radio"
              value="Team"
              name="Team"
              checked={status === "Team"}
            />
            <label className="users">Team</label>
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
            <div className="form">
              <select className="select-inputs">
                <option value="1" disable selected hidden >
                    Select a team...
                  </option>
                <option id="select-inputs" ><button id="ishidden">None</button></option>
                
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



     
    </section>
  );
};



export default Settings;