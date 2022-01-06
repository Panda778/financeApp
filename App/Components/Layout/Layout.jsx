import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import { v4 as uuidv4 } from "uuid";
import Toolbar from "@mui/material/Toolbar";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ModalCard from "../ModalCard/ModalCard";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import Divider from "@mui/material/Divider";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MailIcon from "@mui/icons-material/Mail";
import { makeStyles } from "@mui/styles";
import ModalTransaction from "../ModalTransaction/ModalTransaction";
import { addTransaction, PostTransactions } from "../../Redux/feachers/transactionSlice";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {
  createCard,
  fetchAllWallets,
  walletData,
} from "../../Redux/feachers/walletSlice";
import { logOut, reverseUser } from "../../Redux/feachers/userSlice";

import {
  List,
  ListItem,
  ListItemIcon,
  Menu,
  MenuItem,
  ListItemText,
} from "@mui/material";
import { Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { LogoutTwoTone } from "@mui/icons-material";

const drawerWidth = 240;

//main
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

//Search
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

//AppBAr
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

//Drawer header
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const useStyle = makeStyles({
  root: {
    color: "red",
  },
  active: {
    color: "#00AA55",
    backgroundColor: "#EFF8F1",
    borderRight: "1px solid #00AA55 ",
  },
});

const Layout = ({ children }) => {
  const currencies1 = [
    {
      value: "visa",
      label: "$",
    },
    {
      value: "paypal",
      label: "€",
    },
    {
      value: "uzcard",
      label: "฿",
    },
    {
      value: "hump",
      label: "¥",
    },
  ];
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  const style = useStyle();
  const theme = useTheme();

  const [color, setColor] = React.useState(false);

  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  //card
  const [transaction, setTransaction] = React.useState(false);
  const [note, setNote] = React.useState("");
  const [ammount, setAmmount] = React.useState("0");
  const [wallet, setWallet] = React.useState('');
  console.log(wallet);


  const [type, setType] = React.useState('')
  const [category,setCategory]= React.useState('')
  const [currency, setCurrency] = React.useState("");
  const [nameCard, setNameCard] = React.useState("");
  const [typeCard, setTypeCard] = React.useState("");
  const route = useRouter();
  const dispatch = useDispatch();
  const card = useSelector(walletData);
  console.log(card);
  const userStatus = useSelector((state) => state.user.status);
  const userData = useSelector((state) => state.user.data);

  const addCards = () => {
    const newCard = { name: nameCard, currency, user: userData.id };
    dispatch(createCard(newCard));
    setNameCard("");
    setAmmount("");
    setTypeCard("");
    setCurrency("");
    localStorage.setItem("wallet", JSON.stringify(card));
    setOpens(false);
  };

  const handleChangeColor = () => {
    setColor(!color);
  };

  const logOuts = () => {
    dispatch(logOut());
  };
  React.useEffect(() => {
    if (!localStorage.getItem("user")) {
      return route.push("/");
    } else {
      let loc = JSON.parse(localStorage.getItem("user"));
      dispatch(reverseUser(loc));
    }
    if (userData.id) {
      dispatch(fetchAllWallets({ userId: userData.id }));
    }
  }, [userStatus]);

  console.log(card.id);

  const addTranc = (event) => {
   console.log(event.target.id);
   
    const newTransaction = {
      wallet,
      ammount: parseInt(ammount),
      note,
      type,
      category
    };
    
    dispatch(addTransaction({ newTransaction }));
    dispatch(PostTransactions(newTransaction))
  };

  const handleOpenCardTransaction = () => {
    setTransaction(true);
  };

  const handleCloseTransaction = () => {
    setTransaction(false);
  };

  const handleChangeCur = (event) => {
    setCurrency(event.target.value);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleOpenCard = () => {
    setOpens(true);
  };
  const handleClose = () => {
    setOpens(false);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem sx={{ marginBottom: 1 }}>
        <AccountCircleOutlinedIcon />
        <Typography sx={{ marginLeft: 1 }}>{userData.name}</Typography>
      </MenuItem>
      <MenuItem sx={{ borderTop: 1 }} onClick={handleMenuClose}>
        Profile
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={logOuts}>
        <Button>
          <LogoutTwoTone sx={{ color: "red" }} />
          Log out
        </Button>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.72)",
          backdropFilter: "blur(10px)",
        }}
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon
              sx={{
                display: {
                  xs: "block",
                  lg: "none",
                },
              }}
            />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={handleOpenCardTransaction}
            >
              <LocalAtmOutlinedIcon />
            </IconButton>

            <ModalTransaction
              transaction={transaction}
              setTransaction={setTransaction}
              wallet={wallet}
              setWallet={setWallet}
              addTranc={addTranc}
              handleCloseTransaction={handleCloseTransaction}
              currency={currency}
              currencies={currencies}
              handleChangeCur={handleChangeCur}
              money={ammount}
              setMoney={setAmmount}
              note={note}
              setNote={setNote}
              type={type}
              setType={setType}
              category={category}
              setCategory={setCategory}
            />
            <IconButton
              onClick={handleOpenCard}
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <AddCardOutlinedIcon />
            </IconButton>
            <ModalCard
              open={opens}
              handleClose={handleClose}
              setWallet={setWallet}
              setNameCard={setNameCard}
              nameCard={nameCard}
              wallet={wallet}
              typeCard={typeCard}
              setTypeCard={setTypeCard}
              currencies={currencies}
              currencies1={currencies1}
              currency={currency}
              handleChangeCur={handleChangeCur}
              money={ammount}
              setMoney={setAmmount}
              addCards={addCards}
            />
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
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
        <DrawerHeader sx={{ display: "flex", justifyContent: "space-between" }}>
          <img
            style={{ width: "40px" }}
            src="https://minimal-kit-react.vercel.app/static/logo.svg"
            alt=""
          />

          <IconButton
            sx={{
              display: {
                xs: "block",
                lg: "none",
                xl: "none",
              },
            }}
            onClick={handleDrawerClose}
          >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List sx={{ padding: 0 }}>
          <ListItem
            onChange={handleChangeColor}
            className={route.pathname === "/me/main" ? style.active : ""}
            button
          >
            <ListItemIcon>
              <PieChartOutlineOutlinedIcon />
            </ListItemIcon>
            <Link href="/me/main" passHref>
              <ListItemText>Overview</ListItemText>
            </Link>
          </ListItem>

          <Link href="/" passHref>
            <ListItem onClick={handleChangeColor} button>
              <ListItemIcon>
                <PeopleAltOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Users</ListItemText>
            </ListItem>
          </Link>

          <ListItem
            onClick={handleChangeColor}
            className={route.pathname === "/me/todo" ? style.active : ""}
            button
          >
            <ListItemIcon>
              <FeedOutlinedIcon />
            </ListItemIcon>
            <Link href="/me/todo" passHref>
              <ListItemText>ToDO</ListItemText>
            </Link>
          </ListItem>

          <ListItem
            onClick={handleChangeColor}
            className={route.pathname === "/" ? "active" : ""}
            button
          >
            <ListItemIcon>
              <ReportGmailerrorredOutlinedIcon />
            </ListItemIcon>
            <Link href="/" passHref>
              <ListItemText>Not found</ListItemText>
            </Link>
          </ListItem>
        </List>

        <Divider />
      </Drawer>

      <Main open={open}>
        <DrawerHeader />

        {children}
      </Main>
      {renderMenu}
      {renderMobileMenu}
    </Box>
  );
};

export default Layout;
