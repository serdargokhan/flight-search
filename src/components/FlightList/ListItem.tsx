import { FlightDetail } from "@/pages/api/flights";
import { formatCurrency, formatDateToHour } from "@/utils";
import { Button } from "../ui";

type ListItemProps = {
    flight: FlightDetail;
};

export default function ListItem({ flight }: ListItemProps) {
    return (
        <li
            key={flight.flightNumber}
            className="grid gap-4 rounded-lg border border-primary-600 bg-white px-4 py-4 lg:grid-cols-5 lg:gap-12 lg:py-8"
        >
            <div>
                <p className="font-semibold">{flight.airline}</p>
                <p className="text-sm">{flight.flightNumber}</p>
            </div>
            <p>
                {flight.departureCity} &#8594; {flight.arrivalCity}
            </p>
            <p className="font-semibold">
                {formatDateToHour(flight.departureDate)} &#8594;{" "}
                {formatDateToHour(flight.arrivalDate)}
            </p>
            <p className="font-bold">{formatCurrency(flight.price)}</p>
            <Button className="ml-auto h-full w-full">Select</Button>
        </li>
    );
}
