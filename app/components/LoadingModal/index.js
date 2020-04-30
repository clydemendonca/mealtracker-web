/**
 *
 * LoadingModal
 *
 */

import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function LoadingModal({ message }) {
  return <Modal isOpen={true} toggle={() => { }}>
    <ModalBody className="text-center font-italic">{message}</ModalBody>
  </Modal>;
}

LoadingModal.propTypes = {};

export default LoadingModal;
