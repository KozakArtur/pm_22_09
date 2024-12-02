/*
async function getData() {
    try {
        const response = await fetch('/data/data.json', { cache: "no-store" }); // Запит на сервер
        if (!response.ok) throw new Error('Помилка при завантаженні даних');
        const data = await response.json(); // Перетворення JSON у JavaScript об'єкт
        renderData(data); // Функція для відображення даних на сторінці
    } catch (error) {
        console.error('Помилка під час отримання даних:', error);
    }
}

function renderData(data) {
    // Оновлення заголовку
    if (data.header) {
        document.getElementById('header-name1').innerText = data.header.name1 || 'JHON0';
        document.getElementById('header-name2').innerText = data.header.name2 || 'ABIRAR';
        document.getElementById('header-title').innerText = data.header.title || 'UI DESIGNER';
    }

    // Оновлення секції "ABOUT ME"
    if (data.aboutMe) {
        document.getElementById('aboutMe-title').innerText = data.aboutMe.title || 'ABOUT ME_';
        document.getElementById('aboutMe-content').innerText = data.aboutMe.content || 'Lorem ipsum dolor a consectetur adipiscing elit...';
    }

    // Оновлення контактної інформації
    if (data.contactInfo) {
        document.getElementById('contact-phone').innerText = data.contactInfo.phone || '+000 123 456 789';
        document.getElementById('contact-email').innerText = data.contactInfo.email || 'username@gmail.com';
        document.getElementById('contact-area').innerText = data.contactInfo.area || 'Your Street Address Here';
    }

    // Оновлення освіти
    if (Array.isArray(data.education)) {
        console.log('Обробка масиву освіти');
        const educationContainer = document.getElementById('education-section');
        if (educationContainer) {
            educationContainer.innerHTML = ''; // Очищення попереднього вмісту

            data.education.forEach((edu, index) => {
                console.log(`Додавання освіти ${index + 1}:`, edu);
                const eduDiv = document.createElement('div');
                eduDiv.classList.add('col', 'Data', 'text-dark-gray');

                eduDiv.innerHTML = `
                    <span>${edu.major || 'ENTER YOUR MAJOR'}</span>
                    <div class="Data3" style="padding-top:22px;">
                        <div>${edu.university || 'Name Of Your University'}</div>
                        <div>${edu.years || '2005–2009'}</div>
                    </div>
                `;

                educationContainer.appendChild(eduDiv);
            });
        }
    } else {
        console.warn('data.education не є масивом:', data.education);
    }

    // Оновлення досвіду
    if (Array.isArray(data.experience)) {
        console.log('Обробка масиву досвіду');
        const experienceContainer = document.getElementById('experience-section');
        if (experienceContainer) {
            experienceContainer.innerHTML = ''; // Очищення попереднього вмісту

            data.experience.forEach((exp, index) => {
                console.log(`Додавання досвіду ${index + 1}:`, exp);
                const expDiv = document.createElement('div');
                expDiv.classList.add('row', 'Open-Sans', 'text-light-gray');

                expDiv.innerHTML = `
                    <div>
                        <h4 class="text-bottom">${exp.position || 'Enter Job Position Here'}</h4>
                        <div style="padding-top: 15px; padding-left:2px">
                            <div style="padding-bottom: 15px;">
                                <span class="Bowl">${exp.duration || 'Present'}</span>
                                <span style="padding-left: 24px">${exp.company || 'Company Name / Location'}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        ${exp.description || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...'}
                    </div>
                `;

                experienceContainer.appendChild(expDiv);
            });
        }
    } else {
        console.warn('data.experience не є масивом:', data.experience);
    }
}

// Виклик функції для отримання та відображення даних
getData();




*/
/*
document.addEventListener("DOMContentLoaded", function() {
    const containerDivs = document.querySelectorAll('div[data-percent]');

    containerDivs.forEach(containerDiv => {
        const percentValue = containerDiv.getAttribute('data-percent') || 0;
        animateCircle(containerDiv, percentValue);
    });

    function animateCircle(containerDiv, percentValue) {
        const firstCircle = containerDiv.querySelector('.fir');
        const secondCircle = containerDiv.querySelector('.sec');

        const radius = firstCircle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        firstCircle.style.strokeDasharray = `${circumference}`;
        secondCircle.style.strokeDasharray = `${circumference}`;

        const deltaP = 2;
        const deltaRotation = 4.2;

        const adjustedPercent = Math.min(Math.max(percentValue, 0), 100);

        const strokeDashoffset1 = circumference * (1 - adjustedPercent / 100);
        const strokeDashoffset2 = circumference * (1 - (adjustedPercent + deltaP) / 100);

        const maxRotation1 = 72.32;
        const rotation1 = (adjustedPercent / 100) * maxRotation1;
        const rotation2 = rotation1 - deltaRotation;

        firstCircle.style.setProperty('--stroke-dashoffset', strokeDashoffset1);
        firstCircle.style.setProperty('--rotation', `${rotation1}deg`);

        secondCircle.style.setProperty('--stroke-dashoffset', strokeDashoffset2);
        secondCircle.style.setProperty('--rotation', `${rotation2}deg`);

        firstCircle.classList.add('animated-circle');
        secondCircle.classList.add('animated-circle');
    }
});
*/

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('h2.Artic').forEach(function(header) {
        var content = header.nextElementSibling;

        if (content && content.classList.contains('collapsible-content')) {
            // Встановлюємо початковий стан: розгорнутий
            content.style.height = content.scrollHeight + 'px';
            content.dataset.originalHeight = content.scrollHeight; // Зберігаємо оригінальну висоту
        }

        header.addEventListener('click', function() {
            if (content.classList.contains('collapsed')) {
                // Розгортаємо контент
                content.classList.remove('collapsed');

                // Оновлюємо висоту та тривалість переходу
                var height = content.dataset.originalHeight;
                content.style.transitionDuration = (height / 300) + 's';
                content.style.height = height + 'px';
            } else {
                // Згортаємо контент
                content.classList.add('collapsed');

                // Оновлюємо висоту та тривалість переходу
                var height = content.scrollHeight;
                content.style.transitionDuration = (height / 300) + 's';
                content.style.height = '0';
            }
        });
    });
});



// main.js
//
// async function getData() {
//     try {
//         const data = await fetch('/data/data.json', { cache: "no-store" }); // Запит на сервер
//  /*      if (!response.ok) throw new Error('Помилка при завантаженні даних');
//         const data = await response.json(); // Перетворення JSON у JavaScript об'єкт
//
//         animateAllCircles(); // Виклик анімації після рендерингу */
//         console.log("aaaaaaaa",data);
//         renderData(data); // Функція для відображення даних на сторінці
//     } catch (error) {
//         console.error('Помилка під час отримання даних:', error);
//     }
// }
//
// function renderData(data) {
//
//
//     //Оновлення заголовку
//     if (data.header) {
//         document.getElementById('header-name1').innerText = data.header.name1 ;
//         document.getElementById('header-name2').innerText = data.header.name2 ;
//         document.getElementById('header-title').innerText = data.header.title ;
//     }else{console.log('erterrte');}
//
//     // Оновлення секції "ABOUT ME"
//     if (data.aboutMe) {
//         document.getElementById('aboutMe-title').innerText = data.aboutMe.title || 'ABOUT ME_';
//         document.getElementById('aboutMe-content').innerText = data.aboutMe.content || 'Lorem ipsum dolor a consectetur adipiscing elit...';
//     }
//
//     // Оновлення контактної інформації
//     if (data.contactInfo) {
//         document.getElementById('contact-phone').innerText = data.contactInfo.phone || '+000 123 456 789';
//         document.getElementById('contact-email').innerText = data.contactInfo.email || 'username@gmail.com';
//         document.getElementById('contact-area').innerText = data.contactInfo.area || 'Your Street Address Here';
//     }
//
//     // Оновлення освіти
//     if (Array.isArray(data.education)) {
//         console.log('Обробка масиву освіти');
//         const educationContainer = document.getElementById('education-section');
//         if (educationContainer) {
//             educationContainer.innerHTML = ''; // Очищення попереднього вмісту
//
//             data.education.forEach((edu, index) => {
//                 console.log(`Додавання освіти ${index + 1}:`, edu);
//                 const eduDiv = document.createElement('div');
//                 eduDiv.classList.add('col', 'Data', 'text-dark-gray');
//
//                 eduDiv.innerHTML = `
//                     <span>${edu.major || 'ENTER YOUR MAJOR'}</span>
//                     <div class="Data3" style="padding-top:22px;">
//                         <div>${edu.university || 'Name Of Your University'}</div>
//                         <div>${edu.years || '2005–2009'}</div>
//                     </div>
//                 `;
//
//                 educationContainer.appendChild(eduDiv);
//             });
//         }
//     } else {
//         console.warn('data.education не є масивом:', data.education);
//     }
//
//     // Оновлення досвіду
//     if (Array.isArray(data.experience)) {
//         console.log('Обробка масиву досвіду');
//         const experienceContainer = document.getElementById('experience-section');
//         if (experienceContainer) {
//             experienceContainer.innerHTML = ''; // Очищення попереднього вмісту
//
//             data.experience.forEach((exp, index) => {
//                 console.log(`Додавання досвіду ${index + 1}:`, exp);
//                 const expDiv = document.createElement('div');
//                 expDiv.classList.add('row', 'Open-Sans', 'text-light-gray');
//
//                 expDiv.innerHTML = `
//                     <div>
//                         <h4 class="text-bottom">${exp.position || 'Enter Job Position Here'}</h4>
//                         <div style="padding-top: 15px; padding-left:2px">
//                             <div style="padding-bottom: 15px;">
//                                 <span class="Bowl">${exp.duration || 'Present'}</span>
//                                 <span style="padding-left: 24px">${exp.company || 'Company Name / Location'}</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         ${exp.description || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...'}
//                     </div>
//                 `;
//
//                 experienceContainer.appendChild(expDiv);
//             });
//         }
//     } else {
//         console.warn('data.experience не є масивом:', data.experience);
//     }
//
//     // Оновлення навичок
//     if (Array.isArray(data.skills)) {
//         console.log('Обробка масиву навичок');
//         const skillsContainer = document.getElementById('skills-section');
//         if (skillsContainer) {
//             skillsContainer.innerHTML = ''; // Очищення попереднього вмісту
//
//             data.skills.forEach((skill, index) => {
//                 console.log(`Додавання навички ${index + 1}:`, skill);
//                 const skillDiv = document.createElement('div');
//                 skillDiv.classList.add('col');
//
//                 skillDiv.innerHTML = `
//                     <div data-percent="${skill.percent}">
//                         <svg width="175" height="175" xmlns="http://www.w3.org/2000/svg">
//                             <circle class="circle_test third" cx="50%" cy="50%" r="75" />
//                             <circle class="circle_test sec" cx="50%" cy="50%" r="75" />
//                             <circle class="circle_test fir" cx="50%" cy="50%" r="75" />
//                             <text x="50%" y="45%" text-anchor="middle" class="CCCircle">
//                                 <tspan x="50%" dy="0%">${skill.name1}</tspan>
//                                  <tspan x="50%" dy="12%">${skill.name2}</tspan>
//
//                             </text>
//                         </svg>
//                     </div>
//                 `;
//
//                 skillsContainer.appendChild(skillDiv);
//             });
//         } else {
//             console.warn('Елемент з ID "skills-section" не знайдено');
//         }
//     } else {
//         console.warn('data.skills не є масивом:', data.skills);
//     }
// }
//
// // Функція для анімації всіх графіків
// function animateAllCircles() {
//     const containerDivs = document.querySelectorAll('div[data-percent]');
//
//     containerDivs.forEach(containerDiv => {
//         const percentValue = containerDiv.getAttribute('data-percent') || 0;
//         animateCircle(containerDiv, percentValue);
//     });
//
//     function animateCircle(containerDiv, percentValue) {
//         const firstCircle = containerDiv.querySelector('.fir');
//         const secondCircle = containerDiv.querySelector('.sec');
//
//         if (!firstCircle || !secondCircle) {
//             console.warn('Не знайдено необхідні елементи для анімації.');
//             return;
//         }
//
//         const radius = firstCircle.r.baseVal.value;
//         const circumference = 2 * Math.PI * radius;
//
//         firstCircle.style.strokeDasharray = `${circumference}`;
//         secondCircle.style.strokeDasharray = `${circumference}`;
//
//         const deltaP = 2;
//         const deltaRotation = 4.2;
//
//         const adjustedPercent = Math.min(Math.max(percentValue, 0), 100);
//
//         const strokeDashoffset1 = circumference * (1 - adjustedPercent / 100);
//         const strokeDashoffset2 = circumference * (1 - (adjustedPercent + deltaP) / 100);
//
//         const maxRotation1 = 72.32;
//         const rotation1 = (adjustedPercent / 100) * maxRotation1;
//         const rotation2 = rotation1 - deltaRotation;
//
//         firstCircle.style.setProperty('--stroke-dashoffset', strokeDashoffset1);
//         firstCircle.style.setProperty('--rotation', `${rotation1}deg`);
//
//         secondCircle.style.setProperty('--stroke-dashoffset', strokeDashoffset2);
//         secondCircle.style.setProperty('--rotation', `${rotation2}deg`);
//
//         firstCircle.classList.add('animated-circle');
//         secondCircle.classList.add('animated-circle');
//     }
// }
//
// // Виклик функції для отримання та відображення даних
// document.addEventListener('DOMContentLoaded', () => {
//     getData();
// });



// Функція для отримання даних з data.json
async function fetchData() {
    try {
        const response = await fetch('http://localhost:8080/data.json', { cache: 'no-store' });
        if (!response.ok) {
            throw new Error('Помилка мережі');
        }
        const data = await response.json();

        updateContent(data); // Виклик функції для оновлення вмісту сторінки
        animateAllCircles();
    } catch (error) {
        console.error('Сталася помилка:', error);
    }
}

// Функція для оновлення вмісту сторінки
function updateContent(data) {


    //Оновлення заголовку
    if (data.header) {
        document.getElementById('header-name1').innerText = data.header.name1 ;
        document.getElementById('header-name2').innerText = data.header.name2 ;
        document.getElementById('header-title').innerText = data.header.title ;
    }else{console.log('erterrte');}

    // Оновлення секції "ABOUT ME"
    if (data.aboutMe) {
        document.getElementById('aboutMe-title').innerText = data.aboutMe.title || 'ABOUT ME_';
        document.getElementById('aboutMe-content').innerText = data.aboutMe.content || 'Lorem ipsum dolor a consectetur adipiscing elit...';
    }

    // Оновлення контактної інформації
    if (data.contactInfo) {
        document.getElementById('contact-phone').innerText = data.contactInfo.phone || '+000 123 456 789';
        document.getElementById('contact-email').innerText = data.contactInfo.email || 'username@gmail.com';
        document.getElementById('contact-area').innerText = data.contactInfo.area || 'Your Street Address Here';
    }

    // Оновлення освіти
    if (Array.isArray(data.education)) {
        console.log('Обробка масиву освіти');
        const educationContainer = document.getElementById('education-section');
        if (educationContainer) {
            educationContainer.innerHTML = ''; // Очищення попереднього вмісту

            data.education.forEach((edu, index) => {
                console.log(`Додавання освіти ${index + 1}:`, edu);
                const eduDiv = document.createElement('div');
                eduDiv.classList.add('col', 'Data', 'text-dark-gray');

                eduDiv.innerHTML = `
                    <span>${edu.major || 'ENTER YOUR MAJOR'}</span>
                    <div class="Data3" style="padding-top:22px;">
                        <div>${edu.university || 'Name Of Your University'}</div>
                        <div>${edu.years || '2005–2009'}</div>
                    </div>
                `;

                educationContainer.appendChild(eduDiv);
            });
        }
    } else {
        console.warn('data.education не є масивом:', data.education);
    }

    // Оновлення досвіду
    // if (Array.isArray(data.experience)) {
    //     console.log('Обробка масиву досвіду');
    //     const experienceContainer = document.getElementById('experience-section');
    //     if (experienceContainer) {
    //         experienceContainer.innerHTML = ''; // Очищення попереднього вмісту
    //
    //         data.experience.forEach((exp, index) => {
    //             console.log(`Додавання досвіду ${index + 1}:`, exp);
    //             const expDiv = document.createElement('div');
    //             expDiv.classList.add('row', 'Open-Sans', 'text-light-gray');
    //
    //             expDiv.innerHTML = `
    //                 <div>
    //                     <h4 class="text-bottom">${exp.position || 'Enter Job Position Here'}</h4>
    //                     <div style="padding-top: 15px; padding-left:2px">
    //                         <div style="padding-bottom: 15px;">
    //                             <span class="Bowl">${exp.duration || 'Present'}</span>
    //                             <span style="padding-left: 24px">${exp.company || 'Company Name / Location'}</span>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div>
    //                     ${exp.description || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...'}
    //                 </div>
    //             `;
    //
    //             experienceContainer.appendChild(expDiv);
    //         });
    //     }
    // } else {
    //     console.warn('data.experience не є масивом:', data.experience);
    // }
    if (Array.isArray(data.experience)) {
        console.log('Обробка масиву досвіду');
        const experienceContainer = document.getElementById('experience-section');
        if (experienceContainer) {
            experienceContainer.innerHTML = ''; // Очищення попереднього вмісту

            data.experience.forEach((exp, index) => {
                console.log(`Додавання досвіду ${index + 1}:`, exp);
                const rowDiv = document.createElement('div');
                rowDiv.classList.add('row', 'Open-Sans', 'text-light-gray');

                const colDiv = document.createElement('div');
                colDiv.classList.add('col'); // Повна ширина колонки

                colDiv.innerHTML = `
                <div>
                    <h4 class="text-bottom">${exp.position || 'Enter Job Position Here'}</h4>
                    <div style="padding-top: 15px; padding-left:2px">
                        <div style="padding-bottom: 15px;">
                            <span class="Bowl">${exp.duration || 'Present'}</span>
                            <span style="padding-left: 24px">${exp.company || 'Company Name / Location'}</span>
                        </div>
                    </div>
                </div>
                <div>
                    ${exp.description || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...'}
                </div>
            `;

                rowDiv.appendChild(colDiv);
                experienceContainer.appendChild(rowDiv);
            });
        } else {
            console.warn('Елемент з ID "experience-section" не знайдено');
        }
    }

    // Оновлення навичок
    // if (Array.isArray(data.skills)) {
    //     console.log('Обробка масиву навичок');
    //     const skillsContainer = document.getElementById('skills-section');
    //     if (skillsContainer) {
    //         skillsContainer.innerHTML = ''; // Очищення попереднього вмісту
    //
    //         data.skills.forEach((skill, index) => {
    //             console.log(`Додавання навички ${index + 1}:`, skill);
    //             const skillDiv = document.createElement('div');
    //             skillDiv.classList.add('col');
    //
    //             skillDiv.innerHTML = `
    //                 <div data-percent="${skill.percent}">
    //                     <svg width="175" height="175" xmlns="http://www.w3.org/2000/svg">
    //                         <circle class="circle_test third" cx="50%" cy="50%" r="75" />
    //                         <circle class="circle_test sec" cx="50%" cy="50%" r="75" />
    //                         <circle class="circle_test fir" cx="50%" cy="50%" r="75" />
    //                         <text x="50%" y="45%" text-anchor="middle" class="CCCircle">
    //                             <tspan x="50%" dy="0%">${skill.name1}</tspan>
    //                              <tspan x="50%" dy="12%">${skill.name2}</tspan>
    //
    //                         </text>
    //                     </svg>
    //                 </div>
    //             `;
    //
    //             skillsContainer.appendChild(skillDiv);
    //         });
    //     } else {
    //         console.warn('Елемент з ID "skills-section" не знайдено');
    //     }
    // } else {
    //     console.warn('data.skills не є масивом:', data.skills);
    // }

    if (Array.isArray(data.skills)) {
        console.log('Обробка масиву навичок');
        const skillsContainer = document.getElementById('skills-section');
        if (skillsContainer) {
            skillsContainer.innerHTML = ''; // Очищення попереднього вмісту

            const rowDiv = document.createElement('div');
            rowDiv.classList.add('row'); // Додаємо контейнер-рядок

            data.skills.forEach((skill, index) => {
                console.log(`Додавання навички ${index + 1}:`, skill);
                const skillDiv = document.createElement('div');
                skillDiv.classList.add('col'); // Використовуємо класи для адаптивності

                skillDiv.innerHTML = `
                    <div data-percent="${skill.percent}">
                        <svg width="175" height="175" xmlns="http://www.w3.org/2000/svg">
                            <circle class="circle_test third" cx="50%" cy="50%" r="75" />
                            <circle class="circle_test sec" cx="50%" cy="50%" r="75" />
                            <circle class="circle_test fir" cx="50%" cy="50%" r="75" />
                            <text x="50%" y="45%" text-anchor="middle" class="CCCircle">
                                <tspan x="50%" dy="0%">${skill.name1}</tspan>
                                 <tspan x="50%" dy="12%">${skill.name2}</tspan>

                            </text>
                        </svg>
                    </div>
                `;

                rowDiv.appendChild(skillDiv);
            });

            skillsContainer.appendChild(rowDiv);
        } else {
            console.warn('Елемент з ID "skills-section" не знайдено');
        }
    }

}

// Функція для анімації всіх графіків
function animateAllCircles() {
    const containerDivs = document.querySelectorAll('div[data-percent]');

    containerDivs.forEach(containerDiv => {
        const percentValue = containerDiv.getAttribute('data-percent') || 0;
        animateCircle(containerDiv, percentValue);
    });

    function animateCircle(containerDiv, percentValue) {
        const firstCircle = containerDiv.querySelector('.fir');
        const secondCircle = containerDiv.querySelector('.sec');

        if (!firstCircle || !secondCircle) {
            console.warn('Не знайдено необхідні елементи для анімації.');
            return;
        }

        const radius = firstCircle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        firstCircle.style.strokeDasharray = `${circumference}`;
        secondCircle.style.strokeDasharray = `${circumference}`;

        const deltaP = 2;
        const deltaRotation = 4.2;

        const adjustedPercent = Math.min(Math.max(percentValue, 0), 100);

        const strokeDashoffset1 = circumference * (1 - adjustedPercent / 100);
        const strokeDashoffset2 = circumference * (1 - (adjustedPercent + deltaP) / 100);

        const maxRotation1 = 72.32;
        const rotation1 = (adjustedPercent / 100) * maxRotation1;
        const rotation2 = rotation1 - deltaRotation;

        firstCircle.style.setProperty('--stroke-dashoffset', strokeDashoffset1);
        firstCircle.style.setProperty('--rotation', `${rotation1}deg`);

        secondCircle.style.setProperty('--stroke-dashoffset', strokeDashoffset2);
        secondCircle.style.setProperty('--rotation', `${rotation2}deg`);

        firstCircle.classList.add('animated-circle');
        secondCircle.classList.add('animated-circle');
    }
}


// Викликаємо fetchData при завантаженні сторінки
document.addEventListener('DOMContentLoaded', fetchData);

