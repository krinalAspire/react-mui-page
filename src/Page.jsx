import React, { useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

export default function Page() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0, // Extra small devices (portrait phones)
        sm: 960, // Small devices (landscape phones)
        md: 1360, // Medium devices (tablets)
        lg: 1440, // Large devices (desktops)
        xl: 1920, // Extra large devices (large desktops)
      },
    },
  });

  const handleEmailCopy = () => {
    const emailAddress = "example@example.com"; // Replace with the email address you want to copy

    navigator.clipboard
      .writeText(emailAddress)
      .then(() => {
        console.log("Email address copied to clipboard:", emailAddress);
      })
      .catch((error) => {
        console.error("Failed to copy email address:", error);
      });
  };

  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Process the uploaded file here
    console.log(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Card
          sx={{
            margin: {
              xl: "auto",
              lg: "auto",
              md: "auto",
              sm: "auto",
              xs: "auto",
            },
            width: {
              xl: "auto",
              lg: "auto",
              md: "auto",
              sm: "auto",
              xs: "auto",
            },
            height: {
              xl: "71vh",
              lg: "72vh",
              md: "67vh",
              sm: "67vh",
              xs: "80vh",
            },
            borderRadius: "5px",
            marginTop: {
              xs: "2vh",
              sm: "2vh",
              md: "2vh",
              lg: "2vh",
              xl: "2vh",
            },
            border: "1px dashed #D3D3D3",
            overflow: {
              xs: "auto",
              sm: "hidden",
              md: "hidden",
              lg: "hidden",
              xl: "hidden",
            },
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              sx={{
                marginTop: { md: "25px", lg: "30px", xl: "40px" },
                marginRight: { md: "30px", lg: "35px", xl: "40px" },
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x-circle"
                color="#868686"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            </Button>
          </Box>

          <CardContent>
            <Box
              sx={{
                marginTop: { xl: "12vh", lg: "9vh", md: "2.56vh", sm: "2vh" },
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
                margin={{ xl: 2, lg: 2 }}
                sx={{
                  fontWeight: "600",
                  fontFamily: "Poppins",
                }}
              >
                Upload your Documents
              </Typography>
              <Typography
                align="center"
                sx={{
                  fontSize: "0.95rem",
                  fontFamily: "Heebo",
                  color: "rgba(43, 43, 43, 0.80)",
                }}
              >
                PDF, Word Documents, and images accepted. Documents will be
                intelligently classNameified into:Resumes, Receipts, invoices
                etc.
              </Typography>

              <Grid
                container
                columns={{ xs: 4, sm: 12, md: 12, lg: 12, xl: 12 }}
                sx={{ padding: { xl: 4, lg: 4, md: 3 } }}
              >
                <Grid
                  xs={4}
                  sx={{
                    borderRight: "1px solid #D3D3D3",
                    marginTop: { xs: "4vh", sm: "2.6vh" },
                    padding: "0px 20px",
                  }}
                >
                  <Typography align="center" marginBottom="5px">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-send"
                      color="#868686"
                      transform="rotate(270)"
                    >
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "600", fontFamily: "Poppins" }}
                  >
                    Manual Upload
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    marginTop="10px"
                    sx={{
                      color: "rgba(43, 43, 43, 0.80)",
                      fontSize: {
                        xl: 15,
                        lg: 15,
                        md: 13,
                        sm: 10,
                        xs: 10,
                      },
                      fontFamily: "Heebo",
                    }}
                  >
                    Drag and Drop files from your computer or
                  </Typography>
                  <Typography align="center">
                    <Box>
                      <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleFileUpload}
                      />
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#9F77EB",
                          textTransform: "none",
                          fontSize: "1rem",
                          fontFamily: "Heebo",
                          fontWeight: "500",
                          borderRadius: "5px",
                          Button: {
                            size: {
                              xs: "small",
                              sm: "small",
                              md: "medium",
                              lg: "large",
                              xl: "large",
                            },
                          },
                          mt: 3,
                          ":hover": {
                            bgcolor: "#9F77EB",
                            color: "white",
                          },
                        }}
                        onClick={handleButtonClick}
                      >
                        Choose Files
                      </Button>
                    </Box>
                  </Typography>
                </Grid>

                <Grid
                  xs={4}
                  sx={{
                    borderRight: "1px solid #D3D3D3",
                    marginTop: { xs: "4vh", sm: "2.6vh" },
                    padding: "0px 20px",
                  }}
                >
                  <Typography align="center" marginBottom="5px">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-code"
                      color="#868686"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "600", fontFamily: "Poppins" }}
                  >
                    Use the API
                  </Typography>

                  <Grid container spacing={-4} ml={2} marginTop="10px">
                    <Grid xs={5}>
                      <Typography
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          fontSize: {
                            xl: 15,
                            lg: 15,
                            md: 13,
                            sm: 10,
                            xs: 10,
                          },
                          fontFamily: "Heebo",
                          color: "rgba(43, 43, 43, 0.80)",
                        }}
                      >
                        Copy your
                      </Typography>
                    </Grid>
                    <Grid xs={3}>
                      <Typography align="center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
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
                    <Grid
                      xs={4}
                      sx={{
                        fontSize: {
                          xl: 15,
                          lg: 15,
                          md: 13,
                          sm: 10,
                          xs: 10,
                        },
                        fontFamily: "Heebo",
                        fontWeight: "600",
                      }}
                    >
                      <Link
                        to={"#"}
                        style={{ color: "#9E77EB", textDecoration: "none" }}
                      >
                        API Key
                      </Link>
                    </Grid>
                  </Grid>

                  <Grid container spacing={-4} ml={2}>
                    <Grid xs={5}>
                      <Typography
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          fontSize: {
                            xl: 15,
                            lg: 15,
                            md: 13,
                            sm: 10,
                            xs: 10,
                          },
                          fontFamily: "Heebo",
                          color: "rgba(43, 43, 43, 0.80)",
                        }}
                      >
                        Read the
                      </Typography>
                    </Grid>
                    <Grid xs={3}>
                      <Typography align="center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
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
                    <Grid
                      xs={4}
                      sx={{
                        fontSize: {
                          xl: 15,
                          lg: 15,
                          md: 13,
                          sm: 10,
                          xs: 10,
                        },
                        fontFamily: "Heebo",
                        fontWeight: "600",
                      }}
                    >
                      <Link
                        to={"#"}
                        style={{ color: "#9E77EB", textDecoration: "none" }}
                      >
                        API Docs
                      </Link>
                    </Grid>
                  </Grid>

                  <Grid container spacing={-4} ml={2}>
                    <Grid xs={5}>
                      <Typography
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          fontSize: {
                            xl: 15,
                            lg: 15,
                            md: 13,
                            sm: 10,
                            xs: 10,
                          },
                          fontFamily: "Heebo",
                          color: "rgba(43, 43, 43, 0.80)",
                        }}
                      >
                        View available
                      </Typography>
                    </Grid>
                    <Grid xs={3}>
                      <Typography align="center" variant="body2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
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
                    <Grid
                      xs={4}
                      sx={{
                        fontSize: {
                          xl: 15,
                          lg: 15,
                          md: 13,
                          sm: 10,
                          xs: 10,
                        },
                        fontFamily: "Heebo",
                        fontWeight: "600",
                      }}
                    >
                      <Link
                        to={"#"}
                        style={{ color: "#9E77EB", textDecoration: "none" }}
                      >
                        Integrations
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  xs={4}
                  sx={{
                    marginTop: { xs: "20px", sm: "15px", padding: "0px 20px" },
                  }}
                >
                  <Typography align="center" marginBottom="5px">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-mail"
                      color="#868686"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontFamily: "Poppins", fontWeight: "600" }}
                  >
                    Attach in an email
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    marginTop="10px"
                    marginLeft={3}
                    sx={{
                      fontSize: {
                        xl: 15,
                        lg: 15,
                        md: 13,
                        sm: 10,
                        xs: 10,
                      },
                      fontFamily: "Heebo",
                      color: "rgba(43, 43, 43, 0.80)",
                    }}
                  >
                    Send documents 1 by 1 or in bulk to the email for this
                    workspace
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    marginTop="15px"
                    sx={{
                      color: "#9F77EB",
                      cursor: "pointer",
                      fontFamily: "Heebo",
                      fontWeight: "600",
                      fontSize: {
                        xl: 15,
                        lg: 15,
                        md: 13,
                        sm: 10,
                        xs: 10,
                      },
                    }}
                    onClick={handleEmailCopy}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-copy"
                      style={{ marginRight: "10px" }}
                    >
                      <rect
                        x="9"
                        y="9"
                        width="13"
                        height="13"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    Copy email address
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </ThemeProvider>
    </>
  );
}
