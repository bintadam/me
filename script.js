const hobbies  =[
    "💻 Programmer",
    "🌱 Educator",
    "📖 Instructor",
    "🔥 Motivator",
    "🔥 Motivational speaker",
    "📙 Content Creator",
]

const tecnologies = [
    { name: "React", color: "red" },
    { name: "Redux", color: "blue" },
    { name: "MONGODB", color: "green" },
    { name: "JAVASCRIPT", color: "orange" },
    { name: "NODE", color: "purple" },
    { name: "PYTHON", color: "yellow" },
    { name: "PANDAS", color: "pink" },
    { name: "HTML", color: "cyan" },
    { name: "NUMPY", color: "brown" },
]

function displayHobbies(){
    const hobbiesList = $('#hobbiesList');
    let index = 0;

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

function displayTecnologies(){
    const tecnologiesList = $('#tecnologies');
    let index =0;
    function changeTecnologies(){
        const tecnology = tecnologies[index]
        tecnologiesList.fadeOut(400, function(){
            tecnologiesList.text(tecnology.name);
            tecnologiesList.css("color", tecnology.color)
            tecnologiesList.fadeIn(400)
        });

        index++; 

        if(index === tecnologies.length){
            index = 0;
        }
    }

    changeTecnologies()

    setInterval(changeTecnologies, 2000)
}


$(document).ready(function(){
   displayHobbies();
   displayTecnologies();

   const challenge = $('.challenges-list li')
   challenge.on('mouseenter', function(e){
        e.preventDefault()
        $(this).css("backgroundColor", "rgb(168, 143, 143)")
   })

   challenge.on('mouseleave', function(e){
    e.preventDefault()
       $(this).css("backgroundColor", "#fefdfd")
   })

})