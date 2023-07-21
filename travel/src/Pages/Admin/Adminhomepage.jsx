import { Button, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, Link, useDisclosure, Box, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { SETID } from '../../Redux/AdminReducer/actiontype'
import { useDispatch } from 'react-redux'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
const Dashboard = () => {
  const [fulldata, setfulldata] = useState([])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [edit, setedit] = useState("")
  const [itemlocal, setitemlocal] = useState({})
  const dispatch = useDispatch()
  const [newdata, setnewdata] = useState([])

  const [newid, setID] = useState(itemlocal.id)
  const [City, setCity] = useState("")
  const [Country, setCountry] = useState("")
  const [Duration, setDuration] = useState("")
  const [Price, setPrice] = useState("")
  const [Ratings, setRatings] = useState("")
  const [images, setimages] = useState(itemlocal.images)

  const getdata = () => {
    axios.get(`https://travel-com.onrender.com/Destinations`).then((res) => {
      setfulldata(res.data)
    })

  }
  useEffect(() => {
    getdata()
  }, [fulldata])
  console.log(fulldata)
  const handledelete = (id) => {
    axios.delete(`https://travel-com.onrender.com/Destinations/${id}`).then((res) => {
      const newdata = fulldata.filter((item, index) => {
        if (id != item.id) {
          return item
        }
      })
      setfulldata(newdata)
    })
  }
  const handleeditdata = () => {
    let newid= +itemlocal.id
    let obj = {
      
      images: itemlocal.images
    }
    if (City) {
      obj.City = City
    } else {
      obj.City = itemlocal.City
    }
    if (Country) {
      obj.Country = Country
    } else {
      obj.Country = itemlocal.Country
    }
    if (Duration) {
      obj.Duration = Duration
    } else {
      obj.Duration = itemlocal.Duration
    }
    if (Price) {
      obj.Price = +Price
    } else {
      obj.Price = itemlocal.Price
    }
    if (Ratings) {
      obj.Ratings = Ratings
    } else {
      obj.Ratings = itemlocal.Ratings
    }


    axios.patch(`https://travel-com.onrender.com/Destinations/${newid}`, obj).then((res) => {
      console.log(res.data)
    }).catch((err)=>{
      alert(err)
    })
  //   console.log(obj)
  //  let newdata= fulldata.map((el, index) => {
  //     if (+el.id == +newid) {
  //       el = obj
  //     }
  //   })
    //setnewdata(newdata)
    //setfulldata(newdata)
    onClose()




  }
  // const handleedit=(id)=>{
  //  fulldata.map((item,index)=>{
  //     if(item.id==id){
  //       setedit(item)

  //     }
  //  })
  // }
  const handleedit = (item) => {
    // dispatch({ type: SETID, payload: id })
    setitemlocal(item)
    //localStorage.setItem("item",JSON.stringify(item))
    console.log(item)
    setTimeout(() => {
      onOpen()
    }, 1000);

  }
  //console.log(edit)


  //localStorage.setItem("edit",JSON.stringify(edit)) 
  return (
    <>
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
             
              
              fulldata.map((item, index) => {
                return <Tr key={item.id}>
                  <Td>{item.id}</Td>

                  {/* <Td>{item.image}</Td> */}
                  <Td >{item.City}</Td>
                  <Td>{item.Country}</Td>
                  <Td>{item.Duration}</Td>
                  <Td isNumeric>{item.Price}</Td>
                  <Td>{item.Ratings}</Td>
                  <Td><Button onClick={() => handledelete(item.id)}>Delete</Button></Td>
                  <Td>

                    <Button className='btn' onClick={() => handleedit(item)} style={{ backgroundColor: "#1071db", color: "white", fontSize: "20px" }}>
                      Edit
                    </Button>
                  </Td>
                  </Tr>
                  })
            }
          </Tbody>

          <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader style={{ margin: "auto", color: "teal" }}>Edit Page</ModalHeader>
              <ModalCloseButton />
              <Box>
                <Input disabled={true} type="text" placeholder="id" style={{ marginTop: "10px" }} name='id' value={itemlocal.id} onChange={(e) => setID(e.target)} />

                <Input type="text" placeholder={`${itemlocal.City}`} style={{ marginTop: "10px" }} name='city' value={City} onChange={(e) => setCity(e.target.value)} />
                <Input type="text" placeholder={`${itemlocal.Country}`} style={{ marginTop: "10px" }} name='country' value={Country} onChange={(e) => setCountry(e.target.value)} />
                <Input type="text" placeholder={`${itemlocal.Duration}`} style={{ marginTop: "10px" }} name='duration' value={Duration} onChange={(e) => setDuration(e.target.value)} />
                <Input type="text" placeholder={`${itemlocal.Price}`} style={{ marginTop: "10px" }} name='price' value={Price} onChange={(e) => setPrice(e.target.value)} />
                <br />
                <br />
                <select name="Ratings" value={Ratings} onChange={(e) => setRatings(e.target.value)} style={{ width: "100%", border: "1px solid gray", height: "50px" }}>
                  <option value="">Select</option>
                  <option value="⭐">⭐</option>
                  <option value="⭐⭐">⭐⭐</option>
                  <option value="⭐⭐⭐">⭐⭐⭐</option>
                  <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                  <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>

                </select>
                <Input disabled={true} type="text" placeholder={`${itemlocal.images}`} style={{ marginTop: "10px" }} name='image' value={itemlocal.images} onChange={(e) => setimages(e.target.value)} />
                <Box style={{ margin: "auto", height: "auto", width: "155px", marginTop: "30px" }}>
                  <Button style={{ backgroundColor: "teal" }} onClick={handleeditdata}>Edit</Button>
                </Box>

              </Box>
              <ModalBody pb={6}>

              </ModalBody>

              <ModalFooter>

              </ModalFooter>
            </ModalContent>
          </Modal>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>

    </>
  )
}

export default Dashboard


{/* <Button onClick={()=>handleedit(item.id)}>Edit</Button> */ }



// "id": 8,
//       "City": "Assam",
//       "Country": "India",
//       "Duration": "3 Nights 2 Days",
//       "Price": 24000,
//       "Ratings": "⭐⭐⭐",
//       "images": "https://cdn.pixabay.com/photo/2022/01/03/08/42/tea-garden-6912013_960_720.jpg"