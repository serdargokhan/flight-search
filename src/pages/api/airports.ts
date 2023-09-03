import { delay } from "@/utils";
import type { NextApiRequest, NextApiResponse } from "next";

const airports = [
    {
        name: "Istanbul Airport",
        code: "IST",
        city: "Istanbul"
    },
    {
        name: "Ankara Esenboğa Airport",
        code: "ESB",
        city: "Ankara"
    },
    {
        name: "Antalya Airport",
        code: "AYT",
        city: "Antalya"
    },
    {
        name: "Izmir Adnan Menderes Airport",
        code: "ADB",
        city: "Izmir"
    },
    {
        name: "Dalaman Airport",
        code: "DLM",
        city: "Dalaman"
    },
    {
        name: "Adana Şakirpaşa Airport",
        code: "ADA",
        city: "Adana"
    },
    {
        name: "Trabzon Airport",
        code: "TZX",
        city: "Trabzon"
    },
    {
        name: "Bodrum Milas Airport",
        code: "BJV",
        city: "Bodrum"
    },
    {
        name: "Gaziantep Airport",
        code: "GZT",
        city: "Gaziantep"
    },
    {
        name: "Antalya Gazipaşa Airport",
        code: "GZP",
        city: "Gazipaşa"
    },
    {
        name: "Nevşehir Kapadokya Airport",
        code: "NAV",
        city: "Nevşehir"
    },
    {
        name: "Sabiha Gökçen International Airport",
        code: "SAW",
        city: "Istanbul"
    },
    {
        name: "Konya Airport",
        code: "KYA",
        city: "Konya"
    },
    {
        name: "Samsun Çarşamba Airport",
        code: "SZF",
        city: "Samsun"
    }
];

export type Airport = (typeof airports)[0];

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await delay(500);

    res.status(200).json(airports);
}
