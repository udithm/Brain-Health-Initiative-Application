import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export const ReferedView = ({shouldOpen, data, handleClose})  => {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   React.useEffect(() => {
//     setOpen(shouldOpen)
//   }, [data, shouldOpen]);

  return (
    <div>
      <Modal
        open={shouldOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           {data.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {data.role}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
