import React, { useEffect, useState } from "react";
import {useLoaderData} from 'react-router-dom';

function Github() {
    const data = useLoaderData();

    if (data.isLoading) {
        return <div>Loading...</div>;
    }

    if (data.isError) {
        return <div>Error loading posts.</div>;
    }

    return (
        <div className="m-4 h-svh flex items-center justify-center bg-sky-100">
            <div className="flex lg:flex-row flex-col gap-2 items-center lg:w-1/2 w-5/6 rounded-3xl p-4 bg-sky-800">
                <div className="lg:flex-1 p-4">
                    <div className="rounded-full overflow-hidden">
                        <img className="w-full" src={data.avatar_url} alt="Profile Picture" onClick={() => window.open(data.html_url, "_blank")}/>
                    </div>
                </div>
                <div className="lg:flex-2 p-4 text-indigo-50">
                    <h1 className="lg:text-3xl text-2xl text-left">{data.name}</h1>
                    <p className="text-sm italic font-light">{data.location}</p>
                    <h2 className="text-base mt-4">{data.bio}</h2>
                    <div className="grid grid-cols-2 mt-4 gap-4">
                        <div className="justify-self-center flex flex-col gap-1 p-1">
                            <h2 className="text-center text-xl">{data.followers}</h2>
                            <button className="rounded-full bg-stone-900 px-4 py-1 text-sm">Followers</button>
                        </div>
                        <div className="justify-self-center flex flex-col gap-1 p-1">
                            <h2 className="text-center text-xl">{data.following}</h2>
                            <button className="rounded-full bg-stone-900 px-4 py-1 text-sm">Following</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Github;


