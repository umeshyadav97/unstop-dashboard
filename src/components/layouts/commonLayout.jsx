import React from "react";
import { Box, Grid } from "@mui/material";
import { useStyles } from "./commonLayoutStyles";
import NavBar from "../navBar";

function CommonLayout({ children }) {
  const styles = useStyles();

  return (
    <Box sx={styles.main}>
      <Grid
        container
        spacing={2}
        style={{ background: "#F6F8FA", height: "102vh" }}
      >
        <Grid item xs={1.5} sx={{ backgroundColor: "#fff" }}>
          <NavBar />
        </Grid>
        {
          <Grid item xs={10.5}>
            {children}
          </Grid>
        }
      </Grid>
      {/* <Footer></Footer> */}
    </Box>
  );
}

export default CommonLayout;
