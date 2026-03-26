import Modal from "@/app/components/modal";
import { Form } from "./form";
import { useEffect } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
  }

const FormModal = ({ isOpen, onClose }: ModalProps) => {

    useEffect(() => {
        const handler = () => onClose();
        window.addEventListener("close-modal", handler);
        return () => window.removeEventListener("close-modal", handler);
      }, [onClose]);

    return <Modal isOpen={isOpen} onClose={onClose}>
        <Form />
    </Modal>

};

export default FormModal;