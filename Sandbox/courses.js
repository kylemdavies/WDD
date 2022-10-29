// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    "catalog year": "2018",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 3, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    findSection: function (section, toFind) {
        return section.sectionNum = toFind;
    }
  };


//   aCourse.code
//   aCourse["catalog year"]

function setCourseName(course){
    document.querySelector("#courseName").textContent = course.name;
    document.querySelector("#courseCode").textContent = course.code;
}

function sectionTemplate(section){
    return `<tr><td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`
}

function renderSections(sections){
    const sectionsElement = document.querySelector("#sections");
    const sectionsHtml = sections.map(sectionTemplate);
    sectionsElement.innerHTML = sectionsHtml.join("");
}

// aCourse.sections.find(function(item){
//     aCourse.findSection(item, 1)
// })

setCourseName(aCourse);
renderSections(aCourse.sections);