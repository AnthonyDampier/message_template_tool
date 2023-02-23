export default function GetTimeBasedGreeting({time, greetings}){
    // returns greeting based on the time


    // Morning = AM || PM; if its past midnight.
    // Afternoon = PM && its before 6pm
    // Evening = PM && its after 6pm but before 12
    if (time.session === "AM" || (time.session === "PM" && time.hours === 12 && time.minutes > 0 )){
        return greetings[0].greeting;
    } else if (time.session === "PM" && time.hours <= 6){
        return greetings[1].greeting;
    } else if (time.session === "PM" && time.hours < 12){
        return greetings[2].greeting;
    } else {
        return greetings[3].greeting;
    }
}