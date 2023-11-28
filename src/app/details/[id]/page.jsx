import axios from "axios";
import Details from "@/components/details/Details";
import React from "react";
import Footer from "@/components/footer/footer";

const Page = async ({ params }) => {
  const response = await axios(
    `https://vorttex-gaming-o5z01iokx-topablis-projects.vercel.app/api/games/${params.id}`
  );
  return (
    <div>
      <Details game={response.data[0]} />
      <Footer />
    </div>
  );
};

export default Page;
