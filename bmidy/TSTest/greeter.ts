function greeter(person: string) { // type annotation
    return "Hello, " + person;
}

let user = "Ben Midyette";

document.body.textContent = greeter(user);