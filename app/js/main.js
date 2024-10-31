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
