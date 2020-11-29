function setName(firstName, lastName) {
    document.write('Привет ', firstName, lastName, "<br />");
}

let setName2 = function setName2(firstName, lastName) {
    document.write("Здравствуй ", firstName, lastName, "<br />");
}

let setName3 = function setName3(firstName, lastName) {
    document.write("Прощай ", firstName, lastName, "<br />")
}

setName(firstName = 'andrey', lastName = ' pastushenko');
setName2(firstName, lastName = ' pastushenko');
setName3(firstName, lastName = ' pastushenko')

setName(firstName = 'stepan', lastName = ' pastushenko');
setName2(firstName, lastName = ' pastushenko');
setName3(firstName, lastName = ' pastushenko')

setName(firstName = 'grisha', lastName = ' girilovich');
setName2(firstName, lastName = ' girilovich');
setName3(firstName, lastName = ' girilovich')
