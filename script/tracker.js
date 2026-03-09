const issueContainer = document.getElementById("issue-cards");

async function fetchIssues(){
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    const data = await res.json();
    const issues = data.data;

    displayIssues(issues);
    document.getElementById("all-tab").addEventListener("click", () => {
    displayIssues(issues);

    document.getElementById("all-tab").classList.add('tab-active', 'bg-[#4A00FF]', 'text-white');
    document.getElementById("open-tab").classList.remove('tab-active', 'bg-[#4A00FF]', 'text-white');
    document.getElementById("closed-tab").classList.remove('tab-active', 'bg-[#4A00FF]', 'text-white');
    
});

document.getElementById("open-tab").addEventListener("click", () => {

    const openIssues = issues.filter(issue => issue.status === "open")


    displayIssues(openIssues);
    
    document.getElementById("all-tab").classList.remove('tab-active', 'bg-[#4A00FF]', 'text-white');
    document.getElementById("open-tab").classList.add('tab-active', 'bg-[#4A00FF]', 'text-white');
    document.getElementById("closed-tab").classList.remove('tab-active', 'bg-[#4A00FF]', 'text-white');
});

document.getElementById("closed-tab").addEventListener("click", () => {

    const closedIssues = issues.filter(issue => issue.status === "closed")

    displayIssues(closedIssues);
    document.getElementById("all-tab").classList.remove('tab-active', 'bg-[#4A00FF]', 'text-white');
    document.getElementById("open-tab").classList.remove('tab-active', 'bg-[#4A00FF]', 'text-white');
    document.getElementById("closed-tab").classList.add('tab-active', 'bg-[#4A00FF]', 'text-white');

});

}


function formatDate(dateString){

    const day = dateString[8] + dateString[9];
    const month = dateString[5] + dateString[6];
    const year = dateString[0] + dateString[1] + dateString[2] + dateString[3];

    return `${day}/${month}/${year}`;
}

function displayIssues(issues){
   issueContainer.innerHTML = "";
    issues.forEach(issue => 
    {   
        

        

        const labelsHTML = issue.labels
                .map(label => `<span class="badge bg-[#FFF8DB] text-[#D97706] mr-1">${label}</span>`)
                .join('');

        if(issue.status==='open'){

            

            issueContainer.innerHTML += 
        `
                    <div onclick="openIssueModal(${issue.id})" class="card bg-base-100 shadow-md p-4 mb-4 border-t-4 border-[#00A96E] space-y-2 cursor-pointer">
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
        
        `

        }
        else{
            issueContainer.innerHTML += 
        `
                    <div onclick="openIssueModal(${issue.id})" class="card bg-base-100 shadow-md p-4 mb-4 border-t-4 border-[#A855F7] space-y-2 cursor-pointer">
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
        
        `
        }

        
    })
}

async function openIssueModal(id){

    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();
    const issues = data.data;

    const issue = issues.find(issue => issue.id === id);

            const labelsHTML = issue.labels
                .map(label => `<span class="badge bg-[#FFF8DB] text-[#D97706] mr-1">${label}</span>`)
                .join('');


    document.getElementById("modal-title").innerText = issue.title;
    document.getElementById("modal-assignee").innerText ="Assignee: " + issue.assignee;
    document.getElementById("modal-priority").innerText ="priority: " + issue.priority;
    document.getElementById("modal-status").innerText = issue.status;
    document.getElementById("modal-description").innerText = issue.description;
    document.getElementById("modal-author").innerText = "* Opened by " + issue.author;
    document.getElementById("modal-date").innerText ="* " + formatDate(issue.createdAt);
    document.getElementById("label").innerHTML= labelsHTML;

    document.getElementById("my_modal_5").showModal();
}

fetchIssues()

