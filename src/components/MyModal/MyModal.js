import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class MyModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: true
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Welcome to Memory Game</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>Instructions</h5>
                        <ul>
                            <li>As you click on images, your score gets incremented</li>
                            <li>
                                As soon as you click an image for the second time, your
                                score gets reset
                            </li>
                            <li>Try to remember which images you have clicked on!</li>
                            <li>To restart the game, refresh the page</li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleClose}>
                            Start the game
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default MyModal;
