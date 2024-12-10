import { Close, Menu } from "@mui/icons-material";
import {
  Box,
  Button,
  MenuItem,
  MenuList,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import TrendyPic1 from "../assets/image/image1.jpg";
import TrendyPic2 from "../assets/image/image2.jpg";
import TrendyPic3 from "../assets/image/image3.webp";
import TrendyPic4 from "../assets/image/image4.webp";
import Atropos from "atropos/react";
import { useTheme } from "@mui/material";
import "boxicons";
import { Hourglass } from "react-loader-spinner";

export default function Main() {
  const [menu, setMenu] = useState(false);
  const [data, setData] = useState();
  const theme = useTheme();
  const handleMenu = () => {
    setMenu(!menu);

    if (menu == false) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN",
          {
            method: "GET",
            headers: {
              "x-rapidapi-key":
                "b8b59189b5mshe41403545ddc58dp1b00bcjsn0d8cc8e064fe",
              "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
            },
          }
        );
        const data = await res.json();
        setData(data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const items = data
    ?.filter((e, index) => index >= 0 && index <= 3)
    .map((e, index) => {
      console.log(e);
      return (
        <>
          <Atropos activeOffset={40} shadowScale={1.05}>
            <Box
              overflow={"hidden"}
              borderRadius={"3px"}
              bgcolor={"transparent"}
              display={"flex"}
              flexWrap={"wrap"}
              sx={{
                height: {
                  xs: "450px",
                  sm: "450px",
                  lg: "280px",
                },
                width: {
                  xs: "300px",
                  sm: "100%",
                  lg: "550px",
                },
              }}
            >
              <Box
                width={"100%"}
                height={"100%"}
                display={"flex"}
                sx={{
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                  },
                }}
              >
                <Box
                  width={"45%"}
                  height={"100%"}
                  bgcolor={"white"}
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "50%",
                    },
                    height: {
                      xs: "50%",
                      sm: "100%",
                    },
                    padding: {
                      xs: 2,
                      sm: 5,
                    },
                    paddingX: {
                      xs: 8,
                    },
                  }}
                >
                  <img
                    // key={index}
                    src={e.images[0].url}
                    alt=""
                    width={"100%"}
                    height={"100%"}
                    sx={{
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box
                  padding={"15px"}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"start"}
                  justifyContent={"space-around"}
                  color={"#b1b1b1"}
                  backgroundColor={"#ffffff14"}
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "50%",
                    },
                    height: {
                      xs: "50%",
                      sm: "100%",
                    },
                  }}
                >
                  <Box>
                    <Typography fontWeight={"bold"} fontSize={"15px"}>
                      {e.name.slice(0, 25)}
                    </Typography>
                    <Typography
                      marginLeft={1}
                      fontSize={"12px"}
                      color={"#8a8a8a"}
                    >
                      {e.categoryName}
                    </Typography>
                  </Box>
                  <Typography fontWeight={"bold"}>${e.price.value}</Typography>
                  <Typography fontSize={"14px"} textAlign={"justify"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla inventore porro atque eligendi deserunt aperiam
                    delectus iste.
                  </Typography>
                  <Button
                    sx={{
                      backgroundColor: "#1d2024",
                      color: "#b1b1b1",
                    }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            </Box>
          </Atropos>
        </>
      );
    });

  return (
    <>
      {!data ? (
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} height={'100vh'}>
          <Hourglass />
        </Box>
      ) : (
        <>
          <Stack
            width={"100%"}
            height={"50px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            position={"relative"}
          >
            <Menu
              onClick={handleMenu}
              sx={{
                cursor: "pointer",
                "&:active": { transform: "scale(0.9)" },
                fontSize: "36px",
                color: "#b1b1b1",
              }}
            />
            <Box
              width={"350px"}
              height={"100vh"}
              bgcolor={"#000000ef"}
              position={"absolute"}
              zIndex={10000}
              sx={
                menu
                  ? {
                      left: "0",
                      top: "0",
                      transition: "all 1s",
                      width: {
                        xs: "100%",
                        sm: "350px",
                      },
                    }
                  : {
                      top: "0",
                      left: "-600px ",
                      transition: "all 1s",
                      width: {
                        xs: "100%",
                        sm: "350px",
                      },
                    }
              }
            >
              <Box padding={"15px"}>
                <Close
                  onClick={handleMenu}
                  sx={{
                    cursor: "pointer",
                    "&:active": { transform: "scale(0.9)" },
                    fontSize: "36px",
                    color: "#b1b1b1",
                    float: "right",
                  }}
                />
              </Box>
              <MenuList
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "90px",
                  gap: "15px",
                }}
              >
                <MenuItem
                  sx={{
                    color: "#b1b1b1",
                    fontWeight: "bold",
                    fontSize: "22px",
                  }}
                >
                  Home
                </MenuItem>
                <MenuItem
                  sx={{
                    color: "#b1b1b1",
                    fontWeight: "bold",
                    fontSize: "22px",
                  }}
                >
                  LookBook
                </MenuItem>
                <MenuItem
                  sx={{
                    color: "#b1b1b1",
                    fontWeight: "bold",
                    fontSize: "22px",
                  }}
                >
                  Contact
                </MenuItem>
              </MenuList>
            </Box>
          </Stack>

          <Box
            width={"100%"}
            height={"300px"}
            marginTop={"50px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"32px"}
          >
            <Typography variant="h5" color="#b1b1b1">
              OUR STORY
            </Typography>
            <Typography variant="h3" fontWeight={"bold"} color="#b1b1b1">
              Trendy Tradition
            </Typography>
            <Typography textAlign={"center"} color="#b1b1b1">
              I love fashion. I also love clothes that live longer than a single
              season. After all, if you’ve <br /> found an item that you really
              love, don’t you want to wear it longer than a single <br />{" "}
              season? We wanted to build a store that sells clothes that are
              more than just trendy.
            </Typography>
          </Box>

          <Box
            width={"100%"}
            minHeight={"300px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"18px"}
            flexWrap={"wrap"}
          >
            <Atropos activeOffset={40} shadowScale={1.05}>
              <img
                src={TrendyPic1}
                alt=""
                style={{ width: "250px", height: "250px", objectFit: "cover" }}
              />
            </Atropos>
            <Atropos activeOffset={40} shadowScale={1.05}>
              <img
                src={TrendyPic2}
                alt=""
                style={{ width: "250px", height: "250px", objectFit: "cover" }}
              />
            </Atropos>
            <Atropos activeOffset={40} shadowScale={1.05}>
              <img
                src={TrendyPic3}
                alt=""
                style={{ width: "250px", height: "250px", objectFit: "cover" }}
              />
            </Atropos>
            <Atropos activeOffset={40} shadowScale={1.05}>
              <img
                src={TrendyPic4}
                alt=""
                style={{ width: "250px", height: "250px", objectFit: "cover" }}
              />
            </Atropos>
          </Box>

          <Box
            width={"100%"}
            height={"450px"}
            marginTop={"120px"}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent={"center"}
            gap={"16px"}
            color={"#b1b1b1"}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "24px",
                  sm: "32px",
                  md: "46px",
                },
              }}
              textAlign={"center"}
              fontWeight={"bold"}
            >
              Visit our store in New York’s trendy <br /> TriBeCa neighborhood.
              It’s one of the <br /> liveliest shopping districts around.
            </Typography>
            <Typography variant="h5" marginTop={"40px"}>
              LOCATION
            </Typography>
            <Typography fontSize={"18px"} textAlign={"center"}>
              10 Street Name, City Name <br />
              Country, Zip Code
            </Typography>
            <Typography variant="h5" marginTop={"20px"}>
              HOURS
            </Typography>
            <Typography fontSize={"18px"} textAlign={"center"}>
              Mon - Sat 9:00 am - 5:00 pm <br />
              Sunday Closed
            </Typography>
          </Box>

          <Stack
            width={"100%"}
            minHeight={"650px"}
            marginTop={"80px"}
            padding={"5px"}
          >
            <Typography
              width={"100%"}
              height={"12%"}
              textAlign={"center"}
              fontFamily={"cursive"}
              color={"#b1b1b1"}
              fontWeight={"bold"}
              sx={{
                fontSize: {
                  xs: "34px",
                  md: "48px",
                },
              }}
            >
              Festival Collection
            </Typography>
            <Box
              width={"95%"}
              height={"100%"}
              // border={"2px solid #b1b1b1"}
              borderRadius={"12px"}
              display={"flex"}
              flexWrap={"wrap"}
              justifyContent={"center"}
              padding={"10px"}
              gap={"32px"}
              margin={"auto"}
              marginTop={"40px"}
            >
              {items}
            </Box>
          </Stack>

          <Box
            display={"flex"}
            width={"100%"}
            minHeight={"550px"}
            marginTop={"250px"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              minWidth={"40%"}
              height={"100%"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
            >
              <Typography
                letterSpacing={"5px"}
                fontSize={"20px"}
                fontWeight={"bold"}
                color="#b1b1b1"
                textAlign={"center"}
              >
                Visit our store in New York’s trendy neighborhood. <br /> It’s
                one of the liveliest shopping districts around.
              </Typography>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                width={"100%"}
                gap={2}
                marginTop={"40px"}
                sx={{
                  flexDirection: {
                    xs: "column",
                    md: "row",
                  },
                }}
              >
                <Box
                  sx={{
                    width: {
                      xs: "90%",
                      md: "50%",
                    },
                  }}
                >
                  <Typography color="#b1b1b1" marginLeft={"2px"}>
                    Email
                  </Typography>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "45px",
                      border: "none",
                      borderRadius: "2px",
                      paddingLeft: "5px",
                      backgroundColor: "#d1d1d1",
                    }}
                    placeholder="Enter a Valid email address"
                  />
                </Box>
                <Box
                  sx={{
                    width: {
                      xs: "90%",
                      md: "50%",
                    },
                  }}
                >
                  <Typography color="#b1b1b1" marginLeft={"2px"}>
                    Name
                  </Typography>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "45px",
                      border: "none",
                      borderRadius: "2px",
                      paddingLeft: "5px",
                      backgroundColor: "#d1d1d1",
                    }}
                    placeholder="Enter your Name"
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  width: {
                    xs: "90%",
                    md: "100%",
                  },
                }}
                marginTop={"15px"}
              >
                <Typography color="#b1b1b1" marginLeft={"2px"}>
                  Message
                </Typography>
                <textarea
                  placeholder="Enter your Message"
                  style={{
                    width: "100%",
                    height: "150px",
                    maxHeight: "180px",
                    maxWidth: "731px",
                    borderRadius: "2px",
                    padding: "5px",
                    backgroundColor: "#d1d1d1",
                  }}
                ></textarea>
              </Box>
              <Button
                sx={{
                  marginTop: "25px",
                  color: "#16191d",
                  backgroundColor: "#b1b1b1",
                  padding: "9px 100px",
                  fontSize: "16px",
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>

          <Box
            width={"100%"}
            height={"90px"}
            bgcolor={"#22272e"}
            marginTop={"100px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography fontSize={"14px"} color="#b1b1b1">
              . Copyright © 2017 All Rights Reserved .
            </Typography>
          </Box>
        </>
      )}
    </>
  );
}
