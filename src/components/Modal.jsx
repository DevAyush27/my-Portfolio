import React from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';

const Modal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <BootstrapModal
      show={!!project}
      onHide={onClose}
      centered
      size="lg"
      backdrop="static"
    >
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>{project.title}</BootstrapModal.Title>
      </BootstrapModal.Header>

      <BootstrapModal.Body style={{ maxHeight: '65vh', overflowY: 'auto' }}>
        <img
          src={project.image}
          alt={project.title}
          className="img-fluid rounded mb-3"
        />
        <p>{project.description}</p>

        {project.previewLink && project.previewLink !== '' && (
          <a
            href={project.previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-2"
          >
            Live Preview
          </a>
        )}
      </BootstrapModal.Body>

      <BootstrapModal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
};

export default Modal;
