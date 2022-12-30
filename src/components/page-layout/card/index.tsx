import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { SideNav } from "../side-navigation";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

interface ISegmentCardProps {
  preTitle?: string;
  title?: string;
  subtitle?: string;
  bodyText?: React.ReactNode;
  ctaText?: string;
  handleCtaClick?: Function;
  alignItems?: "flex-start" | "center" | "flex-end";
}

// const card = (
//   <React.Fragment>
//     <CardContent>
      
//       <Typography variant="h5" component="div">
//         {title}
//       </Typography>
//       <Typography sx={{ mb: 1.5 }} color="text.secondary">
       
//       </Typography>
     
//     </CardContent>
    
//   </React.Fragment>
// );

export const SegmentCard: React.FC<ISegmentCardProps> = ({
  preTitle,
  title,
  subtitle,
  bodyText,
  ctaText,
  handleCtaClick,
  alignItems = "flex-start",
}) => {
  return (
    <Box sx={{ height: 800, minWidth: 275}}>
      <Card sx={{width: 1000, height: 300}}variant="outlined">
        <SideNav />
        <Typography variant="h1">{title}</Typography>
        <Typography sx={{ fontSize: 14 }}>{bodyText}</Typography>
      </Card>
    </Box>
  );
};
