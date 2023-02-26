const datas = []

function getData(e) {
    e.preventDefault()

    let projectName = document.getElementById("project-name").value
    let startdDate = document.getElementById("start-date").value
    let endDate = document.getElementById("end-date").value
    let description = document.getElementById("description").value
    let technologies1 = document.getElementById("node-js").checked ? document.getElementById("node-js").value : false;
    let technologies2 = document.getElementById("react-js").checked ? document.getElementById("react-js").value : false;
    let technologies3 = document.getElementById("java").checked ? document.getElementById("java").value : false;
    let technologies4 = document.getElementById("php").checked ? document.getElementById("php").value : false;
    let image = document.getElementById("upload-image").files;



    // day5
    let start_date = new Date(startdDate)
    let end_date = new Date(endDate)

    let diffDate = end_date.getTime() - start_date.getTime()
    let duration = diffDate / (1000 * 3600 * 24)

    let durationTime = ""
    if (duration >= 365) {
        let years = Math.floor(duration / 365)
        durationTime = `${years} years`
    } else if (duration >= 30) {
        let months = Math.floor(duration / 30)
        durationTime = `${months} months`
    } else if ( duration >= 7) {
        let weeks = Math.floor(duration / 7)
        durationTime = `${weeks} weeks`
    } else {
        durationTime = `${Math.floor(duration)} days`
    }

    // end day 5 //





    if(projectName == ""){
        alert("Project Name wajib diisi!!")
    } else if (startdDate == "") {
        alert ("start date wajib diisi!!")
    } else if (endDate == ""){
        alert ("end date wajib diisi!!")
    } else if (description == ""){
        alert("description wajib diisi!!")
    } else if (technologies1 == false && technologies2 == false && technologies3 == false && technologies4 == false){
        alert ("masukan 1 teknologies")
    } else if (image.length == 0){
        alert ("image belum dimasukan")
    }
        technologies1 = technologies1 != false ? `<i class="fa-brands ${technologies1} fa-3x"></i>` : false;
        technologies2 = technologies2 != false ? `<i class="fa-brands ${technologies2} fa-3x"></i>` : false;
        technologies3 = technologies3 != false ? `<i class="fa-brands ${technologies3} fa-3x"></i>` : false;
        technologies4 = technologies4 != false ? `<i class="fa-brands ${technologies4} fa-3x"></i>` : false;

        image = URL.createObjectURL(image[0])


        
    let data = {
        projectName,
        startdDate,
        endDate,
        duration: durationTime,
        description,
        technologies1,
        technologies2,
        technologies3,
        technologies4,
        image
    }

    datas.push(data)
    console.log(datas)
    showData()
}

function showData() {
    document.getElementById("isi-projects").innerHTML = ''
    for(let i = 0 ; i < datas.length ; i++){
        document.getElementById("isi-projects").innerHTML += `
            <div class="project-list">
                <img src="${datas[i].image}">
                <a href="project-detail.html"><h5>${datas[i].projectName}</h5></a>
                <p class="p1">durasi: ${datas[i].duration}</p>
                <p class="p2">${datas[i].description}</p>
                <div class="logo-project">
                    ${datas[i].technologies1 != false ? datas[i].technologies1 : ""}
                    ${datas[i].technologies2 != false ? datas[i].technologies2 : ""}
                    ${datas[i].technologies3 != false ? datas[i].technologies3 : ""}
                    ${datas[i].technologies4 != false ? datas[i].technologies4 : ""}
                </div>
                <div class="button-project-list">
                    <button class="button-edit">edit</button>
                    <button class="button-delete">delete</button>
                </div>
            </div>`   
    }
}
