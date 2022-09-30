import { useState } from "react";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from "@mui/styles";


 const Settings:React.FC = () => {
    
  const [status, setStatus] = useState("");
  const [popup, setPop] = useState(false);
  // const [delete, setDelete] = useState("")

  const handleClickDelete = () => {
    setPop(!popup);

  }

  const closePopup = () => {
    setPop(false);
  }

  // const handleDeleteApi = () => {
  //   setDelete(!delete)
  // }

  function onChangeValue(event:any) {
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
              disabled={true}
              checked={status === "User"}
            />
            <label className="users">User</label>
          </div>
          <div className="name-handler">
            <input
              id="gender"
              type="radio"
              className="radio"
              value="Team"
              name="Team"
              disabled={true}
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
              <div className="form">
              <select className="select-inputs">
                <option value="1" disabled selected hidden >
                    Select a team...
                </option>
                <option id="select-inputs" disabled={true} ><button id="ishidden">None</button></option>
                
              </select>
              </div>
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
      <div>

      <button onClick={handleClickDelete} data-selected={false} type="button" className='kvng1'>
        <div className='kin101'>Delete API Project</div>
      </button>


     {popup?
      <form className="del-main">
          <div className="del-con1">
            <span className="doc">Delete API Project</span>
            <span onClick={closePopup} className='xlm'> X </span>
          </div>

          <div className="del-del">
            <span className="sue-del">
              Are you sure you want to permanentely delete this API Project?
              <br />
              This action CANNOT be undone.
            </span>
          </div>
        
          <div className="lose-del">
            <span className="sue-del">
              You will permanentely lose:
              <ul className="ul-num">
                <li>Your API subscribers (1)</li>
                <li>Your API data & analysis</li>
                <li>Your API documentation</li>
                <li>Any data from RapidAPI Testing</li>
                <li>
                  Any data from RapidAPI Requests (previously known as Paw)
                </li>
              </ul>
              <div className="paw-paw">
                <span className="paw-name">
                  Type this API project name "Bayo" to confirm the deletion:
                </span>
                <br />
                <div className="spell-col">
                  <input className="spells" placeholder="Bayo" />
                </div>
              </div>
            </span>
          </div>
          <hr />

          <button  className="buttons-1">Delete API Project</button>
        </form>
        :""}

    </div>
    </section>
    
    
  );
};



export default Settings;
