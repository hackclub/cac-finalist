"use client";

import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import Image from "next/image";
import { useEffect, useRef } from "react";
import theme from "@hackclub/theme"

import {
  BaseStyles,
  Badge,
  Box,
  Button,
  Link,
  Card,
  Checkbox,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  Label,
  NavLink,
  Radio,
  Select,
  Slider,
  Text,
  Textarea,
  ThemeUIProvider
} from 'theme-ui'

const CongressionalMap = dynamic(() => import('./components/CongressionalMap'), {
  ssr: false,
});

export default function Home() {
  const maskRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!maskRef.current) return;
      const rect = maskRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const mask = `radial-gradient(circle at ${x}px ${y}px, transparent 25px, black 40px)`;
      maskRef.current.style.webkitMaskImage = mask;
      maskRef.current.style.maskImage = mask;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);




  return (
    <ThemeUIProvider theme={theme}>
      <div className="relative w-full min-h-screen overflow-x-hidden font-mono bg-[#EBECE0]">
        {/* Star background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/Star2.svg")',
            backgroundRepeat: "repeat",
            backgroundSize: "50px 50px",
            backgroundPosition: "center",
          }}
        />

        {/* Haze layer with cut-out spotlight */}
        <div
          ref={maskRef}
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.35)", // haze
            WebkitMaskComposite: "destination-out",
            maskComposite: "exclude",
            maskImage:
              "radial-gradient(circle at center, transparent 10px, black 40px)",
            WebkitMaskImage:
              "radial-gradient(circle at center, transparent 10px, black 40px)",
            transition: "mask-image 0.1s, -webkit-mask-image 0.1s",
          }}
        />



        {/* Content */}


        <div className="relative z-50 w-full h-[600px] overflow-hidden">
          {/* Centered text */}
          <div className="absolute inset-0 flex items-center justify-center z-10 row-auto flex-col">
            <div className="glassmorphism">
              <Heading variant="ultratitle" className="text-white text-center">
                Congressional Certification
              </Heading>
              <p className="text-white/70 text-base mt-5 text-center">
                Publish your Congressional App Challenge app - Come to The Congressional Hackathon
              </p>
            </div>
            <br />
            <Link href="/overview" sx={{ textDecoration: 'none' }}>
              <Button
                variant="primary"
                sx={{
                  bg: 'rgba(255, 255, 255, 0.1)', // translucent white
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)', // for Safari
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 'xl',
                  color: 'white',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    bg: 'rgba(255, 255, 255, 0.15)',
                    transform: 'scale(1.03)',
                  },
                }}
              >
                Get Started →
              </Button>

            </Link>
          </div>

          {/* Background image */}
          <Image
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/1993a55615ab2559dd935ba884ae07763df1ef93_u2974181345_create_an_image_where_it_is_a_header_which_contai_666a60fe-ff93-4b3e-8506-ca5fdbca675c_0.png"
            alt="Banner"
            width={1920}
            height={500}
            className="w-full h-full object-cover select-none pointer-events-none"
            priority
          />
        </div>



        {/* Banner */}
        <div className="relative z-50 w-full">
          <Image
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/c1197d3ebd9aad46dc1227879091fb8bf7cf7e15_group_1.svg"
            alt="Banner"
            width={1920}
            height={200}
            className="w-full h-auto select-none pointer-events-none"
            priority
          />
        </div>

        <div className="relative z-20 p-10 text-black flex flex-col items-center">
          <Card
            sx={{
              bg: 'sunken',
              borderRadius: 'lg',
              p: 4,
              textAlign: 'center',
              boxShadow: 'card',
              WebkitTapHighlightColor: 'transparent',
              transition: 'transform 0.125s ease-in-out, box-shadow 0.125s ease-in-out',
              '&:hover, &:focus': {
                transform: 'scale(1.0625)',
                boxShadow: 'elevated', // Optional: to enhance on hover
              },
            }}
          >

            <h1 className="text-4xl font-bold">Requirements:</h1>
            <ul className="list-disc list-inside mt-4 mb-4">
              <li>Open source your project on GitHub with a README.md</li>
              <li>Submit a playable link to your project in the Congressional App Challenge App submission</li>
              <li>Submit your project to the Congressional App Challenge</li>
            </ul>
            <Link href="/overview" sx={{ textDecoration: 'none' }}>
              <Button variant="primary">Learn more →</Button>
            </Link>
          </Card>
        </div>



        {/* Banner */}
        <div className="relative z-50 w-full">
          <Image
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/c1197d3ebd9aad46dc1227879091fb8bf7cf7e15_group_1.svg"
            alt="Banner"
            width={1920}
            height={200}
            className="w-full h-auto select-none pointer-events-none"
            priority
          />
        </div>

        <div className="relative z-50 max-w-3xl mx-auto p-6 ">
          <h1 className="text-4xl font-bold">Get Invited To The Congressional Hackathon</h1>
          <p className="mt-4">The Congressional Finalist Award comes with an invite to the Congressional Hackathon-an in-person Hackathon in the Capitol, Washington D.C. Here are the numbers:</p>
          <ul className="space-y-6 text-center">
            <li>
              <span className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                170
              </span>
              <p className="text-lg text-gray-700">students in Washington D.C.</p>
            </li>
            <li>
              <span className="text-6xl font-bold bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">
                $10
              </span>
              <p className="text-lg text-gray-700">towards your travel stipend for every hour worked on your project</p>
            </li>
            <li>
              <span className="text-6xl font-bold bg-gradient-to-r from-pink-500 to-red-600 bg-clip-text text-transparent">
                10+
              </span>
              <p className="text-lg text-gray-700">congressional representatives coming to see finished projects</p>
            </li>
          </ul>
          <p className="mt-4">Want to get started? RSVP using the link below, and start working on your project. Dont forget, every hour worked on a project counts $10 towards travel to Washington D.C. This only counts when logged with Hackatime.</p>

        </div>




        <div className="relative z-50 max-w-3xl mx-auto p-6 space-y-4">

          <Heading variant="headline">RSVP to get updates</Heading>

          <Box>
            <Grid gap={3} columns={[null, 2]} as="form" variant="cards.sunken">
              <Label>
                Full name
                <Input placeholder="Zach Latta" />
              </Label>
              <Label>
                Email
                <Input placeholder="joe@gmail.com" />
              </Label>
              <Label>
                Congressional District
                <Input placeholder="VT-1" />
              </Label>
              <Button
                as="button"
                type="submit"
                children="RSVP"
                sx={{ gridColumn: [null, 'span 2'] }}
              />
            </Grid>
          </Box>

          <Box>
            <Link href="https://hackclub.com/slack" sx={{ textDecoration: 'none' }}>
              <Card
                sx={{
                  backgroundImage: 'linear-gradient(135deg, #ec3750, #ff8c37)',
                  borderRadius: 'lg',
                  p: 4,
                  textAlign: 'center',
                  boxShadow: 'card',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    boxShadow: 'lg',
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <Heading variant="headline">Join the Hack Club Slack</Heading>
                <p sx={{ color: 'muted', fontSize: 2 }}>
                  Channel #congressional-app-challenge
                </p>
              </Card>
            </Link>
          </Box>

        </div>


        {/* Banner */}
        <div className="relative z-50 w-full">
          <Image
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/c1197d3ebd9aad46dc1227879091fb8bf7cf7e15_group_1.svg"
            alt="Banner"
            width={1920}
            height={200}
            className="w-full h-auto select-none pointer-events-none"
            priority
          />
        </div>
      </div>

      <div>
      <h1>Congressional District Map</h1>
      <CongressionalMap />
    </div>




    </ThemeUIProvider >
  );
}
