import { Flight } from "@/pages/api/flights";
import ListItem from "./ListItem";

type FlightListProps = {
    flights?: Flight;
    isLoading: boolean;
    error: unknown;
};

export default function FlightList({
    error,
    flights,
    isLoading
}: FlightListProps) {
    if (error) {
        return (
            <p className="flex items-center justify-center rounded-lg bg-white py-24 text-lg font-medium shadow-card">
                Something went wrong.
            </p>
        );
    } else if (isLoading) {
        return (
            <p className="flex items-center justify-center rounded-lg bg-white py-24 text-lg font-medium shadow-card">
                Loading...
            </p>
        );
    } else if (!flights || flights.departureFlights.length === 0) {
        return (
            <p className="flex items-center justify-center rounded-lg bg-white py-24 text-lg font-medium shadow-card">
                Search for flights to start your journey.
            </p>
        );
    } else {
        return (
            <ul className="grid gap-4">
                {flights.departureFlights.map(flight => (
                    <ListItem key={flight.flightNumber} flight={flight} />
                ))}
            </ul>
        );
    }
}
