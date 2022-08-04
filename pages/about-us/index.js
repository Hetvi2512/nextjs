import Head from 'next/head';
import React, { useEffect } from 'react';
import Header2 from '../../components/common/Header/Header2';
import AboutUsWrapper from './style';
import Footer from '../../components/common/Footer'
function AboutUs(props) {
    useEffect(() => {
        window.scroll(0, 0);
      }, [])
    
    return (
        <AboutUsWrapper>
        <Head>
          <title>About The Established - A Digital Publishing Platform | The ESTD</title>
          <meta name="description" content="The Established is a space to engage with a democratic and inclusive community. We create and curate culturally relevant content that has its pulse on the worlds of fashion, art, beauty, tech, auto and culture." />
        </Head>
        <Header2 />
        <div className='aboutus-main-div'>
          <div className='row ptp-8 ma-0 about-us-background'>
            <div className='col-lg-5 col-xl-5 col-md-5 col-sm-12 about-us'>
              ABOUT US
            </div>
            <div className='col-lg-7 col-xl-7 col-md-7 col-sm-12 Biotif-Light about-us-description'>
              <div className='Biotif-Light'>
                The Established started off as a casual dinner table
                conversation between the founders who wanted to bring
                back thought-provoking conversations with community
                at its core. Many zoom calls, late nights and excel sheets
                later, The Established—a digital platform at the forefront
                of a modern landscape, shaped by a community of <span className='Biotif-SemiBold'>conscious, authentic </span>
                and <span className='Biotif-SemiBold'> well-informed, progressive </span>
                consumers—was launched.
              </div>
              <div className='Biotif-Light'>
                Built together with a bold character, <span className='Biotif-SemiBold'>culturally diverse </span>
                contributors and <span className='Biotif-SemiBold'>impactful</span> collaborations, The Established
                is a space to engage with a <span className='Biotif-SemiBold'>democratic</span> and <span className='Biotif-SemiBold'>inclusive community. </span>
                We create and curate culturally relevant
                content that has its pulse on the worlds of fashion, art,
                beauty, tech, auto and culture.
              </div>
              <div className='Biotif-Light'>
                We’re not looking at our audience through the lens of a
                consumer, but rather, an audience that reflects members
                of society who are active, engaged, have both an interest
                in and responsibility toward the world they live in. If you
                have a definitive point of view and a unique voice, you’ve
                come to the right place.
              </div>
              <div className='Biotif-Light'>
                <span className='Biotif-SemiBold'>Work with us</span>: <a className='Biotif-Light' onClick={() => window.location = 'mailto:careers@theestablished.com'}>
                  careers@theestablished.com
                </a>
              </div>
            </div>
          </div>
          <div className='row ptp-8 ma-0 about-us-background about-us-web-view'>
            <div className='col-lg-5 col-xl-5 col-md-5 col-sm-12 about-us'>
              TEAM
            </div>
            <div className='col-lg-3 col-xl-3 col-md-3 col-sm-12 Biotif-Regular'>
              <div className='text-white'>
                <div className='pbp-10 Biotif-Regular'>
                  <div className='team-member Biotif-SemiBold'>Akash Sheth</div>
                  <div className='member-designation Biotif-Light'>FOUNDER</div>
                </div>
                <div className='pbp-10 Biotif-Regular'>
                  <div className='team-member Biotif-SemiBold'>Avanti Dalal</div>
                  <div className='member-designation Biotif-Light'>BEAUTY EDITOR</div>
                </div>
                <div className='pbp-10 Biotif-Regular'>
                  <div className='team-member Biotif-SemiBold'>Akshita Phoolka</div>
                  <div className='member-designation Biotif-Light'>CREATIVE LEAD</div>
                </div>
                <div className='pbp-10 Biotif-Regular'>
                  <div className='team-member Biotif-SemiBold'>Saurabh Gupta</div>
                  <div className='member-designation Biotif-Light'>CHIEF TECHNOLOGY OFFICER</div>
                </div>
  
              </div>
  
            </div>
            <div className='col-lg-3 col-xl-3 col-md-3 col-sm-12 '>
              <div className='text-white'>
                <div className='pbp-10 Biotif-Regular'>
                  <div className='team-member Biotif-SemiBold'>Shruti Thacker</div>
                  <div className='member-designation Biotif-Light'>CO-FOUNDER & EDITORIAL DIRECTOR</div>
                </div>
  
                <div className='pbp-10 Biotif-Regular'>
                  <div className='team-member Biotif-SemiBold'>Gauri Vij</div>
                  <div className='member-designation Biotif-Light'>BUSINESS EDITOR</div>
                </div>
                <div className='pbp-10 Biotif-Regular'>
                  <div className='team-member Biotif-SemiBold'>Himani Raina</div>
                  <div className='member-designation Biotif-Light'>GRAPHIC DESIGNER</div>
                </div>
  
              </div>
  
            </div>
          </div>
          <div className='about-us-mobile-view'>
          <div className='about-us'>
              TEAM
            </div>
            <div className='Biotif-Regular'>
              <div className='text-white'>
                <div className='pbp-10 Biotif-Regular'>
                  <div className='team-member Biotif-SemiBold'>Akash Sheth</div>
                  <div className='member-designation Biotif-Light'>FOUNDER</div>
                </div>
                <div className='pbp-10 Biotif-Regular'>
                <div className='team-member Biotif-SemiBold'>Shruti Thacker</div>
                  <div className='member-designation Biotif-Light'>CO-FOUNDER & EDITORIAL DIRECTOR</div>
                </div>
                <div className='pbp-10 Biotif-Regular'>
                <div className='team-member Biotif-SemiBold'>Avanti Dalal</div>
                  <div className='member-designation Biotif-Light'>BEAUTY EDITOR</div>
                </div>
                <div className='pbp-10 Biotif-Regular'>
                <div className='team-member Biotif-SemiBold'>Gauri Vij</div>
                  <div className='member-designation Biotif-Light'>BUSINESS EDITOR</div>
                </div>
              </div>
            </div>
              <div className='text-white'>
                <div className='pbp-10 Biotif-Regular '>
                <div className='team-member Biotif-SemiBold'>Akshita Phoolka</div>
                  <div className='member-designation Biotif-Light'>CREATIVE LEAD</div>
                </div>
                <div className='pbp-10 Biotif-Regular'>
                <div className='team-member Biotif-SemiBold'>Himani Raina</div>
                  <div className='member-designation Biotif-Light'>GRAPHIC DESIGNER</div>
                </div>
                <div className='pbp-10 Biotif-Regular'>
                <div className='team-member Biotif-SemiBold'>Saurabh Gupta</div>
                  <div className='member-designation Biotif-Light'>CHIEF TECHNOLOGY OFFICER</div>
                </div>
            </div>
          </div>
          <div className='row ptp-8 ma-0 about-us-background'>
            <div className='col-lg-5 col-xl-5 col-md-5 col-sm-12 about-us'>
              CONTRIBUTORS
            </div>
            <div className='col-lg-7 col-xl-7 col-md-7 col-sm-12 Biotif-Light about-us-description'>
              <div className='Biotif-Light'>
                Aatish Nath, Amit Gurbaxani, Anamika Butalia,
                Ankur Pathak , Anjan Sachar, Devika Chowdhary,
                Dhiram Shah, Hanadi M Habib, Hasina Khatib,
                Jaison Lewis, Kalyani Chawla, Kimi Dangor, Kriti
                Saraswat, Mona Varonica Campbell, Naina Hiranandani,
                Natasha Khuranna, Neharika Manjani, Nikhila Palat,
                Nolan Lewis, Pablo Chaterji, Phorum Pandya,
                Pranav Bhardwaj, Prachi Joshi, Praachi Raniwala,
                Priyanka Khanna, Rituparna Som, Rohan Hande,
                Roshni Bajal Sanghvi, Saloni Dhruv, Sandip Roy,
                Sarina Siddhanti, Shabana Vahi, Shaikh Ayaz,
                Shweta Malhotra, Sneha Mankani, Tito, Vasudha
                Rai, Zahra Amiruddin.
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </AboutUsWrapper>
    );
}

export default AboutUs