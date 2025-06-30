"use client";

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
<Link href="/vendors" sx={{ textDecoration: 'none' }}>
  <Button variant="primary">Get Started</Button>
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
            <ul className="list-disc list-inside mt-4">
              <li>Apply for the Congressional App Challenge</li>
              <li>Spend at least 10 hours on your Congressional App Challenge project logged by Hackatime</li>
              <li>Open source your project on GitHub with a README.md</li>
              <li>Submit a playable link to your project in the Congressional App Challenge App submission</li>
              <li>Submit your project to the Congressional App Challenge</li>
            </ul>
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



          <Heading variant="headline">Sign Up</Heading>
          <Grid gap={3} columns={[null, 2]} as="form" variant="cards.sunken">
            <Label>
              Full name
              <Input placeholder="Zach Latta" />
            </Label>
            <Label>
              How are you primarily associated with Hack Club?
              <Select>
                <option value="" disabled hidden>
                  Select one…
                </option>
                <option value="club-leader">I lead a club</option>
                <option value="club-member">I am a club member</option>
                <option value="slack-member">I am active on Slack</option>
                <option value="alum">I am a Hack Club alum</option>
                <option value="none">None of the above</option>
              </Select>
            </Label>
            <Label variant="labelHoriz">
              <Checkbox />
              Remember me
            </Label>
            <Flex sx={{ flexWrap: 'wrap' }}>
              <Label variant="labelHoriz">
                <Radio name="letter" /> Alpha
              </Label>
              <Label variant="labelHoriz">
                <Radio name="letter" /> Bravo
              </Label>
              <Label variant="labelHoriz">
                <Radio name="letter" /> Charlie
              </Label>
            </Flex>
            <Label>
              Why do you want to come?
              <Textarea placeholder="Write a few sentences." />
            </Label>
            <Label>
              Slider
              <Slider color="red" />
            </Label>
            <Button
              as="button"
              type="submit"
              children="RSVP"
              sx={{ gridColumn: [null, 'span 2'] }}
            />
          </Grid>

          <Card
            sx={{
              bg: 'sunken', // Hack Club background shade
              borderRadius: 'lg',
              p: 4,
              textAlign: 'center',
              boxShadow: 'card',
            }}
          >
            <h2 sx={{ color: 'white', fontSize: 4, mb: 2 }}>Finalist Award</h2>
            <p sx={{ color: 'muted', fontSize: 2 }}>
              Recognized for outstanding performance in design
            </p>
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
      </div>




    </ThemeUIProvider >
  );
}
