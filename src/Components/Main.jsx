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

export default function Main() {
  const [menu, setMenu] = useState(false);
  const [data, setData] = useState();
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
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const items = data
    ?.filter((e) => e.id >= 1 && e.id <= 8)
    .map((e, index) => {
      return (
        <>
          <Atropos
            activeOffset={40}
            shadowScale={1.05}
            onEnter={() => console.log("Enter")}
            onLeave={() => console.log("Leave")}
            onRotate={(x, y) => console.log("Rotate", x, y)}
          >
            <Box
              id="card"
              position={"relative"}
              width={"250px"}
              height={"250px"}
              overflow={"hidden"}
              borderRadius={"10px"}
              sx={{
                "&:hover #card2": {
                  opacity: 0.8,
                  transition: "all 1s",
                  backgroundColor: "#000000c0",
                },
              }}
            >
              <img
                key={index}
                src={e.image}
                alt=""
                width={"100%"}
                height={"100%"}
              />
              <Box
                id="card2"
                position={"absolute"}
                left={0}
                top={0}
                bgcolor={"#0000006c"}
                width={"100%"}
                zIndex={100}
                height={"100%"}
                sx={{
                  transition: "all 1s",
                  opacity: 0.6,
                }}
              ></Box>
            </Box>
          </Atropos>
        </>
      );
    });

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
          zIndex={10000}
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
        <Atropos
          activeOffset={40}
          shadowScale={1.05}
          onEnter={() => console.log("Enter")}
          onLeave={() => console.log("Leave")}
          onRotate={(x, y) => console.log("Rotate", x, y)}
        >
          <img
            src={TrendyPic1}
            alt=""
            style={{ width: "250px", height: "250px", objectFit: "cover" }}
          />
        </Atropos>
        <Atropos
          activeOffset={40}
          shadowScale={1.05}
          onEnter={() => console.log("Enter")}
          onLeave={() => console.log("Leave")}
          onRotate={(x, y) => console.log("Rotate", x, y)}
        >
          <img
            src={TrendyPic2}
            alt=""
            style={{ width: "250px", height: "250px", objectFit: "cover" }}
          />
        </Atropos>
        <Atropos
          activeOffset={40}
          shadowScale={1.05}
          onEnter={() => console.log("Enter")}
          onLeave={() => console.log("Leave")}
          onRotate={(x, y) => console.log("Rotate", x, y)}
        >
          <img
            src={TrendyPic3}
            alt=""
            style={{ width: "250px", height: "250px", objectFit: "cover" }}
          />
        </Atropos>
        <Atropos
          activeOffset={40}
          shadowScale={1.05}
          onEnter={() => console.log("Enter")}
          onLeave={() => console.log("Leave")}
          onRotate={(x, y) => console.log("Rotate", x, y)}
        >
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
        <Typography variant="h3" textAlign={"center"} fontWeight={"bold"}>
          Visit our store in New York’s trendy <br /> TriBeCa neighborhood. It’s
          one of the <br /> liveliest shopping districts around.
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
          variant="h2"
          textAlign={"center"}
          fontFamily={"cursive"}
          color={"#b1b1b1"}
          fontWeight={"bold"}
        >
          Festival Collection
        </Typography>
        <Box
          width={"95%"}
          height={"100%"}
          border={"2px solid #b1b1b1"}
          borderRadius={"12px"}
          marginTop={"20px"}
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"space-evenly"}
          padding={"10px"}
          gap={"20px"}
          margin={"auto"}
        >
          {items}
        </Box>
      </Stack>

      <Box
        display={"flex"}
        width={"100%"}
        height={"450px"}
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
          >
            Visit our store in New York’s trendy neighborhood. <br /> It’s one
            of the liveliest shopping districts around.
          </Typography>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"100%"}
            gap={2}
            marginTop={"40px"}
          >
            <Box width={"50%"}>
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
            <Box width={"50%"}>
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
          <Box width={"100%"} marginTop={"15px"}>
            <Typography color="#b1b1b1" marginLeft={"2px"}>
              Message
            </Typography>
            <textarea
              placeholder="Enter your Message"
              style={{
                width: "731px",
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
        bgcolor={"#b1b1b18f"}
        marginTop={"100px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography fontSize={"14px"} color="#16191d">
          Copyright © 2017 All Rights Reserved
        </Typography>
      </Box>
    </>
  );
}
