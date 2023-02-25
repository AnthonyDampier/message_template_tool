export default function GenerateFinalMessage({guest, company, messageTemplate, greeting}){
    // Generates and return final message

    const message = messageTemplate.message.replace("[greeting]", greeting).replace("[firstName]", guest.firstName).replace("[lastName]", guest.lastName).replace("[roomNumber]", guest.reservation.roomNumber).replace("[company]", company.company).replace("[city]", company.city).replace("[timezone]", company.timezone);
    return message;
}