import React, { useEffect, useState } from 'react'
import { FaArrowDown, FaArrowUp, FaGithub, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link' // TODO ??
import MajgLogo from '../components/majg-logo'

import Container from '../components/container'
import { getAllPostsForHome, getMe } from '../lib/api'
import Alert from '../components/alert'
import Meta from '../components/meta'
import DevBar from '../components/dev-bar'
import { DEV } from '../lib/constants'
import { GrGraphQl } from 'react-icons/gr'
import { useRef } from 'react'

function devBar() {
  return (
    DEV && (
      <DevBar>
        <IconTextLink icon={GrGraphQl} text="Contentful" link="/api/graphiql" />
      </DevBar>
    )
  )
}

function IconTextLink({ icon, text, link }) {
  return (
    <div className="px-2">
      <Link href={link}>
        <a target="_blank" className="flex flex-col">
          {React.createElement(icon, { className: 'mx-auto h-8 w-8' })}
          <div className="font-light">{text}</div>
        </a>
      </Link>
    </div>
  )
}

const Section = React.forwardRef(function Section({ children }, ref) {
  return (
    <section className="relative min-h-full" ref={ref}>
      {children}
    </section>
  )
})

const useRefs = () => {
  const refs = useRef([])
  const ref = (i) => (ref) => (refs.current[i] = ref)
  return { current: refs.current, ref }
}

export default function Index({ preview, allPosts, me }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  const scrollRef = useRef()
  const sectionRefs = useRefs()
  const scrollTo = (i) =>
    scrollRef.current.scrollTo({
      top: sectionRefs.current[i].offsetTop - scrollRef.current.offsetTop,
      behavior: 'smooth',
    })

  return (
    <>
      <Meta title="Blog | MAJG" />
      <div className="h-screen flex flex-col">
        {devBar()}
        <div className="bg-surface">
          {preview && (
            <Alert>
              This is page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </Alert>
          )}
        </div>

        <Header />

        <main className="flex-grow overflow-hidden">
          <div className="h-full overflow-y-scroll" ref={scrollRef}>
            <Section ref={sectionRefs.ref(0)}>
              <Image
                src={me.picture.url}
                alt="Picture of the author"
                className="object-center pointer-events-none filter grayscale brightness-25"
                layout="fill"
                objectFit="cover"
              />
              <Container className="py-8 z-1 relative">
                <div className="justify-center">
                  <article className="prose prose-sm sm:prose">
                    <h1>Software Distiller</h1>

                    <h2>Core Values</h2>
                    <ul>
                      <li>
                        <i>Empathy</i> - share and unite
                      </li>
                      <li>
                        <i>Curiosity</i> - gather wisdom
                      </li>
                      <li>
                        <i>Truth</i> - seek out reality
                      </li>
                      <li>
                        <i>Strategy</i> - focus our aim
                      </li>
                      <li>
                        <i>Simplicity</i> - distill essence
                      </li>
                    </ul>

                    <h2>Value Proposition</h2>
                    <p>I'm driven to maximize long-term growth.</p>
                    <p>I commit to:</p>
                    <ul>
                      <li>Using empathetic questioning leadership</li>
                      <li>Building a disciplined highly competent team</li>
                      <li>Thinking critically, confronting brutal facts</li>
                      <li>
                        Collecting lucid market understanding and aligned goals
                      </li>
                      <li>Nurturing steady and innovative development</li>
                    </ul>
                    <p>Please reach out, ask me anything!</p>
                    <p>martingronlund at live dot se</p>
                  </article>
                </div>
              </Container>
              <div className="h-24">
                <div className="flex justify-center absolute py-8 bottom-0 w-full">
                  <FaArrowDown
                    className="text-white h-8 w-8 cursor-pointer"
                    onClick={() => {
                      scrollTo(1)
                    }}
                  />
                </div>
              </div>
            </Section>

            <Section ref={sectionRefs.ref(1)}>
              <div className="h-24">
                <div className="flex justify-center absolute py-8 w-full">
                  <FaArrowUp
                    className="text-black h-8 w-8 cursor-pointer"
                    onClick={() => {
                      scrollTo(0)
                    }}
                  />
                </div>
              </div>
              <Container>
                <article className="prose prose-sm sm:prose text-black sm:text-black">
                  <p>More to come</p>
                </article>
              </Container>
            </Section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

function Header() {
  return (
    <header>
      <div className="grid p-2 sm:grid-cols-3">
        {/* brand */}
        <div className="flex items-center gap-2 col-span-2 md:col-span-1">
          <div className="ring ring-black rounded-md h-14 w-14 items-center flex justify-center flex-shrink-0">
            <MajgLogo className="text-black" size={48} />
          </div>
          <div className="text-2xl sm:text-4xl">Martin Grönlund</div>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <DesktopNav />
        </div>
        <div className="hidden sm:flex items-center justify-end">
          <TabletNav />
          <DesktopActions />
        </div>
      </div>
    </header>
  )
}

function LinkedInLink() {
  return (
    <IconTextLink
      icon={FaLinkedin}
      text="LinkedIn"
      link="https://www.linkedin.com/in/martin-gr%C3%B6nlund-9140b8117/"
    />
  )
}

function GitHubLink() {
  return (
    <IconTextLink
      icon={FaGithub}
      text="GitHub"
      link="https://github.com/martingronlund"
    />
  )
}

function DesktopActions() {
  return (
    <div className="hidden md:flex">
      <LinkedInLink />
      <GitHubLink />
    </div>
  )
}

function DesktopNav() {
  return <nav className="hidden md:flex"></nav>
}

function MobileNav() {
  return (
    <div className="flex sm:hidden justify-around">
      <LinkedInLink />
      <GitHubLink />
    </div>
  )
}

function TabletNav() {
  return (
    <div className="hidden sm:flex md:hidden">
      <LinkedInLink />
      <GitHubLink />
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <Container>
        <MobileNav />
      </Container>
    </footer>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  const me = await getMe()
  return {
    props: { preview, allPosts, me },
  }
}
