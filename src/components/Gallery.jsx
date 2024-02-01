import React from 'react'
import {  useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

// images import
import picture1 from '../assets/picture13.jpg'
import picture2 from '../assets/picture11.jpg'
import picture3 from '../assets/picture12.jpg'
import picture4 from '../assets/picture17.jpg'
import picture5 from '../assets/picture15.jpg'
import picture6 from '../assets/picture16.jpg'
import picture7 from '../assets/picture14.jpg'

export default function Gallery() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end end']
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7])
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])

  const images = [
    {
      src: picture1,
      scale: scale4
    },
    {
      src: picture2,
      scale: scale5
    },
    {
      src: picture3,
      scale: scale6
    },
    {
      src: picture4,
      scale: scale6
    },
    {
      src: picture5,
      scale: scale7
    },
    {
      src: picture6,
      scale: scale5
    },
    {
      src: picture7,
      scale: scale8
    },
  ]

  return (
    <div ref={container} className="container">
      <div className="sticky">
        {
          images.map(({src, scale}, index) => {
            return <motion.div style={{scale}} key={index} className="el">
              <div className="image-container">
                  <img src={src} alt="picture 1" />
              </div>
            </motion.div>
          })
        }
      </div>
    </div>
  )
}
