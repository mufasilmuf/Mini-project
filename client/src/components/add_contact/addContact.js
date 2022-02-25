import React, { useState } from "react";
import {
  TextField,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Snackbar,
} from "@mui/material";
import axios from "axios";

import "./addContact.css";

const AddContact = () => {
  const vertical = "top";
  const horizontal = "right";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [accountName, setAccountName] = useState("");
  const [storage, setStorage] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  var handleChangefirstName = (e) => {
    setFirstName(e.target.value);
  };

  var handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  var handleChangePhoneNo = (e) => {
    setPhoneNo(e.target.value);
  };

  var handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  var handleChangeAccountNo = (e) => {
    setAccountNo(e.target.value);
  };

  var handleChangeAccountName = (e) => {
    setAccountName(e.target.value);
  };

  var handleChangeStorage = (e) => {
    setStorage(e.target.value);
  };

  var handleClose = () => {
    setTimeout(() => {
      setShow(false);
    }, 4000);
  };

  var handleSubmit = async (e) => {
    e.preventDefault();

    const personDetails = {
      firstName,
      lastName,
      phoneNo,
      address,
      accountName,
      accountNo,
    };

    if (storage === "local") {
    } else if (storage === "DataBase") {
      await axios
        .post("http://localhost:8000/addData", personDetails)
        .then((response) => {
          setMessage(response.data.message);
          setShow(true);
          handleClose();
        });
    }

    setFirstName("");
    setLastName("");
    setPhoneNo("");
    setAddress("");
    setAccountName("");
    setAccountNo("");
    setStorage("");
  };

  return (
    <div className="add_contact">
      <form onSubmit={handleSubmit}>
        <div className="details">
          <label>Personal Details</label>
          <br />
          <TextField
            label="First Name"
            variant="outlined"
            type="text"
            className="input_feild"
            value={firstName}
            onChange={handleChangefirstName}
            required
          />
          <TextField
            label="Last Name"
            variant="outlined"
            type="text"
            className="input_feild"
            value={lastName}
            onChange={handleChangeLastName}
            required
          />
          <TextField
            label="Phone No"
            variant="outlined"
            type="number"
            className="input_feild"
            value={phoneNo}
            onChange={handleChangePhoneNo}
            required
          />
          <TextField
            label="Address"
            variant="outlined"
            type="text"
            className="input_feild"
            value={address}
            onChange={handleChangeAddress}
            required
          />
          <label>Account Details</label>
          <br />
          <TextField
            label="Account Holder Name"
            variant="outlined"
            type="text"
            className="input_feild"
            value={accountName}
            onChange={handleChangeAccountName}
            required
          />
          <TextField
            label="Account No"
            variant="outlined"
            type="number"
            className="input_feild"
            value={accountNo}
            onChange={handleChangeAccountNo}
            required
          />
        </div>
        <div className="select_option">
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="storage">Storage Medium</InputLabel>
            <Select
              labelId="storage"
              id="storage_medium"
              onChange={handleChangeStorage}
              value={storage}
              label="Storage Medium"
              className="input_feild"
            >
              <MenuItem value="local">Local</MenuItem>
              <MenuItem value="DataBase">Data Base</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="text-center m-3">
          <button className="btn btn-primary input_feild" type="submit">
            Submit
          </button>
        </div>
      </form>

      {/* Toster model */}
      <Snackbar
        message={message}
        open={show}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      />
    </div>
  );
};
export default AddContact;
