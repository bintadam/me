const hobbies  =[
    "💻 Programmer",
    "🌱 Educator",
    "📖 Instructor",
    "🔥 Motivator",
    "🔥 Motivational speaker",
    "📙 Content Creator",
]

const tecnologies = [
    "React",
    "Redux",
    "MONGODB",
    "JAVASCRIPT",
    "NODE",
    "PYTHON",
    "PANDAS",
    "HTML",
    "NUMPY",
]

function animateHobbies(){
    let index = 0;
    const container = $(".list");

    function displayHobby(){
        container.fadeOut(400, function(){
            container.text(hobbies[index]);
        });

        index++;
        if(index === hobbies.length){
            index =0;
        }
    }

    displayHobby();
    setInterval(displayHobby, 2000)
}

$(document).ready(function(){
    animateHobbies();
})