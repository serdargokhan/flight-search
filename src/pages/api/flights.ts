import { delay } from "@/utils";
import type { NextApiRequest, NextApiResponse } from "next";

const flights = [
    {
        flightNumber: "TK101",
        airline: "Turkish Airlines",
        departureAirport: "IST",
        departureCity: "Istanbul",
        departureDate: "2023-09-10T08:00:00",
        arrivalAirport: "ESB",
        arrivalCity: "Ankara",
        arrivalDate: "2023-09-10T09:15:00",
        price: 150.0
    },
    {
        flightNumber: "PC202",
        airline: "Pegasus Airlines",
        departureAirport: "IST",
        departureCity: "Istanbul",
        departureDate: "2023-09-10T10:30:00",
        arrivalAirport: "AYT",
        arrivalCity: "Antalya",
        arrivalDate: "2023-09-10T12:15:00",
        price: 120.0
    },
    {
        flightNumber: "IZ301",
        airline: "Izmir Airlines",
        departureAirport: "IST",
        departureCity: "Istanbul",
        departureDate: "2023-09-10T14:45:00",
        arrivalAirport: "ADB",
        arrivalCity: "Izmir",
        arrivalDate: "2023-09-10T16:00:00",
        price: 90.0
    },
    {
        flightNumber: "DLM102",
        airline: "Dalaman Airways",
        departureAirport: "IST",
        departureCity: "Istanbul",
        departureDate: "2023-09-10T17:30:00",
        arrivalAirport: "DLM",
        arrivalCity: "Dalaman",
        arrivalDate: "2023-09-10T18:45:00",
        price: 75.0
    },
    {
        flightNumber: "ADA401",
        airline: "Adana Air",
        departureAirport: "ESB",
        departureCity: "Ankara",
        departureDate: "2023-09-10T09:45:00",
        arrivalAirport: "ADA",
        arrivalCity: "Adana",
        arrivalDate: "2023-09-10T11:00:00",
        price: 60.0
    },
    {
        flightNumber: "TZX302",
        airline: "Trabzon Airways",
        departureAirport: "ESB",
        departureCity: "Ankara",
        departureDate: "2023-09-10T12:30:00",
        arrivalAirport: "TZX",
        arrivalCity: "Trabzon",
        arrivalDate: "2023-09-10T13:45:00",
        price: 70.0
    },
    {
        flightNumber: "BJV201",
        airline: "Bodrum Fly",
        departureAirport: "AYT",
        departureCity: "Antalya",
        departureDate: "2023-09-10T13:30:00",
        arrivalAirport: "BJV",
        arrivalCity: "Bodrum",
        arrivalDate: "2023-09-10T15:15:00",
        price: 80.0
    },
    {
        flightNumber: "GZT402",
        airline: "Gaziantep Wings",
        departureAirport: "AYT",
        departureCity: "Antalya",
        departureDate: "2023-09-10T16:00:00",
        arrivalAirport: "GZT",
        arrivalCity: "Gaziantep",
        arrivalDate: "2023-09-10T17:15:00",
        price: 65.0
    },
    {
        flightNumber: "NAV301",
        airline: "Nevşehir Air",
        departureAirport: "ADB",
        departureCity: "Izmir",
        departureDate: "2023-09-10T18:30:00",
        arrivalAirport: "NAV",
        arrivalCity: "Nevşehir",
        arrivalDate: "2023-09-10T20:00:00",
        price: 85.0
    },
    {
        flightNumber: "SAW202",
        airline: "Sabiha Gökçen Airways",
        departureAirport: "ADB",
        departureCity: "Izmir",
        departureDate: "2023-09-10T21:15:00",
        arrivalAirport: "SAW",
        arrivalCity: "Istanbul",
        arrivalDate: "2023-09-10T22:30:00",
        price: 55.0
    },
    {
        flightNumber: "KYA101",
        airline: "Konya Air",
        departureAirport: "DLM",
        departureCity: "Dalaman",
        departureDate: "2023-09-10T09:30:00",
        arrivalAirport: "KYA",
        arrivalCity: "Konya",
        arrivalDate: "2023-09-10T10:45:00",
        price: 70.0
    },
    {
        flightNumber: "SZF202",
        airline: "Samsun Express",
        departureAirport: "DLM",
        departureCity: "Dalaman",
        departureDate: "2023-09-10T11:15:00",
        arrivalAirport: "SZF",
        arrivalCity: "Samsun",
        arrivalDate: "2023-09-10T12:30:00",
        price: 65.0
    },
    {
        flightNumber: "SZF203",
        airline: "Dalaman Express",
        departureAirport: "DLM",
        departureCity: "Dalaman",
        departureDate: "2023-09-10T17:55:00",
        arrivalAirport: "SZF",
        arrivalCity: "Samsun",
        arrivalDate: "2023-09-10T19:05:00",
        price: 75.0
    },
    {
        flightNumber: "SZF204",
        airline: "Samsun Express",
        departureAirport: "SZF",
        departureCity: "Dalaman",
        departureDate: "2023-09-10T11:15:00",
        arrivalAirport: "DLM",
        arrivalCity: "Samsun",
        arrivalDate: "2023-09-10T12:30:00",
        price: 65.0
    }
];

export type FlightDetail = (typeof flights)[0];

export type Flight = {
    departureFlights: FlightDetail[];
    returnFlights: FlightDetail[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { departureAirport, arrivalAirport, departureDate, returnDate } =
        req.query;

    const departureFlights = flights.filter(
        flight =>
            flight.departureAirport === departureAirport &&
            flight.arrivalAirport === arrivalAirport &&
            flight.departureDate.split("T")[0] === departureDate
    );

    const returnFlights = flights.filter(
        flight =>
            flight.departureAirport === departureAirport &&
            flight.arrivalAirport === arrivalAirport &&
            flight.departureDate.split("T")[0] === returnDate
    );

    await delay(500);

    res.status(200).json({ departureFlights, returnFlights });
}
