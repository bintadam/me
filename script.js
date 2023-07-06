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

function displayHobbies(){
    const hobbiesList = $('#hobbiesList');
    index = 0;

    function changeHobby(){
        hobbiesList.fadeOut(400, function(){
            hobbiesList.text(hobbies[index]);
            hobbiesList.fadeIn(400)
        });

        index++;
    
        if(index === hobbies.length){
            index = 0;
        
        }
    }

    changeHobby();

    setInterval(changeHobby, 2000);

}


$(document).ready(function(){
   displayHobbies();
})