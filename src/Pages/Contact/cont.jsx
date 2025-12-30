fetch("https://myapi.onrender.com/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        name: "John",
        email: "john@example.com",
        message: "Hello!"
    })
})
.then(res => res.json())
.then(data => console.log(data))
