// Crear el gráfico de habilidades con Chart.js
const ctx = document.getElementById('skillsChart').getContext('2d');
const skillsChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['SQL', 'Power BI', 'Excel', 'Office 365', 'Python'],
        datasets: [{
            label: 'Habilidades Técnicas',
            data: [25, 25, 20, 20, 10],
            backgroundColor: [
                '#774a5c',
                '#a17073',
                '#43597a',
                '#1f0f2c',
                '#4b2a44'
            ]
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
        }
        responsive: true,
        maintainAspectRatio: false,
        onHover: function(event, chartElement) {
            if (chartElement.length) {
                const index = chartElement[0].index;
                const label = skillsChart.data.labels[index];
                const skillDetails = getSkillDetails(label);
                document.getElementById('skill-details').innerText = skillDetails;
            } else {
                document.getElementById('skill-details').innerText = '';
            }
        }
    }
});

// Función para mostrar detalles de habilidades
function getSkillDetails(label) {
    const details = {
        'SQL': 'Consultas avanzadas, optimización y manejo de grandes volúmenes de datos.',
        'Power BI': 'Dashboards interactivos, DAX, y análisis de datos comerciales.',
        'Excel': 'Análisis con tablas dinámicas, Power Query y automatización con macros.',
        'Office 365': 'Implementación y soporte de herramientas colaborativas.',
        'Python': 'Manipulación de datos con pandas y automatización de tareas simples.'
    };
    return details[label];
}
