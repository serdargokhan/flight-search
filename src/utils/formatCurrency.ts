export default function formatDateToHour(price: number) {
    return new Intl.NumberFormat([], {
        style: "currency",
        currency: "TRY"
    }).format(price);
}
