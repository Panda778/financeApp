import React from "react";
import Box from "@mui/material/Box";
import {
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  Container,
  DialogActions,
} from "@mui/material";
import { Button } from "@mui/material";
import SelectCard from "../SelectCard/SelectCard";
import { useDispatch, useSelector } from "react-redux";
import { walletData } from "../../Redux/feachers/walletSlice";
import SelectType from '../SelectType/SelectType'
import SelectCategory from '../SelectCategory/SelectCategory'
import SelectNote from "../SelectNote/SelectNote";
function ModalTransaction({
  money,
  transaction,
  handleCloseTransaction,
  wallet,
  setWallet,
  setMoney,
  currency,
  addTranc,
  handleChangeCur,
  currencies,
  note,
  setNote,
  type, setType,
  category,
  setCategory
}) {
  const dispatch = useDispatch();
  const card = useSelector(walletData);

  return (
    <Box>
      <Dialog
        open={transaction}
        onClose={handleCloseTransaction}
        aria-labelledby={"add-card-transaction"}
      >
        <DialogTitle
          sx={{
            backgroundColor: "red",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
          }}
          id={"add-card-transaction"}
        >
          Add Card Transaction
          <Box>
            <Button sx={{ color: "white" }} onClick={handleCloseTransaction}>
              X
            </Button>
          </Box>
        </DialogTitle>

        <DialogContent sx={{ marginTop: 1 }}>
          <Container>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 1,
                marginTop:2
              }}
            >
              <SelectCard wallet={wallet} setWallet={setWallet} />
              <TextField
                sx={{width:'48%'}}
                id="outlined-basic"
                label="money"
                variant="outlined"
                value={money}
                onChange={(e) => setMoney(e.target.value)}
              />
              
             
            </Box>
            <Box sx={{display:'flex', justifyContent:'space-between', margin:'10px 2px'}}>
            <SelectType type={type} setType={setType} />
              <SelectCategory category={category} setCategory={ setCategory}/>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              
              <SelectNote note={note} setNote={setNote} />
            
        
            </Box>

            <DialogActions>
              <Button
                onClick={() => addTranc(event)}
                color={"info"}
                variant={"contained"}
              >
                addTransaction
              </Button>
            </DialogActions>
          </Container>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default ModalTransaction;
