import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import Head from "next/head";
import { Button, Input, Label } from "@/components/ui";
import AirportSelectBox from "@/components/AirportSelectBox";
import FlightList from "@/components/FlightList";
import { cn } from "@/utils";
import { Flight } from "./api/flights";

export default function Home() {
    const [isOneWay, setIsOneWay] = useState(false);
    const [departureModal, setDepartureModal] = useState(false);
    const [arrivalModal, setArrivalModal] = useState(false);

    const router = useRouter();

    const flightSearchSchema = z.object({
        departureAirport: z
            .string()
            .nonempty("You must select departure airport"),
        arrivalAirport: z.string().nonempty("You must select arrival airport"),
        departureDate: z.string().nonempty("You must select departure date"),
        returnDate: isOneWay
            ? z.string().optional()
            : z.string().nonempty("You must select arrival date")
    });

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isSubmitting }
    } = useForm<z.infer<typeof flightSearchSchema>>({
        resolver: zodResolver(flightSearchSchema)
    });

    const departureAirportText = watch("departureAirport");
    const arrivalAirportText = watch("arrivalAirport");
    const departureDate = watch("departureDate");

    const onSelectDeparture = useCallback(
        (code: string, name: string) => {
            setValue("departureAirport", name);
            router.push({
                href: "",
                query: { ...router.query, departureAirport: code }
            });
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [router.query]
    );

    const onSelectArrival = useCallback(
        (code: string, name: string) => {
            setValue("arrivalAirport", name);
            router.push({
                href: "",
                query: { ...router.query, arrivalAirport: code }
            });
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [router.query]
    );

    const todayDate = new Date().toISOString().split("T")[0];

    const {
        isFetching,
        error,
        data: flights,
        refetch
    } = useQuery<Flight>({
        queryKey: ["flights"],
        queryFn: () =>
            fetch(
                `/api/flights/?arrivalAirport=${router.query.arrivalAirport}&departureAirport=${router.query.departureAirport}&departureDate=${router.query.departureDate}&returnDate=${router.query.returnDate}`
            ).then(res => res.json()),
        enabled:
            !!router.query.arrivalAirport &&
            !!router.query.departureAirport &&
            !!router.query.departureDate
    });

    return (
        <>
            <Head>
                <title>Flight Search</title>
                <meta name="description" content="Start your journey here" />
            </Head>

            <section className="container py-8">
                <div className="w-full rounded-xl border border-primary-600 bg-white shadow-card">
                    <h1 className="border-b p-4 font-bold">Flight Search</h1>
                    <form
                        onSubmit={handleSubmit(async data => {
                            await router.push({
                                href: "",
                                query: {
                                    ...router.query,
                                    departureDate: data.departureDate,
                                    ...(data.returnDate
                                        ? { returnDate: data.returnDate }
                                        : {})
                                }
                            });
                            refetch();
                        })}
                        className="grid gap-4 p-4"
                    >
                        <div className="flex flex-col gap-4 lg:flex-row">
                            <div className="flex w-full flex-col gap-2">
                                <Label htmlFor="departureAirport">
                                    Departure At
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="departureAirport"
                                        placeholder="Country, City or Airport"
                                        {...register("departureAirport")}
                                        autoComplete="off"
                                        onFocus={() => setDepartureModal(true)}
                                        onBlur={() =>
                                            setTimeout(() => {
                                                setDepartureModal(false);
                                            }, 100)
                                        }
                                        className={cn(
                                            "transition",
                                            departureModal &&
                                                "rounded-b-none delay-100"
                                        )}
                                    />
                                    <AirportSelectBox
                                        isModalVisible={departureModal}
                                        searchTerm={departureAirportText}
                                        onItemClick={onSelectDeparture}
                                    />
                                </div>
                                {errors.departureAirport && (
                                    <p className="text-sm text-red-600">
                                        {errors.departureAirport.message}
                                    </p>
                                )}
                            </div>
                            <div className="flex w-full flex-col gap-2">
                                <Label htmlFor="arrivalAirport">
                                    Arrive To
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="arrivalAirport"
                                        placeholder="Country, City or Airport"
                                        {...register("arrivalAirport")}
                                        autoComplete="off"
                                        onFocus={() => setArrivalModal(true)}
                                        onBlur={() =>
                                            setTimeout(() => {
                                                setArrivalModal(false);
                                            }, 100)
                                        }
                                        className={cn(
                                            "transition",
                                            arrivalModal &&
                                                "rounded-b-none delay-100"
                                        )}
                                    />
                                    <AirportSelectBox
                                        isModalVisible={arrivalModal}
                                        searchTerm={arrivalAirportText}
                                        onItemClick={onSelectArrival}
                                    />
                                </div>
                                {errors.arrivalAirport && (
                                    <p className="text-sm text-red-600">
                                        {errors.arrivalAirport.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 lg:flex-row">
                            <div className="flex w-full flex-col gap-2">
                                <Label htmlFor="departureDate">
                                    Departure Date
                                </Label>
                                <Input
                                    id="departureDate"
                                    type="date"
                                    {...register("departureDate")}
                                    min={todayDate}
                                />
                                {errors.departureDate && (
                                    <p className="text-sm text-red-600">
                                        {errors.departureDate.message}
                                    </p>
                                )}
                            </div>
                            <div className="flex w-full flex-col gap-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="returnDate">
                                        Return Date
                                    </Label>
                                    <div className="flex items-center gap-2">
                                        <Label htmlFor="oneWay">
                                            (One Way)
                                        </Label>
                                        <Input
                                            id="oneWay"
                                            type="checkbox"
                                            className="h-3 w-3"
                                            onChange={() =>
                                                setIsOneWay(prev => !prev)
                                            }
                                        />
                                    </div>
                                </div>
                                <Input
                                    id="returnDate"
                                    type="date"
                                    disabled={isOneWay}
                                    {...register("returnDate")}
                                    min={departureDate || todayDate}
                                />
                                {errors.returnDate && (
                                    <p className="text-sm text-red-600">
                                        {errors.returnDate.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <Button
                            type="submit"
                            className="ml-auto w-fit px-6 py-2.5 text-base"
                            disabled={isSubmitting}
                        >
                            Search
                        </Button>
                    </form>
                </div>

                <p className="mb-4 mt-8 border-b border-primary-600 pb-4 font-bold">
                    Flight Details
                </p>

                <FlightList
                    error={error}
                    flights={flights}
                    isLoading={isFetching}
                />
            </section>
        </>
    );
}
