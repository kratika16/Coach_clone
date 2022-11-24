let currentYear = new Date().getFullYear();    
console.log("currentYear", currentYear);
const Year= [];
const variable =currentYear+10;
while(currentYear<=variable){
    Year.push(currentYear);
    currentYear+=1;
}
console.log("year",Year)

export const YearList= [
    {
        id: "1",
        label: Year[0],
        value: Year[0],
    },
    {
        id: "2",
        label: Year[1],
        value: Year[1],
    },
    {
        id: "3",
        label: Year[2],
        value: Year[2],
    },
    {
        id: "4",
        label: Year[3],
        value: Year[3],
    },
    {
        id: "4",
        label: Year[4],
        value: Year[4],
    },
    {
        id: "5",
        label: Year[5],
        value: Year[5],
    },
    {
        id: "6",
        label: Year[6],
        value: Year[6],
    },
    {
        id: "7",
        label: Year[7],
        value: Year[7],
    },
    {
        id: "8",
        label: Year[8],
        value: Year[8],
    },
    {
        id: "9",
        label: Year[9],
        value: Year[9],
    },
    {
        id: "10",
        label: Year[10],
        value: Year[10],
    },
]