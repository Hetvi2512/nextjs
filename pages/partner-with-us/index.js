import React, { useEffect } from "react";
import Head from "next/head";
import Header2 from "../../components/common/Header/Header2";
import Footer from '../../components/common/Footer'
import PartnerWithUsWrapper from './partnerWithUsStyle'
function PartnerWithUs(props) {
  useEffect(() => {
    window.scroll(0, 0);
  }, [])

  return (
    <div>
      <PartnerWithUsWrapper>
        <Head >
          <title>
            Connect with The Established | Partner & Collaborate with The
            Established
          </title>
          <meta
            name="description"
            content="For more details on how to partner with us, drop us an email on contact@theestablished.com and reach out to a well-informed audience"
          />
        </Head>
        <Header2 />
        <div className="partner-background">
          <div className="partner-title">PARTNER WITH US</div>
          <div className="partner-description pbp-10 partner-with-us-main">
            <div className="Biotif-Light">
              The Established is a digital platform shaped by and for a
              community of conscious, authentic and well-informed, progressive
              consumers.
            </div>
            <div className="Biotif-Light">
              Through various mediums, we engage on a real-time basis with
              diverse individuals—coming together with a common vision of
              riveting, relevant and disruptive conversations centred around the
              worlds of fashion, beauty, culture, tech, auto and entertainment.
            </div>
            <div className="Biotif-Light">
              Our partnership solutions reach high-quality responsive audiences
              via
              <div className="Biotif-SemiBold mtp-2">→ newsletter</div>
              <div className="Biotif-SemiBold">
                → branded content through social media
              </div>
              <div className="Biotif-SemiBold">
                → online display advertisements on our website
              </div>
              <div className="Biotif-SemiBold">
                → collaboration opportunities through our intellectual
                properties
              </div>
            </div>
            <div className="Biotif-Light" style={{ lineHeight: 1.3 }}>
              For more details on how to partner with us, drop us an email on{" "}
              <a
                className="Biotif-SemiBold"
                onClick={() =>
                  (window.location = "mailto:contact@theestablished.com")
                }
              >
                contact@theestablished.com
              </a>{" "}
              and reach out to a well-informed audience
            </div>
          </div>
        </div>
        <Footer />
      </PartnerWithUsWrapper>
    </div>
  );
}

export default PartnerWithUs;
