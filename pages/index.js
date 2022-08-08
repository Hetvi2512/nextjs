import Head from "next/head";
import HomePage from "../components/HomePage";
import { baseUrl } from "../helper/constants";
import Modal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";
import Cookies from 'universal-cookie';
import Mailchimp from '../components/views/Mailchimp/Mailchimp'
import { useEffect, useState } from "react";
const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
export default function Home({ stories, combinedData1, combinedData2 }) {
  const cookies = new Cookies();
  const [modalIsOpen, setIsOpen] = useState(false);
  const checkCookie =(value)=>{
    return cookies.get(value)
  }
  useEffect(() => {
    if(typeof checkCookie('ReactModalPopup') =='undefined'){
      cookies.set('ReactModalPopup', {shouldShow:false},{
        path: "/",
        maxAge: 83400
    });
      openModal();
    }
  }, [])
  const disableScroll = () => { document.body.style.overflow = 'hidden' }
  const enableScroll = () => { document.body.style.overflowY = 'scroll' }

  function openModal() {
    // e.preventDefault();
    setTimeout(() => {
      setIsOpen(true);
    }, 30000);
  }

  function closeModal(e) {
    e.preventDefault();
    setIsOpen(false);
  }
  return (
    <div>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          The Established: Style, Self, Culture, Community - For the well
          informed
        </title>
        <meta
          name="description"
          content="The Established is a new digital platform at the forefront of a modern landscape, shaped by a community of conscious, authentic and very well-informed, progressive consumers."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="modal-div" style={{ zIndex: 100 }}>
        <Modal
          isOpen={modalIsOpen}
          //onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
          onAfterOpen={disableScroll}
          onAfterClose={enableScroll}
          preventScroll={true}
          shouldCloseOnOverlayClick={false}
          contentLabel="Example Modal"
        >
          <div className="d-flex justify-content-end cursor-pointer" onClick={(e)=>closeModal(e)}><AiOutlineClose size={'2em'} /></div>
          <Mailchimp />
        </Modal>
      </div>
       <HomePage stories={stories} combinedData1={combinedData1} combinedData2={combinedData2} />

    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    `${baseUrl}/api/v1/collections/home`
  );
  const data = await response.json();
  const homeDisplay = [];
  const displaySeq = {};
  data.items.map((a) => {
    if (a.type === "story") {
      homeDisplay.push(a);
    } else if (a.type === "collection") {
      displaySeq[a.name.toLowerCase()] = a.slug;
    }
  });
  const tempObj1 = {};
  const tempObj2 = {};
  Object.values(displaySeq).map((a) => {
    if (a === "style" || a === "breaking-news") {
      tempObj1[a] = {
        _type: "collection",
        slug: a,
        "item-type": "stories",
      };
    } else {
      tempObj2[a] = {
        _type: "collection",
        slug: a,
        "item-type": "stories",
      };
    }
  });
  const bodyAPIBulk1 = {
    requests: tempObj1,
  };
  const bodyAPIBulk2 = {
    requests: tempObj2,
  };
  const combinedData1 = await getCombinedData1(bodyAPIBulk1);
  const combinedData2 = await getCombinedData2(bodyAPIBulk2);
  console.log("HOME", homeDisplay)
  return {
    props: {
      stories: homeDisplay,
      combinedData1: JSON.parse(JSON.stringify(combinedData1)),
      combinedData2: JSON.parse(JSON.stringify(combinedData2)),
    },
    revalidate: 50,
  };
}
const getCombinedData1 = async (bodyAPIBulk1) => {
  const combinedState1 = { style: [], "breaking-news": [] };
  const response = await fetch(`${baseUrl}/api/v1/bulk-request`, {
    method: "POST",
    body: JSON.stringify(bodyAPIBulk1),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  Object.entries(data?.results).map((col) => {
    combinedState1[col[0]] = col[1].items;
  });
  return combinedState1;
};

const getCombinedData2 = async (bodyAPIBulk2) => {
  const combinedState2 = {
    self: [],
    culture: [],
    community: [],
    spotlight: [],
  };
  const response = await fetch(`${baseUrl}/api/v1/bulk-request`, {
    method: "POST",
    body: JSON.stringify(bodyAPIBulk2),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  Object.entries(data?.results).map((col) => {
    combinedState2[col[0]] = col[1].items;
  });
  return combinedState2;
};
