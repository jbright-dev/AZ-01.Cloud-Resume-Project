window.addEventListener('DOMContnetLoaded', (event) =>{
    getVisitCount ();
})
const functionApiUrl = "https://cloudresumeprojectcounter.azurewebsites.net/api/GetResumeCounter?code=O891Y1S_vG0vM6pCDUZc14joA6NFdjD9bra0PIB8taQFAzFu6rWJ5Q==";
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVistCount = ()=>{
    let count = 30;
    fetch (functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function Api.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}