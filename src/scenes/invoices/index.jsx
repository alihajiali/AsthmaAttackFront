import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import {useNavigate , Link} from "react-router-dom"
import axios from 'axios';
import { useEffect, useState } from "react";
import "./style.css";


const Invoices = () => {
  const [data, setData] = useState([]);
  const [getData, setGetData] = useState(true);


  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ایدی" },
    {
      field: "username",
      headerName: "نام کاربری",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone_number",
      headerName: "شماره موبایل",
      flex: 1,
    },
    {
      field: "email",
      headerName: "ایمیل",
      flex: 1,
    },
    {
      field: "doctors",
      headerName: "نام پزشکان",
      flex: 1,
    },
    {
      field: "date",
      headerName: "تاریخ",
      flex: 1,
    },
  ];




  const GetData = () => {

    let config = {
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem("token")}`
      }
    }


    axios.get(`http://185.142.156.246:8081/user/?filter_bimar=${localStorage.getItem("username")}`, config)
    .then((response) => {
      setData(response.data.users);
    });
  }

  useEffect(() => {
    if (getData){
      setGetData(false)
      GetData()
    }
  });


  return (
    <Box m="20px">
      <Box  sx={{direction:"rtl"}}>
      <Header title="لیست سلامت جویان" subtitle="لیست سلامت جویانی که پرشک آنها شما هستید" />
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        {/* <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} /> */}





        <table>
          <tr>
            <th>نام کاربری</th>
            <th>نام و نام خانوادگی</th>
            <th>شماره موبایل</th>
            <th>ایمیل</th>
            <th>کد پزشک</th>
            <th>مشاهده نمودار</th>
            <th>مشاهده پرونده</th>
          </tr>

            {data.map((item, i)=>{
              return (
                <tr>
                  <td>{item?._source?.username}</td>
                  <td>{item?._source?.full_name}</td>
                  <td>{item?._source?.phone_number}</td>
                  <td>{item?._source?.email}</td>
                  <td>{item?._source?.doctors[0]}</td>
                  <td><Link to="/dashboard/bar"><button class="button button2" onClick={() => {localStorage.setItem("doctor_filter_bimar", item?._id)}}>نمودار</button></Link></td>
                  <td><Link to="/dashboard/healthinfo"><button class="button button2" onClick={() => {localStorage.setItem("doctor_filter_bimar", item?._id)}}>پرونده پزشکی</button></Link></td>
                </tr>
              )
            })}

        </table>



      </Box>
    </Box>
  );
};

export default Invoices;
