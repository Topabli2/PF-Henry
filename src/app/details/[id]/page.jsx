import axios from "axios";
import Details from "@/components/details/Details";
import React from "react";
import Footer from "@/components/footer/footer";

const URL_REQUESTS_GAMES = process.env.URL_REQUESTS_GAMES;

const Page = async ({ params }) => {
  const response = await axios(
    `${URL_REQUESTS_GAMES}/${params.id}`
  );
  return (
    <div>
      <Details game={response.data[0]} />
      <Footer />
    </div>
  );
};

export default Page;
