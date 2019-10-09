const studentForm = document.querySelector("#student-form")


studentForm.addEventListener("submit", addPost)

function addPost() {
    event.preventDefault()
    const formData = new FormData(studentForm)
    const nameInput = formData.get("name")
    const ageInput = formData.get("age")
    let bodyData = { name: nameInput, age: ageInput }

    fetch("http://localhost:3000/students", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyData)
    })
}