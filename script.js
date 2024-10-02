// Crear el gráfico de habilidades con Chart.js
const ctx = document.getElementById('skillsChart').getContext('2d');
const skillsChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Power BI','SQL','Python','Office 365','ETL','Excel'],
        datasets: [{
            //label: 'Habilidades Técnicas',
            data: [45,30,35,20,25,20],
            backgroundColor: [
                '#a17073',
                '#774a5c',
                '#4b2a44',
                '#1f0f2c',
                '#313354',
                '#43597a'
            ],
            borderColor: '#ffffff', // Borde blanco entre los sectores
            borderWidth: 0.5 // Grosor del borde
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false // Deshabilita la leyenda
            },
            datalabels: {
                color: '#ffffff', // Color blanco para las etiquetas
                formatter: (value, context) => {
                    return context.chart.data.labels[context.dataIndex]; // Mostrar las etiquetas correspondientes
                },
                font: {
                    weight: 'bold',
                    size: 14 // Tamaño de letra de las etiquetas
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 20,
                bottom: 20
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
        'Python': 'Manipulación de datos con pandas y automatización de tareas simples.',
        'ETL': 'Extracción, transformación y carga de datos para análisis eficientes.'
    };
    return details[label];
}