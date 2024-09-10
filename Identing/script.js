// ++++++++++++++++ Identation Pratice ++++++++++++++++
function sayHello(name) {
    for (let i = 0; i <= 2; i++) {
        console.log(`Hello ${name}`);
    }
}
sayHello('Aman');

// ++++++++++++++++ Identation + camelCase ++++++++++++++++
function empolyeeName(name) {
    switch (name) {
        case 'abdulSami':
            console.log("Sami is the good empolyee of MAKSOF.");
            break;
        case 'hafizImran':
            console.log("Imran is an good empolyee of MAKSOF.");
            break;
        case 'sarwarBhai':
            console.log("sarwar is an good empolyee of MAKSOF.");
            break;
        case 'usamaKhalid':
            console.log("Usama is an good empolyee of MAKSOF.");
            break;
        case 'ashirAli':
            console.log("Ashir is an good empolyee of MAKSOF.");
            break;
        case 'syedJawad':
            console.log("Jawad is an good empolyee of MAKSOF.");
            break;
        case 'osamaNasir':
            console.log("Osama is an good empolyee of MAKSOF.");
            break;
        case 'ibadUrRehman':
            console.log("Ibad is an good empolyee of MAKSOF.");
            break;
        case 'nabiyaRehman':
            console.log("Nabiya is an good empolyee of MAKSOF.");
            break;
        case 'afsheenZubair':
            console.log("Afsheen is an good empolyee of MAKSOF.");
            break;
        case 'amanUllah':
            console.log("Aman is an internee empolyee of MAKSOF.");
            break;
        case 'sharjeelKhan':
            console.log("Sharjeel is an internee empolyee of MAKSOF.");
            break;
        case 'nomanSidduique':
            console.log("Noman is an internee empolyee of MAKSOF.");
            break;
    }
}
empolyeeName('ashirAli');
empolyeeName('osamaNasir');

// ++++++++++++++++ codeOptomization + camelCase + Identation ++++++++++++++++
function empolyeeName(name) {
    let message = '';

    switch (name) {
        case 'Sami':
        case 'Imran':
        case 'Sarwar':
        case 'Usama':
        case 'Ashir':
        case 'Jawad':
        case 'Osama':
        case 'Ibad':
        case 'Nabiya':
        case 'Afsheen':
            message = `${name} is an good empolyee of MAKSOF.`;
            break
        case 'Aman':
        case 'Sharjeel':
        case 'Noman':
            message = `${name} is an internee empolyee of MAKSOF.`;
            break;
        default:
            message = `${name} is not an empolyee of MAKSOF.`;
            break;
    }
    console.log(message);
}
empolyeeName('Ibad');
empolyeeName('Sami');
empolyeeName('Sohiab');

// ++++++++++++++++ shortCode + camelCase + Identation + codeOptimization ++++++++++++++++
function employeeName(name) {
    const employees = {
        Sami: 'good',
        Imran: 'good',
        Sarwar: 'good',
        Usama: 'good',
        Ashir: 'good',
        Jawad: 'good',
        Osama: 'good',
        Ibad: 'good',
        Nabiya: 'good',
        Afsheen: 'good',
        Aman: 'internee',
        Sharjeel: 'internee',
        Noman: 'internee',
    };
    const status = employees[name] || 'not an empolyee';
    console.log(`${name} is ${status === 'not an empolyee' ? 'not' : ''} an empolyee of MAKSOF.`);
}
employeeName('Imran');
employeeName('Sami');
employeeName('Sohiab');

// ++++++++++++++++ loopOptimization + shortCode + camelCase + Identation + codeOptimization ++++++++++++++++

const names = ["Aman", "Sohiab", "Saim"];
for (const element of names) { console.log(`Assalam o Alikum ${element}.How are you?Hope you will be fine. `)}