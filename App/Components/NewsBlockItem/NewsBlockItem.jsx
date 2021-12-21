import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function NewsBlockItem() {
  return (
    <Grid rowGap={0.4}  sx={{ display: "flex"}} container>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
      
        }}
        xs={12}
        lg={12}
        item
      >
        <Box>
          <img
            style={{
              width: "48px",
              height: "48px",
              borderRadius: 10,
              marginRight: 4,
              
            }}
            src="https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_1.jpg"
            alt=""
          />
        </Box>
        <Box>
          <Typography variant={"p"} sx={{ fontWeight: "bold" }}>
            Chief Accounts Consultant
          </Typography>

          <Typography component={"p"} color={"GrayText"}>
            Fugiat aut perferendis quidem esse deserunt. Eos omnis cumque.
            Aliquid adipisci
          </Typography>
        </Box>

        <Box>
          <Typography  component={"span"} >2 days</Typography>
        </Box>
      </Grid>
      <Grid
        sx={{
          display: "flex",

          justifyContent: "space-between",
        }}
        xs={10}
        lg={12}
        item
      >
        <Box>
          <img
            style={{
              width: "48px",
              height: "48px",
              borderRadius: 10,
              marginRight: 4,
            }}
            src="https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_2.jpg"
            alt=""
          />
        </Box>
        <Box>
          <Typography variant={"p"} sx={{ fontWeight: "bold" }}>
            Chief Accounts Consultant
          </Typography>

          <Typography component={"p"} color={"GrayText"}>
            Fugiat aut perferendis quidem esse deserunt. Eos omnis cumque.
            Aliquid adipisci
          </Typography>
        </Box>
        <Box>
          <Typography component={"span"}>2 days</Typography>
        </Box>
      </Grid>
      <Grid
        sx={{
          display: "flex",

          justifyContent: "space-between",
        }}
        xs={10}
        lg={12}
        item
      >
        <Box>
          <img
            style={{
              width: "48px",
              height: "48px",
              borderRadius: 10,
              marginRight: 4,
            }}
            src="https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_3.jpg"
            alt=""
          />
        </Box>
        <Box>
          <Typography variant={"p"} sx={{ fontWeight: "bold" }}>
            Chief Accounts Consultant
          </Typography>

          <Typography component={"p"} color={"GrayText"}>
            Fugiat aut perferendis quidem esse deserunt. Eos omnis cumque.
            Aliquid adipisci
          </Typography>
        </Box>
        <Box>
          <Typography component={"span"}>2 days</Typography>
        </Box>
      </Grid>
      <Grid
        sx={{
          display: "flex",

          justifyContent: "space-between",
        }}
        xs={10}
        lg={12}
        item
      >
    
        <Box>
          <img
            style={{
              width: "48px",
              height: "48px",
              borderRadius: 10,
              marginRight: 4,
            }}
            src="https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_4.jpg"
            alt=""
          />
        </Box>
        <Box>
          <Typography variant={"p"} sx={{ fontWeight: "bold" }}>
            Chief Accounts Consultant
          </Typography>

          <Typography component={"p"} color={"GrayText"}>
            Fugiat aut perferendis quidem esse deserunt. Eos omnis cumque.
            Aliquid adipisci
          </Typography>
        </Box>
        <Box>
          <Typography component={"span"}>2 days</Typography>
        </Box>
      </Grid>
      <Grid
        sx={{
          display: "flex",

          justifyContent: "space-between",
        }}
        xs={10}
        lg={12}
        item
      >
        {" "}
        <Box>
          <img
            style={{
              width: "48px",
              height: "48px",
              borderRadius: 10,
              marginRight: 4,
              
            }}
            src="https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_5.jpg"
            alt=""
          />
        </Box>
        <Box>
          <Typography variant={"p"} sx={{ fontWeight: "bold" }}>
            Chief Accounts Consultant
          </Typography>

          <Typography component={"p"} color={"GrayText"}>
            Fugiat aut perferendis quidem esse deserunt. Eos omnis cumque.
            Aliquid adipisci
          </Typography>
        </Box>
        <Box>
          <Typography component={"span"}>2 days</Typography>
        </Box>
      </Grid>
      <Box
        sx={{
          borderTop: 1,
          width: "100%",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <Button sx={{ marginTop: 1, fontWeight: "bold" }}>View all</Button>
      </Box>
    </Grid>
  );
}

export default NewsBlockItem;
