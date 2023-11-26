import Details from '@/components/details/Details';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';

const Page = async ({ params }) => {
    const response = await axios(`http://localhost:3000/api/games/${params.id}`);
    console.log(response.data)
    return (
        <div>

        </div>
    );
};

export default Page;

