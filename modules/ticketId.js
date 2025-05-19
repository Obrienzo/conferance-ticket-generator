export function ticketIdGenerator() {
    const number = Math.floor(Math.random() * 1000);
    const ticketNumber = `0${number}0`;
    return ticketNumber;
}