import chalk from "chalk"
const date = new Date();

function formatTimeForTimeZone(timeZone, placeName, colorFunction) {
    const optionsDate = { 
        weekday: 'short', 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric', 
        timeZone: timeZone 
    };
    
    const optionsTime = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true, 
        timeZone: timeZone 
    };
    
    const formattedDate = date.toLocaleDateString('en-US', optionsDate);
    const formattedTime = date.toLocaleTimeString('en-US', optionsTime);
    
    return colorFunction(`${placeName}\n${formattedDate}\n${formattedTime}\n`);
}

const timeZones = [
    { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, place: '\nCURRENT TIME ZONE', color: chalk.blue },
    { timeZone: 'America/Los_Angeles', place: 'LOS ANGELES', color: chalk.green },
    { timeZone: 'Europe/London', place: 'LONDON', color: chalk.yellow },
    { timeZone: 'America/New_York', place: 'NEW YORK CITY', color: chalk.magenta },
    { timeZone: 'Asia/Hong_Kong', place: 'HONG KONG', color: chalk.cyan }
];

timeZones.forEach(location => {
    console.log(formatTimeForTimeZone(location.timeZone, location.place, location.color));
});

console.log(chalk.bold("\nA What Time Is It Right Now? Original Series"));
console.log(chalk.cyan.bold("PHILBERT"));
console.log(chalk.gray("COMING SOON!\n"));