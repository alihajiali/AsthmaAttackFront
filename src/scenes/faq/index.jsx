import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px" sx={{direction:"rtl"}}>
      <Header title="سوالات متداول" subtitle="صفحه سوالات متداول" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            یک سوال مهم
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            مراقبت های پزشکی از طریق سایت چطور امکان پذیر است ؟ سلامت جو ها با پزشکان چگونه در ارتباط هستند؟
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            یک سوال مهم دیگر
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            کاربر امکان انتخاب پزشک خود را دارد ؟ ارتباط سلامت جو و پزشک از طریق چه پلتفرمیست ؟ چند ساعت در هفته امکان صحبت با پزشک را خواهد داشت ؟
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            سوال مورد علاقه ی شما
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            هزینه ی خدمات ارائه شده در سایت چقدر است ؟ و ایا خدمات یک جا خریداری میشوند یا بصورت اپشن هایی جدا محاسبه میشوند ؟
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            یکی دیگر از سوالات رایج
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            مراحل ثبت نام در سایت چگونه است ؟ و اشتراکی که پرداخت میشود چند ماهه می باشد ؟
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            سوال اخر
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            مراحل ثبت نام به عنوان پزشک چگونه است ؟ و مدارک مورد نیاز برای تبدیل شدن به کاربر فعال و استفاده از خدمات وی ای پی چگونه است ؟
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
