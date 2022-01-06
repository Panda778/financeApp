import React from "react";
import Box from "@mui/material/Box";
import {
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Container,
  DialogActions,
} from "@mui/material";
import { Button } from "@mui/material";
function ModalCard({
  handleClose,
  open,
  typeCard,
  setTypeCard,
  setNameCard,
  nameCard,
  currencies,
  currencies1,
  currency,
  handleChangeCur,
  money,
  setMoney,
  addCards,
}) {
  return (
    <Box>
      <Dialog open={open} onClose={handleClose} aria-labelledby={"add-card"}>
        <DialogTitle
          id={"add-card"}
          sx={{
            backgroundColor: "#1990FF",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Add Card
          <Box>
            <Button sx={{ color: "white" }} onClick={handleClose}>
              X
            </Button>
          </Box>
        </DialogTitle>

        <DialogContent>
          <Container>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 2,
                marginTop: 2,
              }}
            >
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                value={typeCard}
                sx={{ width: "30%" }}
                onChange={(e) => setTypeCard(e.target.value)}
              >
                {currencies1.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                sx={{ width: "69%" }}
                id="outlined-basic"
                label="name your card"
                variant="outlined"
                value={nameCard}
                onChange={(e) => setNameCard(e.target.value)}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
              }}
            >
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                value={currency}
                onChange={handleChangeCur}
                helperText="Please select your currency"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                sx={{ width: "48%", marginLeft: 2 }}
                id="outlined-basic"
                label="money"
                variant="outlined"
                value={money}
                onChange={(e) => setMoney(e.target.value)}
              />
            </Box>

            <DialogActions>
              <Button onClick={addCards} color={"info"} variant={"contained"}>
                Save
              </Button>
            </DialogActions>
          </Container>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default ModalCard;
