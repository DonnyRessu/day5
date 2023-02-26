function getData() {
    let name = document.getElementById("Name").value
    let email = document.getElementById("Email").value
    let phoneNumber = document.getElementById("phoneNumber").value
    let subject = document.getElementById("subject").value
    let yourMessage = document.getElementById("yourMessage").value

    if(name == ""){
        alert("nama wajib diisi!!")
    } else if (email == "") {
        alert ("email wajib diisi!!")
    } else if (phoneNumber == ""){
        alert ("phone number wajib diisi!!")
    } else if (subject == ""){
        alert("subject wajib dipilih!!")
    } else if (yourMessage == ""){
        alert("your message wajib diisi!!")
    } else {const emailReceiver = "donnyerlambang@gmail"
    let a = document.createElement('a')

    a.href = `mailto:${emailReceiver}?subject=${subject}&body= Halo nama Saya ${name}, tolong hubungi saya di nomor ${phoneNumber}, pesan anda adalah, ${yourMessage}`
    a.click()

    let data ={
        name,
        email,
        phoneNumber,
        subject,
        yourMessage
    }

    console.log(data)
    }

}