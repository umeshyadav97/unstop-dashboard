import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Button from "@mui/material/Button"
import AdbIcon from "@mui/icons-material/Adb";
import Drawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Grid, Link } from "@mui/material";
import { useNavbarController } from "./navbar.controller";
import { useRouter } from "next/router";
import Image from "next/image";
import DashboardImage from "../../assets/images/dashboard.svg";
import AssesmentImage from "../../assets/images/assesment.svg";
import LibraryImage from "../../assets/images/library.svg";
import AdminImage from "../../assets/images/admin.svg";

const pages = [
  {
    name: "Dashboard",
    link: "/home",
    image: DashboardImage,
  },
  {
    name: "Assesment",
    link: "/assesment",
    image: AssesmentImage,
  },
  {
    name: "My library",
    link: "/my-library",
    image: LibraryImage,
  },
];

const drawerWidth = 240;

function NavBar() {
  const { open, theme, classes, handleDrawerOpen, handleDrawerClose, navRef } =
    useNavbarController();
  const router = useRouter();

  return (
    <React.Fragment>
      <Grid item>
        <Grid item pt={4} pl={2}>
          {pages.map((item) => (
            <Grid item key={item.link} py={2.5}>
              <Grid item display="flex" justifyContent="center" pb={1}>
                <Image src={item.image} height={20} width={20} alt="image" />
              </Grid>

              <Grid item display="flex" justifyContent="center">
                <Link
                  sx={{
                    textDecoration: "none",
                    variant: "inherit",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                  href={item.link}
                >
                  {item.name}
                </Link>
              </Grid>
            </Grid>
          ))}
          <Grid
            item
            mx={2}
            sx={{
              borderBottom: "1px dashed var(--System-Stroke, #BACBD5)",
            }}
          ></Grid>
          <Grid item pt={2} display="flex" justifyContent="center">
            <Typography
              sx={{
                border: "1px solid #D63500",
                borderRadius: "8px",
                background: "#FBEBEA",
                width: "50px",
                fontSize: "10px",
                fontWeight: "500",
                color: "#D63500",
                paddingLeft: "8px",
              }}
            >
              Admin
            </Typography>
          </Grid>
          <Grid item pt={2}>
            <Grid item display="flex" justifyContent="center">
              <Image src={AdminImage} height={20} width={20} alt="image" />
            </Grid>
            <Grid item display="flex" justifyContent="center">
              <Typography
                sx={{ fontSize: "14px", fontWeight: "500", color: "#1C4980" }}
              >
                Round <br />
                Status
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleDrawerOpen}
            color={theme.palette.primary.main}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            sx={{
              width: 0,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <IconButton
              sx={{ display: "flex", justifyContent: "end" }}
              onClick={handleDrawerClose}
            >
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>

            <Divider />
            <List>
              {pages.map((text, idx) => (
                <ListItem key={idx} disablePadding>
                  <ListItemButton>
                    <Link href={text.link} sx={{ textDecoration: "underline" }}>
                      <ListItemText primary={text.name} />
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Drawer>
        </Box>
      </Grid>
    </React.Fragment>
  );
}
export default NavBar;
