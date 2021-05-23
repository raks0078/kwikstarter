import React from "react";
import { Modal as MaterialUiModal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#008CD0",
    border: "5px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "400px",
    height: "450px",
  },

  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

interface IModalProps {
  isOpen: boolean;
  close: () => void;
  children: React.ReactElement;
}

const Modal = ({ isOpen, close, children }: IModalProps) => {
  const classes = useStyles();

  return (
    <MaterialUiModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isOpen}
      onClose={close}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={true}>{children}</Fade>
    </MaterialUiModal>
  );
};

export default Modal;
