document.getElementById('feedback').textContent = "Feed Back Form"

function show(){
    let name = document.getElementById('name').value
    let age = document.getElementById('age').value
    let email = document.getElementById('email').value
    let div = document.getElementById('div').value

    console.log(`name: ${name},\nDiv: ${div} \nage: ${age},\n email: ${email}`)
    document.getElementById('content').innerHTML = "Thank you for Giving your feedback"
}