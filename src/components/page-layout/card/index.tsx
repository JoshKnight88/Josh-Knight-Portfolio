import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";


interface ISegmentCardProps {
  id?: string;
  preTitle?: string;
  title?: string;
  subtitle?: string;
  bodyText?: React.ReactNode;
  segmentLink?: string;
  alignItems?: "flex-start" | "center" | "flex-end";
}

export const SegmentCard: React.FC<ISegmentCardProps> = ({
  id,
  preTitle,
  title,
  subtitle,
  bodyText,
  segmentLink,
  alignItems = "flex-start",
}) => {
  return (
    <Box sx={{ height: 800, minWidth: 275 }}>
      <Card sx={{ width: 1000, height: 300 }} variant="outlined">
        <Typography variant="h1">{title}</Typography>
        <Typography sx={{ fontSize: 14 }}>{bodyText}</Typography>
        <Typography sx={{ fontSize: 14 }}>{segmentLink}</Typography>
      </Card>
    </Box>
  );
};
