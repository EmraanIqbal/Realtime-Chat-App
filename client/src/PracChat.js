import {
  Avatar,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CallSharpIcon from "@mui/icons-material/CallSharp";
import Divider from "@mui/material/Divider";
import InfoIcon from "@mui/icons-material/Info";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { deepOrange, deepPurple } from "@mui/material/colors";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const PracChat = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="90vh"
    >
      <Box
        width="300px"
        height="400px"
        alignItems="center"
        border="1 solid grey"
        borderRadius="7px"
        boxShadow="10"
      >
        <Box
          borderRadius="7px"
          // backgroundColor="primary.dark"
          display="flex"
          justifyContent="space-around"
        >
          <Box mt="6px">
            <ArrowBackIcon color="primary" />
          </Box>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{
              bgcolor: deepOrange[500],
              width: 27,
              height: 27,
              mt: "5",
              margin: "4px 0px 5px 4px",
            }}
          ></Avatar>
          <Typography
            variant="h6"
            textAlign="center"
            color="black"
            //   margin="8px 15px 4px 50px"
          >
            Emraan Iqbal
          </Typography>
          <Stack direction="row" spacing={1} mt="5px">
            <CallSharpIcon color="primary" mt="10" />
            <VideoCallIcon color="primary" />
            <InfoIcon color="primary" />
          </Stack>
        </Box>
        <Divider />
        <Stack spacing={5}>
          <TextField
            id="outlined-basic"
            // label="Enter Your Name"
            variant="outlined"
            //   textAlign="center"
          />

          <TextField
            id="outlined-basic"
            label="Enter Your Name"
            variant="outlined"
            //   textAlign="center"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default PracChat;
