import { Badge, Grid } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import React from "react";
import { Item } from "../utils/Item";

const Header = () => {
  return (
    <>
      <Grid item xs={8}>
        <Item>Parambaria</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Badge badgeContent={4} color="primary">
            <LocalMallIcon color="action" />
          </Badge>
        </Item>
      </Grid>
    </>
  );
};

export default Header;
