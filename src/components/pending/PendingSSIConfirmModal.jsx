import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
} from "@mui/material";

const PendingSSIConfirmModal = ({
  open,
  handleClose,
  selectedAccount,
  onSave,
  type,
  user,
}) => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleSave = () => {
    const newCommentEntry = {
      date: new Date().toLocaleString(),
      user: user,
      text: newComment,
    };
    setComments([...comments, newCommentEntry]);
    setNewComment("");
    onSave(comments);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ backgroundColor: "#497380" }}>
        {type === "party"
          ? "Party"
          : type === "counterParty"
          ? "Counter Party"
          : ""}
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6" sx={{ marginTop: "20px" }}>
          Confirm / Sign-off CounterParty SSI
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={2}
          variant="outlined"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a new comment"
        />
      </DialogContent>
      <DialogActions>
        <Button
          sx={{ border: "1px solid #497380", color: "#497380" }}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          sx={{ border: "1px solid #497380", color: "#497380" }}
          onClick={() => setNewComment("")}
        >
          Reset
        </Button>
        <Button
          sx={{ backgroundColor: "#497380", color: "white" }}
          onClick={handleSave}
        >
          Confirm SSI
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PendingSSIConfirmModal;
