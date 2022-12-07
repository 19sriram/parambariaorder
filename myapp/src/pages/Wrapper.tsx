import React from "react";
import { Container, Grid, Paper, styled } from "@mui/material";
import Header from "./Header";
import { Item } from "../utils/Item";
import MediaCard from "../components/Card";
import SimpleBottomNavigation from "../components/BottomNavigation";
import SwipeableEdgeDrawer from "../components/Drawer";

const Wrapper = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Header />
          <Grid item xs={4}>
            <MediaCard />
          </Grid>
          <Grid item xs={4}>
            <MediaCard />
          </Grid>
        </Grid>
        <SimpleBottomNavigation />
        <SwipeableEdgeDrawer />
      </Container>
    </>
  );
};
export default Wrapper;
