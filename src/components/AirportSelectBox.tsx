import { memo, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Airport } from "@/pages/api/airports";
import { cn } from "@/utils";
import { Button } from "./ui";

type AirportSelectBoxProps = {
    isModalVisible: boolean;
    searchTerm?: string;
    onItemClick: (code: string, name: string) => void;
};

function AirportSelectBox({
    isModalVisible,
    searchTerm = "",
    onItemClick
}: AirportSelectBoxProps) {
    const {
        isLoading,
        error,
        data: airports
    } = useQuery<Airport[]>({
        queryKey: ["airports"],
        queryFn: () => fetch("/api/airports").then(res => res.json()),
        enabled: isModalVisible
    });

    const filteredAirports = useMemo(() => {
        if (!airports) return [];

        return airports.filter(
            airport =>
                airport.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                airport.code.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [airports, searchTerm]);

    return (
        <ul
            className={cn(
                "invisible absolute left-0 right-0 top-10 z-20 grid max-h-96 gap-2 overflow-y-auto rounded-lg rounded-t-none border-2 border-t-0 border-primary-600 bg-white p-2 opacity-0 shadow-sm transition md:grid-cols-2",
                isModalVisible && "visible opacity-100"
            )}
        >
            {error ? (
                <li className="col-span-2 py-4 text-center">
                    Something went wrong.
                </li>
            ) : isLoading ? (
                <li className="col-span-2 py-4 text-center">Loading...</li>
            ) : filteredAirports.length === 0 ? (
                <li className="col-span-2 py-4 text-center">
                    No results found.
                </li>
            ) : (
                filteredAirports.map(airport => (
                    <li key={airport.code}>
                        <Button
                            onClick={() =>
                                onItemClick(airport.code, airport.name)
                            }
                            className="h-full w-full justify-between text-left"
                            type="button"
                        >
                            <p>{airport.name}</p>
                            <p>{airport.code}</p>
                        </Button>
                    </li>
                ))
            )}
        </ul>
    );
}

export default memo(AirportSelectBox);
