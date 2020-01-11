import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const LoginLogoutModal = (props) => (
  <Modal open={props.isOpen} closeOnDocumentClick closeOnEscape closeOnDimmerClick closeOnPortalMouseLeave closeIcon
  onClose = {props.handleClose}>
    <Modal.Header textAlign="justified">Please Login Using the Google Account</Modal.Header>
    <Modal.Content image>
      {/* <Image wrapped size='medium' src='/images/avatar/large/rachel.png' /> */}
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <div class="g-signin2" data-onsuccess="onSignIn"></div>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default LoginLogoutModal