import Head from "next/head";
import HomePage from "../components/HomePage";
import { baseUrl } from "../helper/constants";

export default function Home({ stories, combinedData1, combinedData2 }) {
  
  return (
    <div>
      <Head>
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
