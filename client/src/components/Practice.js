import React from "react";
import Box from "@mui/material/Box";
import { Button, Stack, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Practice = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="90vh"
    >
      <Box
        width="300px"
        height="300px"
        alignItems="center"
        border="1 solid grey"
        borderRadius="7px"
        boxShadow="10"
      >
        <Typography
          variant="h4"
          textAlign="center"
          color="white"
          backgroundColor="primary.dark"
          borderRadius="7px"
        >
          Join a Chat
        </Typography>
        <br />
        <Stack
          component="form"
          spacing={2}
          autoComplete="off"
          alignItems="center"
          // marginLeft="50px"
        >
          <TextField
            id="outlined-basic"
            label="Enter Your Name"
            variant="outlined"
            //   textAlign="center"
          />

          <TextField id="outlined-basic" label="Room Code" variant="outlined" />

          <Button variant="contained" backgroundColor="secondary" size="large">
            Join a Room
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Practice;
