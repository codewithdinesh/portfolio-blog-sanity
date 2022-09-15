import { useRouter } from 'next/router'
import Head from 'next/head'
import { createClient } from "next-sanity";
import PortableText from "react-portable-text"
import NavBar from '../../components/navbar.js'

import imageUrlBuilder from '@sanity/image-url'

// date formating import
import moment from "moment"
import Link from 'next/link';

const Post = ({ blog, profile }) => {
    const router = useRouter()

    const client = createClient({
        projectId: "7ncnu8yj",
        dataset: "production",
        useCdn: false
    });


    const builder = imageUrlBuilder(client);

    return <><>
        <Head>
            <meta charSet="utf-8" />

            <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />

            <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />

            {/* <title>{blog.title}</title> */}

            <meta property="og:title" content="How to become a frontend developer | Atom Template" />

            <meta property="og:locale" content="en_US" />

            <link rel="canonical" href="//post" />

            <meta property="og:url" content="//post" />

            <meta name="description"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

            <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

            <meta name="theme-color" content="#5540af" />

            <meta property="og:site_name" content="Atom Template" />

            <meta property="og:image" content="//assets/img/social.jpg" />

            <meta name="twitter:card" content="summary_large_image" />

            <meta name="twitter:site" content="@tailwindmade" />

            <link crossOrigin="crossorigin" href="https://fonts.gstatic.com" rel="preconnect" />

            <link as="style"
                href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
                rel="preload" />

            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
                rel="stylesheet" />

            <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />

            <link crossOrigin="anonymous" href="/assets/styles/main.min.css" media="screen" rel="stylesheet" />

            <script defer src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"></script>

            <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>



            <link rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/atom-one-dark.min.css" />


        </Head>
        <NavBar profile={profile} />

        <div className='mt-10'>
            <div className="container py-6 md:py-10">
                <div className="mx-auto max-w-4xl">
                    <div className="">

                        {/* Blog Title */}
                        <h1
                            className="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
                            {blog.title}
                        </h1>

                        {/* Blog poster Details */}
                        <div className="flex items-center pt-5 md:pt-10">
                            <div>
                                <img src={`${builder.image(profile.image).width(200).height(200).url() || "/assets/img/profile_img.jpg"}`}
                                    className="h-20 w-20 rounded-full border-2 border-grey-70 shadow"
                                    alt="author image" />
                            </div>
                            <div className="pl-5">
                                <span className="block font-body text-xl font-bold text-grey-10">By {profile.name}</span>
                                <span className="block pt-1 font-body text-xl font-bold text-grey-30">
                                    {moment(blog.publishedAt).format("Do MMMM YYYY, h:mm A").toString()}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Main Post Content */}
                    <div className="prose max-w-none pt-8">
                        <PortableText
                            content={blog.body}
                            projectId="7ncnu8yj"
                            dataset="production"

                            serializers={{
                                h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                                li: ({ children }) => <li className="special-list-item">{children}</li>,
                            }}
                        />

                    </div>

                    {/* navigation */}
                    <div className="mt-10 flex justify-between border-t border-lila py-12">
                        <Link href="/" className="flex items-center">
                            <i className="bx bx-left-arrow-alt text-2xl text-primary"></i>
                            <span
                                className="block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5">Previous
                                Post</span>
                        </Link>
                        <Link href="/" className="flex items-center">
                            <span className="block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5">Next
                                Post</span>
                            <i className="bx bx-right-arrow-alt text-2xl text-primary"></i>
                        </Link>
                    </div>


                    {/* Profile section */}
                    <div
                        className="flex flex-col items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20">
                        <div className="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
                            <img src={`${builder.image(profile.image).width(400).height(400).url() || "/assets/img/blog-author.jpg"}`} className="rounded-full shadow" alt="author image" />
                        </div>
                        <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
                            <h3 className="pt-10 font-body text-2xl font-bold text-secondary md:pt-0">
                                {profile.name}
                            </h3>

                            <p
                                className="pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9">

                            </p>
                            <PortableText
                                // Pass in block content straight from Sanity.io
                                content={profile.bio}
                                projectId="7ncnu8yj"
                                dataset="production"
                                // Optionally override marks, decorators, blocks, etc. in a flat
                                // structure without doing any gymnastics
                                serializers={{
                                    h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                                    li: ({ children }) => <li className="special-list-item">{children}</li>,
                                }}
                            />

                            <div className="flex items-center justify-center pt-5 md:justify-start">


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
        </div>

        {/* Footer */}
        <div className="bg-primary">
            <div className="container flex flex-col justify-between py-6 sm:flex-row">
                <p className="text-center font-body text-white md:text-left">
                    © Copyright 2022. All right reserved, ATOM.
                </p>
                <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
                    <Link href="/">
                        <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
                    </Link>
                    <Link href="/" className="pl-4">
                        <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
                    </Link>
                    <Link href="/" className="pl-4">
                        <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
                    </Link>
                    <Link href="/" className="pl-4">
                        <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                    </Link>
                    <Link href="/" className="pl-4">
                        <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
                    </Link>
                </div>
            </div>
        </div>

    </> </>
}

export default Post

export const getServerSideProps = async (context) => {
    const { slug } = context.query
    const client = createClient({
        projectId: "7ncnu8yj",
        dataset: "production",
        useCdn: false
    });
    const query = `* [_type == "post" && slug.current == '${slug}'][0]`;
    const blog = await client.fetch(query);

    // console.log("Ref:", blog.author._ref)

    const profileQuery = `* [_type == "author" && _id == "${blog.author._ref}"][0]`;
    const profile = await client.fetch(profileQuery);

    return {
        props: {
            blog, profile
        }
    }
}