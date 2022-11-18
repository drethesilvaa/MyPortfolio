import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

export default function AsDialog({
  open,
  close,
  children,
  title,
  topRight,
  actions,
}) {
  return (
    <>
      <Dialog
        open={open}
        onClose={close}
        fullWidth={true}
        maxWidth="xl"
        maxHeight="xl"
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={close}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {title}
            </Typography>
            {topRight}
          </Toolbar>
        </AppBar>
        <DialogContent>{children}</DialogContent>
        <DialogActions>{actions}</DialogActions>
      </Dialog>
    </>
  );
}
