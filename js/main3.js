function setName(firstName, lastName) {
    document.write('Привет ', firstName, lastName, "<br />");
}

function setName2(firstName, lastName) {
    document.write("Здравствуй ", firstName, lastName, "<br />");
}

function setName3(firstName, lastName) {
    document.write("Прощай ", firstName, lastName, "<br /><br />")
}

setName(firstName = 'andrey', lastName = ' pastushenko');
setName2(firstName, lastName = ' pastushenko');
setName3(firstName, lastName = ' pastushenko')

setName(firstName = 'stepan', lastName = ' pastushenko');
setName2(firstName, lastName = ' pastushenko');
setName3(firstName, lastName = ' pastushenko')

setName(firstName = 'grisha', lastName = ' girilovich');
setName2(firstName, lastName);
setName3(firstName, lastName);

setName(firstName = 'sobaka ', lastName = firstName);
setName3(firstName, lastName);

const pow1 = num => {
    return num ** 2
}

document.write(pow1(num = 5), "<br />");

const sum = (a, b = a * num) => a + b;
document.write(sum(a = 20))