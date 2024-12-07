import { Close, Menu } from "@mui/icons-material";
import { Box, MenuItem, MenuList, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TrendyPic1 from "../assets/image/image1.jpg";
import TrendyPic2 from "../assets/image/image2.jpg";
import TrendyPic3 from "../assets/image/image3.webp";
import TrendyPic4 from "../assets/image/image4.webp";

export default function Main() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);

    if (menu == false) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
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
          bgcolor={"#000000e4"}
          position={"absolute"}
          sx={
            menu
              ? { left: "0", top: "0", transition: "all 1s" }
              : { top: "0", left: "-400px ", transition: "all 1s" }
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
                color: "white",
                color: "#b1b1b1",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              Home
            </MenuItem>
            <MenuItem
              sx={{
                color: "white",
                color: "#b1b1b1",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              LookBook
            </MenuItem>
            <MenuItem
              sx={{
                color: "white",
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
          love, don’t you want to wear it longer than a single <br /> season? We
          wanted to build a store that sells clothes that are more than just
          trendy.
        </Typography>
      </Box>

      <Box
        width={"100%"}
        height={"300px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"18px"}
      >
        <img
          src={TrendyPic1}
          alt=""
          style={{ width: "250px", height: "250px", objectFit: "cover" }}
        />
        <img
          src={TrendyPic2}
          alt=""
          style={{ width: "250px", height: "250px", objectFit: "cover" }}
        />
        <img
          src={TrendyPic3}
          alt=""
          style={{ width: "250px", height: "250px", objectFit: "cover" }}
        />
        <img
          src={TrendyPic4}
          alt=""
          style={{ width: "250px", height: "250px", objectFit: "cover" }}
        />
      </Box>

      <Box
        width={"100%"}
        height={"450px"}
        marginTop={"120px"}
        display={"flex"}
        alignItems={'center'} 
        flexDirection={'column'} 
        justifyContent={'center'}
        gap={'16px'}
        color={'#b1b1b1'}
      >
        <Typography variant="h3" textAlign={'center'} fontWeight={'bold'}>
          Visit our store in New York’s trendy <br /> TriBeCa neighborhood. It’s
          one of the <br /> liveliest shopping districts around.
        </Typography>
        <Typography variant="h5" marginTop={'40px'}>LOCATION</Typography>
        <Typography fontSize={'18px'} textAlign={'center'}>
          10 Street Name, City Name <br />
          Country, Zip Code
        </Typography>
        <Typography variant="h5" marginTop={'20px'}>HOURS</Typography>
        <Typography fontSize={'18px'} textAlign={'center'}>
          Mon - Sat 9:00 am - 5:00 pm <br />
          Sunday Closed
        </Typography>
      </Box>
    </>
  );
}
