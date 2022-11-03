let numOfParticipants = 1

document.querySelector("#add").addEventListener("click", addParticipant);

function addParticipant(){
    numOfParticipants += 1
    console.log(numOfParticipants);
};

