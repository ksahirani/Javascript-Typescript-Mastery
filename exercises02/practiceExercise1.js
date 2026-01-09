// Exercise 2: Login Validator
const email = "testadmin@gmail.com";
const password = "testadmin123";
const isVerified = true;

if (email !== "testadmin@gmail.com") {
    console.log("Email not found!");
} else if (password !== "testadmin123") {
    console.log("Incorrect password");
} else if (!isVerified) {
    console.log("Verify your account");
} else {
    console.log("Login Successful!");
}