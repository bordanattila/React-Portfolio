import React, { useState } from "react";
import resumePDF from "../assets/Attila_Bordan_resume.pdf";
import ResumeImage from "../images/resume_img.jpg";
import "../styles/Resume.css";
import Python from "../images/python-icon.png";
import HTML from "../images/html.png";
import CSS from "../images/css.png";
import JS from "../images/javascript-icon.png";
import Jquery from "../images/jquery-icon.png";
import MySql from "../images/mysql-icon.png";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { Box, ListItem, ListItemText, Grid } from '@mui/material';
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import styles from '../../styles.module.css'
const cards = [
  Python, MySql, Jquery, JS, CSS, HTML,
]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function Deck() {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    api.start(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      }
    })
    if (!down && gone.size === cards.length)
      setTimeout(() => {
        gone.clear()
        api.start(i => to(i))
      }, 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
            }}
          />
        </animated.div>
      ))}
    </>
  )
}

const Resume = () => {
  return (
    <div className="summary">
      <div className="skills container">

        <h2><u>Skills</u></h2>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
                <Grid container spacing={2}>
                  <Grid item >
                    <ListItem>
                      <ListItemText
                        primary="HTML"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="CSS"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="JavaScript"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Bootstrap"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Express"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Node.js"
                      />
                    </ListItem>
                  </Grid>
                  <Grid item >
                    <ListItem>
                      <ListItemText
                        primary="jQuery"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="MySql"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="MondoDB"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Mongoose"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Apollo Graph QL"
                      />
                    </ListItem>
                  </Grid>
                  <Grid item >
                    <ListItem>
                      <ListItemText
                        primary="Webpack"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Handlebars"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="React"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Material UI"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Python"
                      />
                    </ListItem>
                  </Grid>
                </Grid>
              </Box>
            </div >
            <div className="col-lg-4 col-md-6 col-sm-8 stack">

              <div className={styles.container}>
                <Deck />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <img className="resume_img" src={ResumeImage}></img>
            </div>
          </div>
        </div>

      </div>
      <a href={resumePDF} download="../assets/Attila_Bordan_Resume.pdf" target='_blank'>
        <div className="ui icon button" data-tooltip="Download resume in PDF">
          <CloudDownloadIcon className="icon" name="cloud download" />
        </div>
      </a>
      <div className="highlights container text-center">
        <div className="row justify-content-center">
          <div className="col-auto">

            <h2><u>Summary</u></h2>
            <p>Passionate and solutions-driven full stack web developer with lots of experience in supply chain management and retail. </p>
            <p>Strong communication, collaboration, problem-solving, and analytical skills. </p>
            <p>Recognized as a high performer for going above and beyond the job description and taking on additional projects.</p>
            <p>Ability to work in a fast-paced and diverse team environment developing solutions and exceeding expectations.</p>
            <h2><u>Education</u></h2>
            <ul className="education">
              <li> University of Minnesota - Full Stack Web Developer</li>
              <li><strong>MS</strong> Florida Institute of Technology - Supply Chain Management</li>
              <li><strong>BA</strong> American Military University - Logistics and Transportation Management</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Resume;
