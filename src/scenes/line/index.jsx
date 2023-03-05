import { Box , Button } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Box  sx={{direction:"rtl",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <Header title="نمودار خطی" subtitle="نمودار خطی وضعیت سلامت جو" />
        <Box sx={{color:"white",width:"40%",display:"flex",alignItems:'center',justifyContent:"space-between"}}>
            <Button variant="contained" size="large" sx={{background:"rgb(112, 213, 184)","&:hover":{background:"rgb(90, 173, 148)"}}}>نمایش هفتگی</Button>
            <Button variant="contained" size="large" sx={{background:"rgb(112, 213, 184)","&:hover":{background:"rgb(90, 173, 148)"}}}>نمایش ماهانه</Button>
            <Button variant="contained" size="large" sx={{background:"rgb(112, 213, 184)","&:hover":{background:"rgb(90, 173, 148)"}}}>نمایش سالانه</Button>
         </Box>
      </Box>
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
