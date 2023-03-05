import Prof from "./sec1.jsx"
import { Box, Button ,useTheme} from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useDispatch , useSelector } from "react-redux";
const Profile = ()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const user = useSelector(state => state.user)
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center" sx={{direction:"rtl"}}>
          <Header title="ویرایش پرونده پزشکی" subtitle="اطلاعات خود را میتوانید ویرایش کنید " />
       
      </Box>
            <Prof />
        </Box>
    )
}
export default Profile;