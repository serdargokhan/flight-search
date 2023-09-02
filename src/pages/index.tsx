import { Button, Input, Label } from "@/components/ui";
import { useState } from "react";

export default function Home() {
    const [isOneWay, setIsOneWay] = useState(false);

    return (
        <div className="container py-8">
            <div className="shadow-card w-full rounded-xl border bg-gray-50">
                <h1 className="border-b p-4 font-semibold">Flight Search</h1>
                <div className="grid gap-4 p-4">
                    <div className="flex flex-col gap-4 lg:flex-row">
                        <div className="flex w-full flex-col gap-2">
                            <Label htmlFor="from">From</Label>
                            <Input
                                id="from"
                                placeholder="Country, City or Airport"
                            />
                        </div>
                        <div className="flex w-full flex-col gap-2">
                            <Label htmlFor="to">To</Label>
                            <Input
                                id="to"
                                placeholder="Country, City or Airport"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 lg:flex-row">
                        <div className="flex w-full flex-col gap-2">
                            <Label htmlFor="departure">Departure Date</Label>
                            <Input id="departure" type="date" />
                        </div>
                        <div className="flex w-full flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="arrival">Arrival Date</Label>
                                <div className="flex items-center gap-2">
                                    <Label htmlFor="one-way">(One Way)</Label>
                                    <Input
                                        id="one-way"
                                        type="checkbox"
                                        className="h-4 w-4"
                                        onChange={() =>
                                            setIsOneWay(prev => !prev)
                                        }
                                    />
                                </div>
                            </div>
                            <Input
                                id="arrival"
                                type="date"
                                disabled={isOneWay}
                            />
                        </div>
                    </div>
                    <Button className="ml-auto w-fit">Search</Button>
                </div>
            </div>
        </div>
    );
}
