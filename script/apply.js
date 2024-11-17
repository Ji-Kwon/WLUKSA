function updateQuestion(){
    const role = document.getElementById('role').value;
    const questionDiv = document.getElementById('role-question');
    const questionLabel = document.getElementById('explanation-label');


    const questions = {
        internal: "How would you ensure effective communication and collaboration among club members and the executive team?",
        corporate: "How would you approach reaching out to companies or organizations to secure sponsorships or partnerships for the club?",
        marketing: "How would you develop creative campaigns to promote events and increase the club's visibility on campus?",
        events: "Give an example of a club event that we could have, and how you would approach planning it."
    };

    if (role){
        questionLabel.innerHTML = questions[role] + '<textarea id="explanation" name="explanation" rows="5" placeholder="Write your response here..." required></textarea>';
        questionDiv.style.display = "block";
    } else{
        questionDiv.style.display = "none";
    }

}