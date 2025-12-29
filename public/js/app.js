// ### First Project JavaScript:


// ## 1 - Instructions:
// - Create a folder named: first_project_js_firstName_lastName
// - Create a repository with the same name as the folder
// - Adhere to the folder structure
// - Individual work
// - Minimum of 10 commits
// - Deadline: One day
// - Use of object classes, arrays, functions, prompts, etc.

// ## 2 - Project Objective:
// - Create a JavaScript program that simulates logging into a bank account using only the console to interact with the user.

// ## 3 - Instructions:
// - Account Creation and Management:
//     + Allow the user, via prompts, to choose between signing up, logging in, or changing the password.
class userDataTemplat {
    static userDataBase = []
    constructor(name ,password, email, age, balance)
    {
        this.name =  name 
        this.password = password
        this.email = email
        this.age = age
        this.balance = balance
        this.loan = false
        this.invest = false
        this.maxErnings = 120
    }
}

// choosing an action
// let action 
// while(!(action == 1 || action == "sign up" || action == 2 || action == "loge in"|| action == 3 || action == "change password"||action == "password"))
// {
//     action = prompt("Enter the number of the option or its name to continue\n1 :sign up\n2 :loge in\n3 :change password")
// }


const capitalize = (string) =>
{
    let splitedStr = string.toLowerCase().split(" ")
    let i = 0
    while(i < splitedStr.length)
    {
        splitedStr[i] = splitedStr[i].charAt(0).toUpperCase() + splitedStr[i].substring(1)
        i++
    }
    return splitedStr.join(" ")
}

const howMany = (string, char) =>
{
    let i = 0
    let count = 0
    while(i < string.length)
    {
        if(string[i] == char)
            count++
        i++
    }
    return count
}

const  sigeIn = () =>
{
    let user = new userDataTemplat
    // get name
    let step = ""
    while(step.length < 5 || step.includes("@"))
    {
        step = prompt("Enter a valid name (name should be at least 5 character long and no special characters):").trim()
    }
    
    user.name = capitalize(step.trim())
    
    // get username
    step = ""
    while(step.length < 10 || step.trim().includes(" ") || howMany(step,"@") != 1 || userDataTemplat.userDataBase.some(e => e.email == step))
    {
        step = prompt("Enter a valid Email :").trim().toLowerCase()
    }

    user.email = step

    // get age 
    step = ""
    while(isNaN(step) || step <= 16 || step >= 100  )
    {
        step = parseInt(prompt("enter your age"))
    }
    user.age = step

    // get password
    step = ""
    while(step.length < 7 || !( step.trim().includes("@") || step.trim().includes("#") || step.trim().includes("-") || step.trim().includes("+") || step.trim().includes("*") || step.trim().includes("/")))
    {
        step = prompt("Enter a valid password :").trim()

    }

    // check password
    let steprepet = ""
    steprepet = prompt("confirm password")
    if( step != steprepet)
    {
        return -1
    }

    console.log("user registered successfully")
    user.password = step
    userDataTemplat.userDataBase.push(user)
    return 1
}

const logeIn = () =>
{
    let email =""
    let password =""
    let pass = {stat : "" ,index : ""}
    while(true)
    {
        email = prompt("Enter your email :")
        password = prompt("Enter your password :")

        let index = userDataTemplat.userDataBase.findIndex(e => e.email == email) 
        pass.index = index
        if(index != -1)
        {
            console.log("this email exist");
            if(userDataTemplat.userDataBase[index].password == password)
            {
                console.log("welcome nigga")
                pass.stat = true
                return pass
            }
            
        }
        console.log("email or password does not exist")
        pass.stat = false
        return pass
    }
}
userDataTemplat.userDataBase.push({name: "ayoub",email:"ayoubennacir@gmail.com",password : "gtasani@"})

const changePass = (index) =>
{

    let pass = prompt("enter your current password")
    while(pass == userDataTemplat.userDataBase[index].password)
    {
    
         // get password
        pass = ""        
        while(pass.length < 7 || !( pass.trim().includes("@") || pass.trim().includes("#") || pass.trim().includes("-") || pass.trim().includes("+") || pass.trim().includes("*") || pass.trim().includes("/")))
        {
            pass = prompt("Enter a new valid password :").trim()
        }
    
        // check password
        let steprepet = ""
        steprepet = prompt("confirm password")
        if( pass == steprepet)
        {
            userDataTemplat.userDataBase[index].password = pass
            console.log("password changed successfully");
            return true
        }
    }
    console.log("passwords do not match up")
    return false
}

const Withdraw = (index) =>
{
    let amount = ""
    while(isNaN(amount) || amount < 0 || amount >= userDataTemplat.userDataBase[index].balance)
    {
        amount = parseInt(prompt("hom much do you want to withdraw :"))
    }
    userDataTemplat.userDataBase[index].balance -= amount
    console.log("you withdraw "+ amount)
    console.log("you balance is " + userDataTemplat.userDataBase[index].balance)
}

const deposit = (index) =>
{
    let amount = ""
    while(isNaN(amount) || amount < 0)
    {
        amount = parseInt(prompt("hom much do you want to diposit :"))
    }
    userDataTemplat.userDataBase[index].balance += amount
    console.log("you diposited "+ amount)
    console.log("you balance is " + userDataTemplat.userDataBase[index].balance)
}

const takeLoan = (index) =>
{
    let amount = ""
    while(isNaN(amount) || amount < 0 ||  amount < userDataTemplat.userDataBase[index].balance * 0.2)
    {
        amount = parseInt(prompt("hom big is the loan you want:"))
    }
    userDataTemplat.userDataBase[index].balance += amount
    userDataTemplat.userDataBase[index].loan = true
    console.log("you took a loan of "+ amount)
    console.log("you balance is " + userDataTemplat.userDataBase[index].balance)
}

const invest = (index)=>
{
    let amount = ""
    while(isNaN(amount) || amount < 0 ||  amount < userDataTemplat.userDataBase[index].balance )
    {
        amount = parseInt(prompt("hom much you want to invest:"))
    }
    userDataTemplat.userDataBase[index].balance -= amount
    userDataTemplat.userDataBase[index].invest = true
    console.log("you invested "+ amount)
    console.log("you balance is " + userDataTemplat.userDataBase[index].balance)
}
sigeIn()
console.log(userDataTemplat.userDataBase)

//     + If the user only writes "exit," they exit the current process, and the choice question is asked again.
//         ! If the user chooses to sign up, here are the details they must enter:
//             # Name (Full):
//             - Check for leading or trailing spaces.
//             - The first letter should be capitalized.
//             - After each space, the first letter should remain capitalized.
//             - Check that all other characters are in lowercase.
//             - Do not save the Name if it has less than 5 characters (excluding spaces).
//             - Do not save the Name if it contains numbers, "@", or similar special characters.

//             # Email:
//             - Check for leading or trailing spaces.
//             - Convert all letters to lowercase.
//             - Do not save the Email if it has spaces in the middle.
//             - Do not save the Email if it has fewer than 10 characters (excluding spaces).
//             - Do not save the Email if it does not contain exactly one "@" symbol.
//             - Ensure the email is unique.

//             # Age:
//             - Check for leading, trailing, or middle spaces.
//             - Verify that only digits are entered.
//             - Do not save the Age if it has 0 characters, or if it has 3 characters or more.

//             # Password:
//             - Check for leading or trailing spaces.
//             - Do not save the Password if it has spaces in the middle.
//             - Require at least one special character from the set: ["@", "#", "-", "+", "*", "/"].
//             - Require at least 7 characters to confirm the password.

//             # Password_confirmed:
//             - The user must re-enter their exact password; otherwise, they are blocked.

//         ! If the user chooses to log in, here are the details they must enter:
//             # Email:
//             - Check if the email exists in our Database.
            
//             # Password:
//             - Check if the entered password is associated with the previously entered email.

//          If the user chooses to change the password:
//             - They must enter their existing Email in the Database.

//         ! After the user logs in, display the amount they have in their bank (user's choice) and offer them services:
//             ? Logout:
//             - If the user chooses this option, they are logged out and offered the option, as at the beginning, to sign up, log in, or change the password.
            
//             * Withdraw Money:
//             - If the user chooses this option, they can withdraw an amount from their bank (not exceeding the available amount).
            
//             * Deposit Money:
//             - If the user chooses this option, they can deposit the desired amount (not exceeding 1000 dirhams).
            
//             * Take a Loan:
//             - If the user chooses this option, they can take a loan up to 20% of what they already have.
//             - They receive an additional 20%, but lose 10% with each login until reaching the amount of their loan.
            
//             ? Invest:
//             - If the user chooses this option, they can invest any amount in the bank.
//             - Upon the next login, they will receive 20% of their investment each time until reaching 120% (earning 20% on each investment).
            
//             ? History:
//             - Ability to view the entire transaction history.