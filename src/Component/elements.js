import { Box, styled, Typography } from "@mui/material";


export const NavbarContainer = styled(Box)({
 color:"black",
 width:"100%", 
 fontSize:"50px"

});

export const NavbarHeaders = styled(Typography)(({ fsize, fweight }) => ({
  fontSize: fsize ? fsize : "4rem",
  fontWeight: fweight ? fweight : 500,
  fontFamily: "Poppins",
  cursor: "pointer",
}));
