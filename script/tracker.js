const issueContainer = document.getElementById("issue-cards");





document.getElementById("all-tab").addEventListener("click", () => {
    displayIssues(allIssues);
});

document.getElementById("open-tab").addEventListener("click", () => {

    const openIssues = allIssues.filter(issue => issue.status === "open")

    displayIssues(openIssues);

});

document.getElementById("closed-tab").addEventListener("click", () => {

    const closedIssues = allIssues.filter(issue => issue.status === "closed")

    displayIssues(closedIssues);

});























function formatDate(dateString){

    const day = dateString[8] + dateString[9];
    const month = dateString[5] + dateString[6];
    const year = dateString[0] + dateString[1] + dateString[2] + dateString[3];

    return `${day}/${month}/${year}`;
}

async function fetchIssues(){
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    const data = await res.json();
    const issues = data.data;
    
    issues.forEach(issue => 
    {
        const labelsHTML = issue.labels
                .map(label => `<span class="badge bg-[#FFF8DB] text-[#D97706] mr-1">${label}</span>`)
                .join('');

        if(issue.status==='open'){

            

            issueContainer.innerHTML += 
        `
                    <div class="card bg-base-100 shadow-md p-4 mb-4 border-t-4 border-[#00A96E]         space-y-2">
                        <div class="flex justify-between items-center">
                            <img src="./assets/Open-Status.png" class="w-10 h-10">
                            <span class="badge text-red-500">${issue.priority}</span>
                        </div>

                        <h2 class="font-semibold text-lg">${issue.title}</h2>

                        <p class="text-gray-500 line-clamp-2">${issue.description}</p>
                        <div>
                            ${labelsHTML}
                        </div>
                        <hr class="text-[#E4E4E7]">
                        <p class="text-gray-500">#${issue.id} by ${issue.author}</p>
                        <p class="text-gray-500">${formatDate(issue.createdAt)}</p>
                    </div>
        </div>
        `

        }
        else{
            issueContainer.innerHTML += 
        `
                    <div class="card bg-base-100 shadow-md p-4 mb-4 border-t-4 border-[#A855F7]         space-y-2">
                        <div class="flex justify-between items-center">
                            <img src="./assets/Open-Status.png" class="w-10 h-10">
                            <span class="badge text-red-500">${issue.priority}</span>
                        </div>

                        <h2 class="font-semibold text-lg">${issue.title}</h2>

                        <p class="text-gray-500 line-clamp-2">${issue.description}</p>
                        <div>
                            ${labelsHTML}
                        </div>
                        <hr class="text-[#E4E4E7]">
                        <p class="text-gray-500">#${issue.id} by ${issue.author}</p>
                        <p class="text-gray-500">${formatDate(issue.createdAt)}</p>
                    </div>
        </div>
        `
        }

        
    })
}

fetchIssues()