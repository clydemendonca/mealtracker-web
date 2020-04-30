/**
 *
 * MealtrackerModal
 *
 */

import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function MealtrackerModal({ title, message, onOkClicked }) {
  return <Modal isOpen={true} toggle={() => { }}>
    <ModalHeader>{title}</ModalHeader>
    <ModalBody>{message}</ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={() => onOkClicked()}>Ok</Button>
    </ModalFooter>
  </Modal>;
}

MealtrackerModal.propTypes = {};

export default MealtrackerModal;
