import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { borderLeft, margin } from "@mui/system";
import Box from '@mui/material/Box';

export default function Page() {
  return (
    <>
      <Card
        sx={{
          width: 1000,
          margin: 15,
          border: "1px dashed #D3D3D3",
          padding: "0 20px 20px",
        }}
      >
        <Typography sx={{display:"flex", justifyContent:"flex-end", marginTop:"25px", marginRight:"15px"}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-x-circle"
          color="#808080"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
        </Typography>
        {/* <CardMedia /> */}
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            align="center"
            margin={2}
            sx={{ fontWeight: "bold" }}
          >
            Upload your Documents
          </Typography>
          <Typography color="text.secondary" align="center" 
          sx={{ fontSize: {
            lg: 20,
            md: 15,
            sm: 10,
            xs: 2
          }}}
          >
            PDF, Word Documents, and images accepted. Documents will be
            intelligently classNameified into:Resumes, Receipts, invoices etc.
          </Typography>

          <Grid container marginTop="35px" columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid xs={4} sx={{ borderRight: "1px solid #D3D3D3" }}>
              <Typography align="center" marginBottom="5px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-send"
                  color="#808080"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </Typography>
              <Typography
                variant="body2"
                align="center"
                sx={{ fontWeight: "bold" }}
              >
                Manual Upload
              </Typography>
              <Typography
                variant="body2"
                align="center"
                color="text.secondary"
                marginTop="10px"
                marginLeft={2}

                sx={{ fontSize: {
                  lg: 15,
                  md: 10,
                  sm: 5,
                  xs: 2
                }}}
              >
                Drag and Drop files from your computer or
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#9F77EB",
                  textTransform: "none",
                  ml: 10,
                  mt: 3,
                  ":hover": {
                    bgcolor: "#9F77EB",
                    color: "white",
                  },
                }}
              >
                Choose Files
              </Button>
            </Grid>

            <Grid xs={4} sx={{ borderRight: "1px solid #D3D3D3"}}>
              <Typography align="center" marginBottom="5px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-code"
                  color="#808080"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </Typography>
              <Typography
                variant="body2"
                align="center"
                sx={{ fontWeight: "bold" }}
              >
                Use the API
              </Typography>

              <Grid container spacing={-4} ml={3} marginTop="10px">
                <Grid xs={5}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    Copy your
                  </Typography>
                </Grid>
                <Grid xs={2}>
                  <Typography align="center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-key"
                      color="#9F77EB"
                    >
                      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                    </svg>
                  </Typography>
                </Grid>
                <Grid xs={5}>
                  <Typography sx={{ color: "#9F77EB" }}>API Key</Typography>
                </Grid>
              </Grid>

              <Grid container spacing={-4} ml={3}>
                <Grid xs={5}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    Read the
                  </Typography>
                </Grid>
                <Grid xs={2}>
                  <Typography align="center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-book-open"
                      color="#9F77EB"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </Typography>
                </Grid>
                <Grid xs={5}>
                  <Typography sx={{ color: "#9F77EB" }}>API Docs</Typography>
                </Grid>
              </Grid>

              <Grid container spacing={-4} ml={3}>
                <Grid xs={5}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    View available
                  </Typography>
                </Grid>
                <Grid xs={2}>
                  <Typography align="center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-cpu"
                      color="#9F77EB"
                    >
                      <rect
                        x="4"
                        y="4"
                        width="16"
                        height="16"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect x="9" y="9" width="6" height="6"></rect>
                      <line x1="9" y1="1" x2="9" y2="4"></line>
                      <line x1="15" y1="1" x2="15" y2="4"></line>
                      <line x1="9" y1="20" x2="9" y2="23"></line>
                      <line x1="15" y1="20" x2="15" y2="23"></line>
                      <line x1="20" y1="9" x2="23" y2="9"></line>
                      <line x1="20" y1="14" x2="23" y2="14"></line>
                      <line x1="1" y1="9" x2="4" y2="9"></line>
                      <line x1="1" y1="14" x2="4" y2="14"></line>
                    </svg>
                  </Typography>
                </Grid>
                <Grid xs={5}>
                  <Typography sx={{ color: "#9F77EB" }}>
                    Integrations
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid xs={4}>
              <Typography align="center" marginBottom="5px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-mail"
                  color="#808080"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </Typography>
              <Typography
                variant="body2"
                align="center"
                sx={{ fontWeight: "bold" }}
              >
                Attach in an email
              </Typography>
              <Typography
                variant="body2"
                align="center"
                color="text.secondary"
                marginTop="10px"
                marginLeft={3}

                sx={{ fontSize: {
                  lg: 15,
                  md: 10,
                  sm: 5,
                  xs: 2
                }}}
              >
                Send documents 1 by 1 or in bulk to the email for this workspace
              </Typography>
              <Typography
                variant="body2"
                align="center"
                marginTop="10px"
                sx={{ color: "#9F77EB" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-copy"
                  style={{ marginRight: "10px" }}
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                Copy email address
              </Typography>
            </Grid>
          </Grid>
         
        </CardContent>
      </Card>
    </>
  );
}
