/**
 *
 * AddOrEditEntryModal
 *
 */

import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, Label, Input } from 'reactstrap';
import DatePicker from "react-datepicker";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function AddOrEditEntryModal({ onSaveClicked, onCancelClicked }) {

  const [mealName, setMealName] = useState("");
  const [calories, setCalories] = useState(0);
  const [date, setDate] = useState(new Date());

  return <Modal isOpen={true} toggle={() => { }}>
    <ModalHeader>Add Entry</ModalHeader>
    <ModalBody>
      <FormGroup>
        <Label for="mealName">Meal Name</Label>
        <Input value={mealName} onChange={(event) => setMealName(event.target.value)} type="text" id="mealName" />
      </FormGroup>

      <FormGroup>
        <Label for="calories">Calories</Label>
        <Input value={calories} onChange={(event) => setCalories(event.target.value)} type="number" min={0} id="calories" />
      </FormGroup>

      <FormGroup>
        <Label for="calories">Date</Label><br />
        <DatePicker
          className="ml-2"
          dateFormat="dd-MM-yyyy"
          selected={date}
          onChange={(date) => {
            setDate(date);
          }}
        />
      </FormGroup>

    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={() => onSaveClicked(mealName, calories, date.getTime())}>Save</Button>
      <Button onClick={() => onCancelClicked()}>Cancel</Button>
    </ModalFooter>
  </Modal>;
}

AddOrEditEntryModal.propTypes = {};

export default AddOrEditEntryModal;
