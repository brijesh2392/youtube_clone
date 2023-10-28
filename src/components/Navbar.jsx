import { Stack  } from "@mui/material";
import { Link } from "react-router-dom";

import {logo} from "./../Utils/constants"
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack 
    direction = "row"
    alignItems="center"
    p={2}
    sx={{ position:"Sticky", background:"#000", top: 0, justifyContent:"space-between" }} // sx overrides the Mui css
    >
     <Link to="/" style={{ display: "flex", alignItems: "center" }} >
      <img src={logo} alt="logo" height={45} />
     </Link>

     <SearchBar />
    </Stack>
  )
}

export default Navbar