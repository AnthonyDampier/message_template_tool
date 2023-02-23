export default function GenerateFinalMessage({guest, company, messageTemplate, greeting}){
    // Generates and return final message

    const message = messageTemplate.message.replace("[greeting]", greeting).replace("[firstName]", guest.firstName).replace("[company]", company.company).replace("[roomNumber]", guest.reservation.roomNumber);
    return message;
}