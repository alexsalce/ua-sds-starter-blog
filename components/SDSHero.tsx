'use client'

// this is a custom landing page hero component, go ahead and make it your own (you don't have to use it) (sds_custom)

// React and Next.js imports
import Image from 'next/image'

// UI component imports
import * as Craft from 'components/craft'

// Asset imports
import Placeholder from 'public/static/images/avatar.png'

// Framer
import { motion } from 'framer-motion'

const SDSHero = () => {
  return (
    <Craft.Section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView="visible"
        viewport={{ once: false }}
        animate={{ opacity: [0, 1], transition: { staggerChildren: 0.15 } }}
        transition={{ ease: 'easeIn', duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.01 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        {/* <div className="flex flex-row justify-center">
          <Image
            src={'/static/images/logo.png'}
            alt="SDS"
            width={400}
            height={20}
            className="w-400 h-20 justify-center"
          />
        </div> */}
        <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12">
          <div className="flex flex-row items-center">
            <Image
              src={Placeholder}
              alt="wilbur"
              width={90}
              height={90}
              className="h-60 w-60 rounded-full"
            />
          </div>
          <div className="flex flex-col gap-6 py-4 font-bold">
            <h3 className="!my-0 text-3xl font-extrabold leading-9 tracking-tight text-primary-800 dark:text-primary-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Hi, I'm Wilbur
            </h3>
            <p className="text-primary-DEFAULT text-2xl leading-[1.4] opacity-65">
              Welcome to my online portfolio! I keep all of my latest projects, CV, and blog posts
              here. Bear Down!
            </p>
            <p>
              <Image
                src={'/static/images/logo.png'}
                alt="SDS"
                width={275}
                height={10}
                className="w-275 h-10 justify-center"
              />
            </p>
          </div>
        </Craft.Container>
      </motion.div>
    </Craft.Section>
  )
}

export default SDSHero
