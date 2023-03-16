import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import './Projects.css';
import { Link } from 'react-router-dom';
import fitmeLogo from "./assets/fitmeLogo.png";
import './Fitme.css';
import Plx from 'react-plx';
import fitmeSC1 from './assets/fitmeSC1.png'
import fitmeSC2 from './assets/fitmeSC2.png'
import Typewriter from "typewriter-effect";
import appStoreButton from "./assets/appstorebutton.svg"
import usePageTracking from "./usePageTracking";

const appIconSize = .05;


function Fitme() {
  usePageTracking();

  const scroll = useScrollHandler();

  return (
    <>
      <Logo style={{ zIndex: 1000 }} />
      <div style={{ height: (1650 - (.005 * window.innerHeight + .05 * window.innerWidth)) + 'px', zIndex: '-1' }}></div>
      <div className={scroll ? "fixedElement" : "notFixedElement"} style={{ zIndex: '1' }} >
        <FirstDiv />
      </div>
      <div style={{ marginTop: '0vh' }}>
        <div style={{ opacity: scroll ? '0' : '1' }}>
          <SecondDiv />
        </div>
        <ThirdDiv style={{ opacity: 0, top: '-500vh' }} />
      </div>
      <FourthDiv style={{ marginTop: '100vh' }} />

      <div className="item-red" style={{ backgroundColor: 'rgb(235, 60, 52)', textDecorationColor: 'white', marginTop: '20vh', width: '30vw', textAlign: 'center', marginLeft: '35vw' }}>
        <Link to='/projects' className="logo" style={{ color: "white" }}> Back to Projects </Link>
      </div>
    </>
  );
}

function Logo() {
  return (
    <div className="flex-row-container" style={{
      zIndex: '3',
      position: 'sticky',
      top: '1.5vh',
      alignItems: 'center',
      paddingLeft: '2vw',
    }}>
      <Link to='/projects' className="logo"> baraq::projects:: </Link>
      <Plx parallaxData={plxAppLogo}>
        <div className="flex-row-container" style={{
          alignItems: 'center',
        }}>
          <img src={fitmeLogo} style={{
            height: .05 * vw,
            borderRadius: appIconSize * .2166 * vw,
            marginRight: '5px',
          }}
            alt="Fitme logo"
          />
          <Text style={{ fontFamily: 'futura, serif', fontSize: '36px', }}>Fitme</Text>
        </div>
      </Plx>
    </div>
  )
}

function FirstDiv() {
  return (
    <div className="flex-row-container" style={{
      height: '100vh',
      // paddingTop: '70vh',
    }}>
      <Plx parallaxData={plx1Image1} style={{
        marginLeft: '20vw',
        height: '80vh',
        marginTop: '12vh',
      }}>
        <img src={fitmeSC1} alt="Fitme discover page screencap" style={{
          pointerEvents: 'none',
          backgroundColor: 'white',
          height: '80vh',
        }} />
      </Plx><div>
        <Plx parallaxData={plx1Text1} style={{
          marginTop: '35vh',
          marginLeft: '2vw',
        }}>
          <Text style={{
            fontFamily: 'Nunito',
            fontSize: '4vw',
            // fontWeight: '800',
          }}>An eccommerce community</Text>
        </Plx>

        <Plx parallaxData={plx1Text2} style={{
          marginTop: '1vh',
          marginLeft: '2vw',
        }}>
          <div className="flex-row-container" style={{

          }}>
            <Text style={{
              fontFamily: 'Nunito',
              // fontWeight: '800',
              fontSize: '3vw',
            }}>for </Text>
            <div style={{ fontSize: '3vw', }}>
              <Typewriter
                options={{
                  strings: ["trendsetters.", "streetwearers.", "fashion-istas and -istos.",
                    "thrifters.", "sneakerheads.", "sustainable wearers.", "artsy DIYers."],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  deleteSpeed: 40,
                }}
              /* onselectstart={(e) => {
                console.log('selected!')
              }
              } */
              />
            </div>
          </div>
        </Plx>

        <Plx parallaxData={plx1Text3} style={{
          marginTop: '4vh',
          marginLeft: '1vw',
          zIndex: '10',
        }}>
          <a href="https://apps.apple.com/us/app/fitme-outfits-made-social/id1543589747" target="_blank" rel="noopener noreferrer">
            <img src={appStoreButton} alt="Available on the Apple App Store" className="noselect" style={{
              height: '5vh',
              width: '10vw',
            }} />
          </a>
        </Plx>



        {/* <Plx parallaxData={plx1Text3} style={{
            marginTop: '10vh',
            marginLeft: '2vw',
          }}>
            <Text style={{
              fontFamily: 'Nunito',
              fontSize: '3vw',
            }}>Be on the forefront of culture.</Text>
          </Plx> */}
      </div>
    </div>
    // </Plx >
  )
}

function SecondDiv() {
  return (
    <Plx parallaxData={fullDiv2} style={{ zIndex: '-1', }}>
      <div className="flex-row-container" style={{
        height: '100vh',
        paddingTop: '10vh',
        // paddingBottom: '100vh',
      }}>
        <div style={{
          marginLeft: '10vw',
        }}>
          {/* <Plx parallaxData={plx2Text1} style={{
            marginTop: '45vh',
            marginLeft: '2vw',
          }}> */}
          <div style={{
            marginTop: '45vh',
            marginLeft: '2vw',
          }}>
            <Text style={{
              fontFamily: 'Nunito',
              fontSize: '3vw',
            }}>Show off your fits.</Text>
          </div>
          {/* </Plx> */}
          {/* <Plx parallaxData={plx2Text2} style={{
            marginTop: '10vh',
            marginLeft: '2vw',
          }}> */}
          <div style={{
            marginTop: '10vh',
            marginLeft: '2vw',
          }}>
            <Text style={{
              fontFamily: 'Nunito',
              fontSize: '3vw',
            }}>Become a fashion influencer.</Text>
          </div>
          {/* </Plx> */}
          {/* <Plx parallaxData={plx2Text3} style={{
            marginTop: '10vh',
            marginLeft: '2vw',
          }}> */}
          <div style={{
            marginTop: '10vh',
            marginLeft: '2vw',
          }}>
            <Text style={{
              fontFamily: 'Nunito',
              fontSize: '3vw',
            }}>Sell your clothes.</Text>
          </div>
          {/* </Plx> */}
          {/* <Plx parallaxData={plx2Text4} style={{
            marginTop: '10vh',
            marginLeft: '2vw',
          }}> */}
          <div style={{
            marginTop: '10vh',
            marginLeft: '2vw',
          }}>
            <Text style={{
              fontFamily: 'Nunito',
              fontSize: '3vw',
            }}>Promote your brand.</Text>
            {/* </Plx> */}
          </div>
        </div>
        <Plx parallaxData={plx2Image1} style={{
          // marginLeft: '50vw',
          height: '80vh',
        }}>
          <img src={fitmeSC2} alt="Fitme profile page screencap" style={{
            pointerEvents: 'none',
            backgroundColor: 'white',
            height: '80vh',
            paddingLeft: '10vw'
          }} />
        </Plx>
      </div>
    </Plx>
  )
}

function ThirdDiv() {
  return (
    <div class="container" style={{
      marginTop: "50vh",
      marginRight: "2vw",
      marginLeft: "2vw",
    }}>
      <div class="item-red">Browse outfits for inspiration.</div>
      <div class="item-red">Easily buy linked clothes.</div>
      <div class="item-red">Express yourself.</div>
      <div class="item-red">Become a fashion influencer.</div>
      <div class="item-red">Sell your clothes.</div>
      <div class="item-red">Grow your brand.</div>
    </div>
  )
}

function FourthDiv() {
  return (
    <>
      <div style={{ marginTop: '15vh' }}></div>
      <div style={{ fontSize: '350%', fontFamily: 'nunito', marginLeft: '1vw', marginRight: '1vw', lineHeight: '2.0', textAlign: 'center' }}>
        <div style={{ textDecoration: 'underline' }}>How I grew from this project:</div>
        <div className="statItem" style={{ marginRight: '30vw', marginTop: '5vw' }}>Learned Javascript+Node.JS and Swift+SwiftUI.</div>
        <div className="statItem" style={{ marginLeft: '30vw', marginTop: '5vw' }}>8,000+ lines of Swift written.</div>
        <div className="statItem" style={{ marginRight: '30vw', marginTop: '5vw' }}>Designed predictive algorithm.</div>
        <div className="statItem" style={{ marginLeft: '30vw', marginTop: '5vw' }}>Created scalable, instant, enriched direct messaging with a group chats feature.</div>
        <div className="statItem" style={{ marginRight: '30vw', marginTop: '5vw' }}>Constructed with Google Cloud Platform Firebase (NoSQL).</div>
        <div className="statItem" style={{ marginLeft: '30vw', marginTop: '5vw' }}>Integrated Sign in With Apple, Google, and email.</div>
        <div className="statItem" style={{ marginRight: '30vw', marginTop: '5vw' }}>Learned and applied UI/UX design standards.</div>
        {/* <Text style={{ fontSize: '60px', fontFamily: 'nunito' }}>8,000+ lines of Swift written.</Text>
      <Text style={{ fontSize: '60px', fontFamily: 'nunito' }}>8,000+ lines of Swift written.</Text> */}
      </div>
    </>
  )
}

const plx1Image1 = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: window.innerWidth * 0.4,
        endValue: 0,
        property: "translateX",
      },
      {
        startValue: window.innerHeight * 0.6,
        endValue: 0,
        property: "translateY",
      },
    ],
  },
];

const plx1Text1 = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: window.innerWidth,
        endValue: 0,
        property: "translateX",
        // unit: "%",
      },
    ],
  },
];

const plx1Text2 = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: window.innerWidth,
        endValue: 900,
        property: "translateX",
        // unit: "%",
      },
    ],
  },
  {
    start: 500,
    end: 1000,
    properties: [
      {
        startValue: 900,
        endValue: 0,
        property: "translateX",
        // unit: "%",
      },
    ],
  },
];

const plx1Text3 = [
  {
    start: 0,
    end: 1000,
    properties: [
      {
        startValue: window.innerWidth,
        endValue: 900,
        property: "translateX",
        // unit: "%",
      },
    ],
  },
  {
    start: 1000,
    end: 1500,
    properties: [
      {
        startValue: 900,
        endValue: 0,
        property: "translateX",
        // unit: "%",
      },
    ],
  },
];

const div1Length = 1585;

// const fullDiv1 = [
//   {
//     start: 1000,
//     end: div1Length,
//     properties: [
//       // {
//       //   startValue: -500,
//       //   endValue: -500 + div1Length,
//       //   property: "translateY",
//       //   // unit: "%",
//       // },
//       // {
//       //   startValue: 1000,
//       //   endValue: 0,
//       //   property: "translateY",
//       //   // unit: "%",
//       // },
//     ],
//   },
// ];

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

const plxAppLogo = [
  {
    start: 0,
    end: 200,
    properties: [
      {
        startValue: 2,
        endValue: 1,
        property: "scale",
      },
      {
        startValue: window.innerHeight * 0.5 - ((appIconSize * vw)),
        endValue: 0,
        property: "translateY",
      },
      {
        startValue: window.innerWidth * 0.5 - ((appIconSize * vw * 2) + 181.14), // 181.14 = (5 (padding) * 2 (scale) + 171.14 (text size))
        endValue: 0,
        property: "translateX",
      },
    ],
  },
];
//(((appIconSize * vw + 5) * 2) + 171.14) * .05)

const plx2Image1 = [
  {
    start: div1Length,
    end: div1Length + 2000,
    properties: [
      {
        startValue: 0,
        endValue: 500,
        property: "translateY",
        // unit: "%",
      },
      // {
      //   startValue: 500,
      //   endValue: 0,
      //   property: "translateY",
      //   // unit: "%",
      // },
    ],
  },
];


/*
const plx2Text1 = [
  {
    start: div1Length,
    end: div1Length + 550,
    properties: [
      {
        startValue: 0,
        endValue: 0,
        property: "translateY",
        // unit: "%",
      },
    ],
  },
]
const plx2Text2 = [
  {
    start: div1Length + 400,
    end: div1Length + 500,
    properties: [
      {
        startValue: 500,
        endValue: 0,
        property: "translateY",
        // unit: "%",
      },
    ],
  },
  // {
  //   start: 500,
  //   end: 1000,
  //   properties: [
  //     {
  //       startValue: 900,
  //       endValue: 0,
  //       property: "translateX",
  //       // unit: "%",
  //     },
  //   ],
  // },
]
 
const plx2Text3 = [
  {
    start: div1Length + 200,
    end: div1Length + 2000,
    properties: [
      {
        startValue: 0,
        endValue: 0,
        property: "translateY",
        // unit: "%",
      },
    ],
  },
  // {
  //   start: 500,
  //   end: 1000,
  //   properties: [
  //     {
  //       startValue: 900,
  //       endValue: 0,
  //       property: "translateX",
  //       // unit: "%",
  //     },
  //   ],
  // },
]
 
const plx2Text4 = [
  {
    start: div1Length + 200,
    end: div1Length + 2000,
    properties: [
      {
        startValue: 0,
        endValue: 0,
        property: "translateY",
        // unit: "%",
      },
    ],
  },
  // {
  //   start: 500,
  //   end: 1000,
  //   properties: [
  //     {
  //       startValue: 900,
  //       endValue: 0,
  //       property: "translateX",
  //       // unit: "%",
  //     },
  //   ],
  // },
]
*/
const fullDiv2 = [
  {
    start: 0,
    end: div1Length,
    properties: [
      // {
      //   startValue: -500,
      //   endValue: -500 + div1Length,
      //   property: "translateY",
      //   // unit: "%",
      // },
    ],
  },
];

export const useScrollHandler = () => {
  const [scroll, setScroll] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < 1650;
      setScroll(scrollCheck);
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};

//DIV1
//For the stylish ["fashionistos and fashionistas", "streetwearers", "vintage thrifters", "sustainable wearers", "artsy DIYers", "trend riders"]<<typewriter.
//View outfits for inspiration.
//Easily buy linked clothes.

//DIV2
//For the rising brands.
//Influence modern fashion
//Sell your clothes 
//Promote your brand

//DIV3
//For the socialite.
//Follow your friends
//Send posts to friends

//DIV4
//Featured creators with follow links


//Can click each box for more description to explain
//Should have things that I learned

export default Fitme;

//ADD CHECKBOX IN FITME THAT PUTS A LEAF NEXT TO POST IF ITS SUSTAINABLE

//Add stats about fitme, explain it