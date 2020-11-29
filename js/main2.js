var classes = [
    {
        title: "Classroom #1",
        places: 11,
        faculty: "Faculty Engineering"
    },
    {
        title: "Classroom #2",
        places: 17,
        faculty: "Faculty Engineering"
    },
    {
        title: "Classroom #3",
        places: 13,
        faculty: "Faculty Law"
    },
    {
        title: "Classroom #4",
        places: 20,
        faculty: "Faculty Law"
    },
    {
        title: "Classroom #5",
        places: 14,
        faculty: "Faculty Economics"
    },
    {
        title: "Classroom #6",
        places: 12,
        faculty: "Faculty Economics"
    },
    {
        title: "Classroom #7",
        places: 10,
        faculty: "Faculty Economics"
    }

];

function showClasses(classesArr) {
    for (var classObj of classesArr) {
        document.write(`<b>${classObj.title}</b>, мест: ${classObj.places}, факультет: ${classObj.faculty}<br />`);


        /*    document.write("| ");
            for (var prop in classObj) {
                document.write(`${prop}: ${classObj[prop]} | `);
            }
            document.write("<br />"); */
    }
}

// 1
function showAllClasses() {
    showClasses(classes);
}

// 2
function showFacultyClasses(fac) {
    let fClasses = classes.filter((classObj) => {
        return (classObj.faculty == fac);
    });

    showClasses(fClasses);
}

// 3
function showMustGoOn(groupObj) {
    let fClasses = classes.filter((classObj) => {
        /*if (classObj.title != groupObj.class) {
          return false;
        }*/

        return !(classObj.faculty != groupObj.faculty || classObj.places < groupObj.students);
    });

    showClasses(fClasses);
}

// 4
function showSortByPlacesClasses() {
    let fClasses = classes.sort((classObj1, classObj2) => {
        if (classObj1.places > classObj2.places) {
            return -1;
        } else if (classObj1.places < classObj2.places) {
            return 1;
        }

        return 0;
    });

    showClasses(fClasses);
}

showAllClasses();
showFacultyClasses("Faculty #1");

let group = {
    class: "Class #2",
    students: 19,
    faculty: "Faculty Law"
}
//showMustGoOn(group);
showSortByPlacesClasses();