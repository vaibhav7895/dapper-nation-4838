import { Button, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr,Link } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { SETID } from '../../Redux/AdminReducer/actiontype'
import { useDispatch } from 'react-redux'

const Dashboard = () => {
  const [fulldata,setfulldata]=useState([])
   const [edit,setedit]=useState("")
   const dispatch=useDispatch()
  const getdata=()=>{
  axios.get(`https://travel-com.onrender.com/Destinations`).then((res)=>{
      setfulldata(res.data)
    })
   
  }
  useEffect(()=>{
          getdata()
  },[])
  console.log(fulldata)
  const handledelete=(id)=>{
    axios.delete(`https://travel-com.onrender.com/Destinations/${id}`).then((res)=>{
      const newdata=fulldata.filter((item,index)=>{
        if(id!=item.id){
          return item
        }
      })
      setfulldata(newdata)
    })
  }
  // const handleedit=(id)=>{
  //  fulldata.map((item,index)=>{
  //     if(item.id==id){
  //       setedit(item)
       
  //     }
  //  })
  // }
  const handleedit=(id)=>{
   dispatch({type:SETID,payload:id})
  }
  //console.log(edit)
 
 
   //localStorage.setItem("edit",JSON.stringify(edit)) 
  return (
    <TableContainer>
            <Table variant='striped' colorScheme='teal'>
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>S/N</Th>
                  
                  <Th >City</Th>
                  <Th>Country</Th>
                  <Th>Duration</Th>
                  <Th isNumeric>Price</Th>
                  <Th>Ratings</Th>
                  <Th>Delete</Th>
                 <Th>Edit</Th>
                </Tr>
              </Thead>
              <Tbody>
                {/* <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr> */}
               {
                fulldata.length>0 && fulldata.map((item,index)=>{
                  return  <Tr key={item.id}>
                  <Td>{item.id}</Td>
                
                  {/* <Td>{item.image}</Td> */}
                  <Td >{item.City}</Td>
                  <Td>{item.Country}</Td>
                  <Td>{item.Duration}</Td>
                  <Td isNumeric>{item.Price}</Td>
                  <Td>{item.Ratings}</Td>
                  <Td><Button onClick={()=>handledelete(item.id)}>Delete</Button></Td>
                  <Td><Button onClick={()=>handleedit(item.id)}>Edit</Button></Td>
                </Tr>
                })
               }
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
  )
}

export default Dashboard