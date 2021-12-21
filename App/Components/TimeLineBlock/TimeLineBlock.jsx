import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Paper, Box } from "@mui/material";
import { Typography } from "@mui/material";
export default function TimeLineBlock() {
  return (
    <Paper  elevation={3} sx={{borderRadius:5 }}>
      <Box sx={{marginLeft:6, paddingTop:1}}>
        <Typography component="p" fontWeight="bold">
          Order TimeLine
        </Typography>
      </Box>
          <Box sx={{height:'360px', boxSizing:'border-box'}} >
              
      <Timeline position="right" sx={{height:'20px',padding: "0 1px 0 0", boxSizing:'border-box'}}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="success"></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ flex: 20, py: "24px" }}>
            <Typography fontWeight="bold" fontSize="13px" component="p">
              1983, orders, $4220
            </Typography>
            <Typography component="p" color="gray" fontSize="12px  ">
              20 Oct 2021 17:09
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary"></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ flex: 20, py: "24px" }}>
            <Typography fontWeight="bold" fontSize="13px" component="p">
              12 Invoices have been paid
            </Typography>
            <Typography component="p" color="gray" fontSize="12px  ">
              20 Oct 2021 17:09
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="info"></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ flex: 20, py: "24px" }}>
            <Typography fontWeight="bold" fontSize="13px" component="p">
              Order #37745 from September
            </Typography>
            <Typography component="p" color="gray" fontSize="12px  ">
              20 Oct 2021 17:09
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              sx={{ backgroundColor: "secondary.A400" }}
            ></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ flex: 20, py: "24px" }}>
            <Typography fontWeight="bold" fontSize="13px" component="p">
              New order placed #XF-2356
            </Typography>
            <Typography component="p" color="gray" fontSize="12px  ">
              20 Oct 2021 17:09
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="error"></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ flex: 20, py: "24px" }}>
            <Typography fontWeight="bold" fontSize="13px" component="p">
              New order placed #XF-2346
            </Typography>
            <Typography component="p" color="gray" fontSize="12px  ">
              20 Oct 2021 17:09
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
</Box>
    </Paper>
  );
}
