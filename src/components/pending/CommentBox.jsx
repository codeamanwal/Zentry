import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const CommentsBox = ({ title, commentsData, user, isActive }) => {
  const [comments, setComments] = useState(commentsData);
  const [newComment, setNewComment] = useState("");

  const handleReset = () => {
    setNewComment("");
  };

  const handleSave = () => {
    const newCommentEntry = {
      date: new Date().toLocaleString(),
      user: user,
      text: newComment,
    };
    setComments([...comments, newCommentEntry]);
    setNewComment("");
  };

  return (
    <Box
      sx={{
        flex: 1,
        padding: "5px",
        border: `2px solid ${isActive ? "#84cc16" : "red"}`,
        margin: "10px 0",
        gridTemplateColumns: {
          md: "100px 200px",
          sm: "80px 160px",
        },
        gridTemplateRows: {
          md: "50px 120px",
          sm: "80px 160px",
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Box sx={{ marginBottom: "10px" }}>
        {comments.map((comment, index) => (
          <Typography key={index} variant="body2">
            {comment.date} [{comment.user}]: {comment.text}
          </Typography>
        ))}
      </Box>
      {isActive && (
        <div className="flex">
          <TextField
            fullWidth
            multiline
            rows={2}
            variant="outlined"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a new comment"
          />
          <Box
            sx={{ display: "flex", marginLeft: "5px", flexDirection: "column"}}
          >
            <Button
              variant="outlined"
              onClick={handleReset}
              sx={{ marginBottom: "5px" }}
            >
              Reset
            </Button>
            <Button variant="contained" onClick={handleSave}>
              Save
            </Button>
          </Box>
        </div>
      )}
    </Box>
  );
};

export default CommentsBox;
