import React, { useEffect, useState } from 'react';
import moment from 'moment'
import StyleArticle from './style';
import SocialMediaShareButton from '../../SocialMediaShareButton'
function EstdInterview({heroData, seoData, cards}) {
    const cardType = []
    const [cardBgColor, setCardBgColor] = useState([]);
    const [displayFlag, setDisplayFlag] = useState(false);
    const [cardtype, setcardtype] = useState([]);
    useEffect(() => {
        window.scroll(0, 0);
        let tempcont=0;
        cards.map((card, index) => {
            console.log('alternateheroimage' in card.metadata.attributes)
            if (Object.keys(card.metadata.attributes).length>=1) {
                if('alternateheroimage' in card.metadata.attributes){
                    if(card.metadata.attributes.alternateheroimage[0]==='yes'){
                        console.log('hero image');
                    }
                }
                if('contentimgsidebyside' in card.metadata.attributes){
                    if (card.metadata.attributes.contentimgsidebyside[0]==='yes'){
                        cardType[index]='card1';
                    }
                }
                if('cardbackgroungcolour' in card.metadata.attributes){
                    if(card.metadata.attributes.cardbackgroungcolour.length>=1){
                        console.log('bgcloor',card.metadata.attributes.cardbackgroungcolour[0]);
                        cardBgColor[index]= card.metadata.attributes.cardbackgroungcolour[0]
                        setCardBgColor([...cardBgColor])
                    }
                }
            }
            else {
                card['story-elements'].map((element) => {
                    if (element.type === 'composite' && element.subtype==='image-gallery') {
                        tempcont=1;
                        cardType[index] = 'card2';
                    }
                    else if (element.type === "image" && element.subtype === null) {
                        cardType[index] = 'card2';
                    }
                    else if (element.type === "text" && element.subtype === 'also-read') {
                        cardType[index] = 'also-read';
                    }
                    else{
                        cardType[index] = 'card2';
                    }

                })
            }
        })
        console.log('cardtype', cardType);
        setcardtype(cardType);
        setDisplayFlag(true);
    }, []);
    return (
        <StyleArticle>
              <div className='a4-header'>
            <div className='a4-header-img' style={{ width: '50%' }}>
                <img src={heroData.img} alt="" />
            </div>
            <div className='a4-header-con'>
                <div className='Biotif-Book a4-header-cat '>
                    {heroData.cat}
                </div>
                <h1 className='HeldaneDisplay-Regular a4-header-title'>
                    {heroData.title}
                </h1>
                <div className='Biotif-Book a4-header-auth'>
                    By {heroData.auth}
                </div>
                <p className='style-date Biotif-SemiBold'>{moment(heroData['publishedAt']).format('DD MMMM, YYYY')}</p>
                <div>
                </div>
                <div className='d-flex eff1-social mtp-3 mbp-3'>
                   <SocialMediaShareButton />
                </div>
            </div>
        </div> 
        </StyleArticle>
    );
}

export default EstdInterview;