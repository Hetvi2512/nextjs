import React, { useEffect } from 'react'
import Header from '../../components/common/Header/Header2';
import Footer from '../../components/common/Footer';
import Mailchimp from '../../components/views/Mailchimp/Mailchimp';
import Head from 'next/head';
const NewsLetter = () => {
    useEffect(() => {
        window.scroll(0, 0);

    }, [])

    return (
        <div>
            <Head>
                <title>Newsletter Subscription for The Established | Subscribe for Latest News</title>
                <meta name="description" content="Get a fresh perspective on fashion, beauty and culture straight in your inbox. Become a part of our community of conscious, authentic and well-informed, progressive readers. " />
            </Head>
            <Header />
            <div className='newsletter-main-div'>
                {/* <div className='newsletter-main-img'>
                    <img src={newsletterimg} alt="" />
                </div> */}
                <div className='news-letter-main'>
                    <Mailchimp />
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default NewsLetter