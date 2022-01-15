import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@material-ui/core/Button";
import { getAuth, signOut } from "firebase/auth";
import { Link as Linker } from "react-router-dom";

export default function BasicPopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const getUserData = async () => {
    const user = await getAuth();
    if (user.currentUser.displayName != null) {
      return (
        <div>
          <Typography
            sx={{ p: 2 }}
            onClick={() => {
              signOut(getAuth());
            }}
          >
            Sign Out
          </Typography>
        </div>
      );
    } else {
      return (
        <Linker to="/SignInSide">
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Linker>
      );
    }
  };

  // useEffect(() => {
  //   getUserData();
  // }, [getUserData]);

  return (
    <div>
      <Button variant="outlined" size="small" onClick={handleClick}>
        {props.text}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {getUserData()}
      </Popover>
    </div>
  );
}
