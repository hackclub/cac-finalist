"use client";

import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import Image from "next/image";
import { useEffect, useRef } from "react";
import theme from "@hackclub/theme"
import Nav from './components/nav'
import Meta from '@hackclub/meta'

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


  const bgRef = useRef(null);
  const PARALLAX = 0.6;                  // 0 – 1  (smaller = slower)

  useEffect(() => {
    let rafId;

    const update = () => {
      if (bgRef.current) {
        // move the banner up more slowly than the page scrolls
        const offset = window.scrollY * (1 - PARALLAX);
        bgRef.current.style.transform = `translateY(-${offset}px)`;
      }
      rafId = requestAnimationFrame(update);
    };

    update();                            // start the loop
    return () => cancelAnimationFrame(rafId);
  }, []);




  return (
    <ThemeUIProvider theme={theme}>
        <Meta
        name="Hack Club Congressional App Challenge Finalist Award"
        description={`Ship and open-source your CAC project, gain an award and invitation to the Congressional Hackathon!`}
      />
      <Nav />

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


        <div className="relative z-50 w-full h-[600px] overflow-hidden bg-[--cac-blue]">
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
          </div>

          {/* Background image */}
          <div
            ref={bgRef}
            className="absolute inset-0 z-0 select-none pointer-events-none will-change-transform"
            style={{ height: "120%", top: "-10%" }}
          >
            <Image
              src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/1993a55615ab2559dd935ba884ae07763df1ef93_u2974181345_create_an_image_where_it_is_a_header_which_contai_666a60fe-ff93-4b3e-8506-ca5fdbca675c_0.png"
              alt="Banner"
              fill
              className="object-cover"
              priority
            />
          </div>
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

        {/*About */}
        <div className="relative z-50 max-w-3xl mx-auto p-6 pb-10">
          <p className="text-4xl font-bold text-black">Hack Club Congressional App Challenge</p>
          <p className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-red-600 bg-clip-text text-transparent underline decoration-black">
            Finalist Award
          </p>



          <p className="mt-4 text-black">Every year, there are thousands of students who compete in the Congressional App Challenge. However, only a couple hundred get to go to the capital. For the 2025-2026 Congressional App Challenge, Hack Club would like to recognise the real winners-anybody who open sources their project and publishes it for the world to see.</p>


          <div className="relative z-50 max-w-3xl mx-auto p-6 space-y-4">
            <Box>
              <Link href="https://forms.hackclub.com/congressional-app-challenge" sx={{ textDecoration: 'none' }}>
                <Card
                  sx={{
                    position: 'relative',
                    overflow: 'visible',
                    backgroundImage: 'linear-gradient(135deg, #00c9a7, #0086ed)',
                    borderRadius: 'lg',
                    p: 4,
                    pt: 20, // space under sticker
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
                  {/* Sticker-style image (no shadow, no shape constraints) */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '-40%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '300px',
                      height: 'auto',
                    }}
                  >
                    <Image
                      src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/8ce5cfe4471f476d3a010392f2c9d6b734b10608_image.png"
                      alt="Sticker"
                      width={300}
                      height={0}
                      style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                        display: 'block',
                      }}
                      priority
                    />
                  </Box>


                  <Heading variant="headline" sx={{ mt: 2 }}>
                    Get Free Stickers
                  </Heading>
                  <p sx={{ color: 'muted', fontSize: 2 }}>
                    Congressional App Challenge x Hack Club Stickers!!!
                  </p>
                </Card>
              </Link>
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
        </div>

        {/* blue Banner */}
        <div className="relative z-50 w-full">
          <Image
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/380500f8aa4621bbeb57c272b1de4d899944248f_group_2.svg"
            alt="Banner"
            width={1920}
            height={200}
            className="w-full h-auto select-none pointer-events-none"
            priority
          />
        </div>



        <div className="relative z-50 max-w-3xl mx-auto p-6 pb-10">
          <h1 className="text-4xl font-bold text-black">Get Invited To The Congressional Hackathon</h1>
          <p className="mt-4 text-black">The Congressional Finalist Award comes with an invite to the Congressional Hackathon-an in-person Hackathon in the Capitol, Washington D.C. Here are the numbers:</p>
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
          <p className="mt-4 text-black">Want to get started? RSVP using the link below, and start working on your project. Dont forget, every hour worked on a project counts $10 towards travel to Washington D.C. This only counts when logged with Hackatime.</p>

        </div>







        {/* blue Banner */}
        <div className="relative z-50 w-full">
          <Image
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/380500f8aa4621bbeb57c272b1de4d899944248f_group_2.svg"
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
              bg: '#E0E6ED',
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

            <h1 className="text-4xl font-bold text-black">Requirements:</h1>
            <ul className="list-disc list-inside mt-4 mb-4 text-black">
              <li>Open source your project on GitHub with a README.md</li>
              <li>Submit a playable link to your project in the Congressional App Challenge App submission</li>
              <li>Submit your project to the Congressional App Challenge</li>
            </ul>
            <Link href="/overview" sx={{ textDecoration: 'none' }}>
              <Button variant="primary">Get Started →</Button>
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
      </div>

      <div>
        <Heading variant="headline" sx={{ m: 4 }} >Congressional District Submission Leaderboard</Heading>
        <p className="m-8">Want to help your district gain participation? Contact your local representatives and run events to boost participation!</p>
        <CongressionalMap />
      </div>
    </ThemeUIProvider >
  );
}
