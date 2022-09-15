import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from "next/script";
import Link from "next/link";

import { createClient } from "next-sanity";
import PortableText from "react-portable-text"

import imageUrlBuilder from '@sanity/image-url'
import NavBar from '../components/NavBar';


import moment from "moment"



export default function Home({ blogs, profile }) {

  const client = createClient({
    projectId: `${process.env.SANITY_PROJECT_ID}`,
    dataset: `${process.env.SANITY_CONFIG}`,
    useCdn: false
  });


  const builder = imageUrlBuilder(client);


  return (

    <>

      <Head>
        <meta charSet="utf-8" />

        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />

        <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />

        <title>Dinesh Rathod</title>

        <meta property="og:title" content="Homepage | Atom Template" />

        <meta property="og:locale" content="en_US" />

        <link rel="canonical" href="//" />

        <meta property="og:url" content="//" />

        <meta name="description" content="Dinesh rathod is full stack web devloper"></meta>

        <meta name="robots" content="index, follow" />

        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta name="dinesh"
          content="Full stack Web developer" />

        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

        <meta name="theme-color" content="#5540af" />

        <meta property="og:site_name" content="dinesh rathod" />

        <meta property="og:image" content="//assets/img/social.jpg" />


        <link crossOrigin="crossorigin" href="https://fonts.gstatic.com" rel="preconnect" />

        <link as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload" />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet" />

        <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />

        <link crossOrigin="anonymous" href="/assets/styles/main.min.css" media="screen" rel="stylesheet" />


      </Head>

      <div>

        {/* Script Load */}
        <Script src="/assets/js/main.js"></Script>

        <NavBar />


        <div>
          <div className="relative bg-cover bg-center bg-no-repeat py-8"
            style={{ backgroundImage: "url(/assets/img/bg-hero.jpg)" }}>
            <div
              className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat">
            </div>

            <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
              <div className="flex flex-col items-center justify-center lg:flex-row">

                {/* avatar */}
                <div className="rounded-full border-8 border-primary shadow-xl">
                  <img src="/assets/img/profile_img.jpg" className="rounded-full h-60  w-60 object-fit" alt="author" />
                </div>
                <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">

                  {/* Name */}
                  <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                    Hello I&apos;m Dinesh Rathod
                  </h1>

                  {/* Links */}
                  <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                    <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                      <p className="font-body text-lg uppercase text-white">Let&apos;s connect</p>
                      <div className="hidden sm:block">
                        <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                      </div>
                    </div>
                    <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">

                      <Link href="https://github.com/codewithdinesh/" className="pl-4 m-2">
                        <i className="bx bxl-github text-4xl m-1 text-white hover:text-red-300 cursor-pointer"></i>
                      </Link>
                      <Link href="https://www.linkedin.com/in/dinesh-rathod-726058210/" className="pl-4 m-2">
                        <i className="bx bxl-linkedin text-4xl m-1 text-white hover:text-blue-300  cursor-pointer"></i>
                      </Link>
                      <Link href="/#" className="pl-4 m-2">
                        <i className="bx bxl-twitter text-4xl m-1 text-white hover:text-blue-300 cursor-pointer"></i>
                      </Link>
                      <Link href="https://www.instagram.com/dineshrathod03/" className="pl-4 m-2">
                        <i className="bx bxl-instagram text-4xl m-1 text-white hover:text-red-300  cursor-pointer"></i>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="bg-grey-50" id="about">
            <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
              <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
                <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                  Who am I?
                </h2>
                <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                  I&apos;m Dinesh Rathod, a Full stack Web Developer & Android Developer
                </h4>
                <p className="pt-6 font-body leading-relaxed text-grey-20">
                  Extremely driven to develop my skills and grow professionally.
                  Currently pursuing my Bachelors. A keen learner trying and exploring every field..always making sure i love the work i do.
                  Have knowledge about full stack web devlopement and Android Development.
                  Currently learning AI.
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}

          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl pt-10">
            Skills
          </h2>

          <div className='container flex flex-col items-center py-8 md:py-8 lg:flex-row' >
            <div className="w-full  column-1 p-5">

              {/* HTML css */}
              <div>
                <div className="flex items-end justify-between ">
                  <h4 className="font-body font-semibold uppercase text-black">
                    HTML & CSS
                  </h4>
                  <h3 className="font-body text-2xl font-bold text-primary">90%</h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                  <div className="h-3 rounded-full bg-primary" style={{ width: "90%" }}></div>
                </div>
              </div>

              {/* Python */}
              <div className="pt-6">
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">Python</h4>
                  <h3 className="font-body text-2xl font-bold text-primary">90%</h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                  <div className="h-3 rounded-full bg-primary" style={{ width: "90%" }}></div>
                </div>
              </div>

              {/* javascript */}
              <div className="pt-6">
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">
                    Javascript
                  </h4>
                  <h3 className="font-body text-2xl  font-bold text-primary">96%</h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                  <div className="h-3 rounded-full bg-primary" style={{ width: " 96%" }}></div>
                </div>
              </div>

              {/* C */}
              <div className="pt-6">
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">
                    C
                  </h4>
                  <h3 className="font-body text-2xl font-bold text-primary">90%</h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                  <div className="h-3 rounded-full bg-primary" style={{ width: " 96%" }}></div>
                </div>
              </div>

              {/* CPP */}
              <div className="pt-6">
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">
                    C++
                  </h4>
                  <h3 className="font-body text-2xl font-bold text-primary">90%</h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                  <div className="h-3 rounded-full bg-primary" style={{ width: " 96%" }}></div>
                </div>
              </div>


              {/* Java*/}
              <div className="pt-6">
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">
                    Java
                  </h4>
                  <h3 className="font-body text-2xl font-bold text-primary">90%</h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                  <div className="h-3 rounded-full bg-primary" style={{ width: " 96%" }}></div>
                </div>
              </div>

            </div>

            <div className="w-full p-5 column-1 " id='skills'>

              {/* React*/}
              <div>
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">
                    React
                  </h4>
                  <h3 className="font-body text-2xl font-bold text-primary">95%</h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                  <div className="h-3 rounded-full bg-primary" style={{ width: " 96%" }}></div>
                </div>
              </div>

              {/* NextJs */}
              <div className="pt-6">
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">
                    NextJs
                  </h4>
                  <h3 className="font-body text-2xl font-bold text-primary">90%</h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                  <div className="h-3 rounded-full bg-primary" style={{ width: " 96%" }}></div>
                </div>
              </div>

              {/* Nodejs */}
              <div className="pt-6">
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">
                    NodeJs
                  </h4>
                  <h3 className="font-body text-2xl font-bold text-primary">90%</h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                  <div className="h-3 rounded-full bg-primary" style={{ width: " 96%" }}></div>
                </div>
              </div>


              {/* Android */}
              <div className="pt-6">
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">Android Development(Java)</h4>
                  <h3 className="font-body text-2xl font-bold text-primary">88%</h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                  <div className="h-3 rounded-full bg-primary" style={{ width: "88%" }}></div>
                </div>
              </div>

              {/* Firebase*/}
              <div className="pt-6">
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">Firebase</h4>
                  <h3 className="font-body text-2xl font-bold text-primary">85%</h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                  <div className="h-3 rounded-full bg-primary" style={{ width: "85%" }}></div>
                </div>
              </div>

              {/* Sanity */}
              <div className="pt-6">
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">Sanity</h4>
                  <h3 className="font-body text-2xl font-bold text-primary">80%</h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                  <div className="h-3 rounded-full bg-primary" style={{ width: "80%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio */}
          {/* show all project after */}
          <div className="container py-16 md:py-20" id="project">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Check out my Portfolio
            </h2>
            <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            </h3>

            <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">

              {/* Video Social Media */}
              {/* <Link href="/#" className="bg-purple-300">
                <img src="/assets/img/video-social-media.jpg" className="h-60 object-contain w-full rounded-lg" alt="Video Social media" />
              </Link> */}


              {/* Tailoring Site */}
              <Link href="/" className="mx-auto h-10 transform transition-all hover:scale-105 md:mx-0">
                <img src="/assets/img/tailoring-site.png" className="w-full shadow" alt="Tailoring Site" />
              </Link>

              {/* News Site */}
              <Link href="/" className="mx-auto  transform transition-all hover:scale-105 md:mx-0">
                <img src="/assets/img/news-adda.png" className="w-full shadow" alt="portfolio image" />
              </Link>

              {/* reseult management system */}
              <Link href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
                <img src="/assets/img/result-management-system.png" className="w-full shadow " alt="portfolio image" />
              </Link>

            </div>
          </div>


          {/* Blogs section */}
          <div className="bg-grey-50" id="blog">
            <div className="container py-16 md:py-20">
              <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                I also like to write
              </h2>
              <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                Check out my latest posts!
              </h4>
              <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">


                {/* Blogs */}
                {
                  blogs.map((e) => {
                    return <Link href={`/blog/${e.slug.current}`} className="shadow" key={e.slug.current}>

                      <div>

                        <div style={{ backgroundImage: `url(${builder.image(e.mainImage).url() || '/assets/img/post-03.png'})` }}
                          className="group relative h-72 bg-contain bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72 object-contains">

                          <span
                            className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50 cursor-pointer"></span>

                          <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base cursor-pointer">Read
                            More</span>
                        </div>
                        <div className="bg-white py-6 px-5 xl:py-8">
                          <span className="block font-body text-lg font-semibold text-black">{e.title}</span>
                          <span className="block pt-2 font-body text-grey-20"> {moment(e.publishedAt).format("Do MMMM YYYY, h:mm A").toString()}</span>
                        </div>
                      </div>
                    </Link>
                  })
                }



              </div>
              {/* See All Blog Button */}
              <Link href={"/blogs"} >

                <span className=" mt-5 p-1 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20 cursor-pointer">
                  See More Blogs</span>
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="container py-16 md:py-20" id="contact">

            <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              Have Any Questions? Contact Me
            </h4>

            {/* 
            <form className="mx-auto w-full pt-10 sm:w-3/4">
              <div className="flex flex-col md:flex-row">
                <input className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
                  placeholder="Name" type="text" id="name" />
                <input
                  className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
                  placeholder="Email" type="text" id="email" />
              </div>
              <textarea className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
                placeholder="Message" id="message" cols="30" rows="10"></textarea>
              <button
                className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20">
                Send
                <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
              </button>
            </form> 
            */}


            <div className="flex flex-col pt-16 lg:flex-row  items-center justify-center">

              {/* email */}
              <div
                className=" w-full  border-2  border-grey-60 px-6 py-6 sm:py-8  m-2" >
                <div className="flex items-center">
                  <i className="bx bx-envelope text-2xl text-grey-40"></i>
                  <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                    My Email
                  </p>
                </div>
                <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                  dineshrathod0198@gmail.com
                </p>
              </div>

              {/* address */}
              <div
                className="w-full column-1  border-2 border-grey-60 px-6 py-6 sm:py-8 m-2">
                <div className="flex items-center">
                  <i className="bx bx-map text-2xl text-grey-40"></i>
                  <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                    My Address
                  </p>
                </div>
                <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                  Alibag
                </p>
              </div>

              {/* Social Icons */}
              <div
                className="w-full column-1  border-2 border-grey-60 px-6 py-6 sm:py-8 m-2">

                <div className="flex items-center justify-center pt-5 sm:justify-center sm:pt-0">

                  <Link href="https://github.com/codewithdinesh/" className="pl-4 m-2">
                    <i className="bx bxl-github text-4xl m-1 text-primary  hover:text-red-300 cursor-pointer"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/dinesh-rathod-726058210/" className="pl-4 m-2">
                    <i className="bx bxl-linkedin text-4xl m-1 text-primary  hover:text-blue-300  cursor-pointer"></i>
                  </Link>
                  <Link href="/#" className="pl-4 m-2">
                    <i className="bx bxl-twitter text-4xl m-1 text-primary  hover:text-blue-300 cursor-pointer"></i>
                  </Link>
                  <Link href="https://www.instagram.com/dineshrathod03/" className="pl-4 m-2">
                    <i className="bx bxl-instagram text-4xl m-1 text-primary  hover:text-red-300  cursor-pointer"></i>
                  </Link>
                </div>
              </div>


            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="bg-primary">
          <div className="container flex flex-col justify-between p-2 sm:flex-row items-center">
            <p className="text-center font-body text-white md:text-left">
              &copy; Copyright 2022 Dinesh Rathod
            </p>

            <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
              <Link href="https://github.com/codewithdinesh/" className="pl-4 m-2">
                <i className="bx bxl-github text-4xl m-1 text-white hover:text-red-300 cursor-pointer"></i>
              </Link>
              <Link href="https://www.linkedin.com/in/dinesh-rathod-726058210/" className="pl-4 m-2">
                <i className="bx bxl-linkedin text-4xl m-1 text-white hover:text-blue-300  cursor-pointer"></i>
              </Link>
              <Link href="/#" className="pl-4 m-2">
                <i className="bx bxl-twitter text-4xl m-1 text-white hover:text-blue-300 cursor-pointer"></i>
              </Link>
              <Link href="https://www.instagram.com/dineshrathod03/" className="pl-4 m-2">
                <i className="bx bxl-instagram text-4xl m-1 text-white hover:text-red-300  cursor-pointer"></i>
              </Link>
            </div>
          </div>
        </div>

      </div >



    </>
  )
}

export async function getServerSideProps(context) {


  // await console.log(`Env: ${process.env.SANITY_PROJECT_ID}`)

  const client = createClient({
    projectId: `${process.env.SANITY_PROJECT_ID}`,
    dataset: `${process.env.SANITY_CONFIG}`,
    useCdn: false
  });

  const query = `*[_type == "post"][0...3]`;
  const blogs = await client.fetch(query);

  /*
  const profileQuery = `*[_type == "author"][0]`;
   const profile = await client.fetch(profileQuery);
  */
  return {
    props: {
      blogs
    }
  }
}
