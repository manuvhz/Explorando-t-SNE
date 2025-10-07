import type { ApplicationCardData, LinkData, GlossaryTerm, ComparisonData, LimitationData } from './types';

export const NAV_LINKS = [
  { name: 'Inicio', href: '#home' },
  { name: '¿Qué es?', href: '#what-is' },
  { name: '¿Cómo funciona?', href: '#how-it-works' },
  { name: 'Las Matemáticas', href: '#math' },
  { name: 'Comparativa', href: '#comparison' },
  { name: 'Aplicaciones', href: '#applications' },
  { name: 'Limitaciones', href: '#limitations' },
  { name: 'Glosario', href: '#glossary' },
  { name: 'Aprende más', href: '#learn-more' },
];

export const APPLICATION_CARDS: ApplicationCardData[] = [
  {
    icon: 'Users',
    title: 'Análisis de Clientes',
    description: 'Segmentación de clientes en marketing para entender comportamientos y patrones de compra.',
    details: 't-SNE ayuda a las empresas a visualizar grandes bases de datos de clientes, identificando grupos naturales (clusters) con características similares. Esto permite campañas de marketing personalizadas, mejorando la retención y la satisfacción del cliente al ofrecer productos y servicios más relevantes.',
    image: 'https://picsum.photos/seed/marketing/800/400'
  },
  {
    icon: 'Dna',
    title: 'Biología Computacional',
    description: 'Clasificación de tipos de células y análisis de datos genómicos complejos.',
    details: 'En la investigación biomédica, t-SNE es fundamental para analizar datos de citometría de flujo y secuenciación de ARN de célula única (scRNA-seq). Permite a los científicos visualizar y distinguir diferentes tipos de células en una muestra de tejido, lo que es crucial para estudiar enfermedades como el cáncer y entender el desarrollo celular.',
    image: 'https://picsum.photos/seed/biology/800/400'
  },
  {
    icon: 'FileText',
    title: 'Procesamiento de Lenguaje',
    description: 'Visualización de "word embeddings" para explorar relaciones semánticas entre palabras.',
    details: 'Modelos como Word2Vec o GloVe representan palabras como vectores en un espacio de alta dimensión. t-SNE permite proyectar estos vectores en 2D, mostrando cómo palabras con significados similares (ej. "rey", "reina", "príncipe") se agrupan. Esto es vital para entender el funcionamiento interno de los modelos de lenguaje.',
    image: 'https://picsum.photos/seed/nlp/800/400'
  },
  {
    icon: 'ScanFace',
    title: 'Reconocimiento Facial',
    description: 'Visualización de cómo las redes neuronales agrupan rostros de la misma persona.',
    details: 'Las redes neuronales convolucionales (CNNs) aprenden a extraer características únicas de los rostros. Al aplicar t-SNE a estas características, se puede visualizar si el modelo está agrupando correctamente las imágenes de la misma persona y separándolas de otras, lo que ayuda a evaluar y depurar los sistemas de reconocimiento facial.',
    image: 'https://picsum.photos/seed/face/800/400'
  }
];

export const LIMITATIONS_DATA: LimitationData[] = [
    {
        title: "Las distancias entre clústeres no son significativas",
        description: "Una separación grande entre dos clústeres no significa necesariamente que sean más diferentes que dos clústeres más cercanos. t-SNE expande las áreas densas y comprime las dispersas.",
        type: 'limitation'
    },
    {
        title: "El tamaño de los clústeres es relativo",
        description: "El algoritmo tiende a producir clústeres de tamaños similares, sin importar su densidad real en el espacio original. No bases tus conclusiones en el tamaño visual de un grupo.",
        type: 'limitation'
    },
    {
        title: "Es para visualizar, no para agrupar",
        description: "Aunque t-SNE revela clústeres, no es un algoritmo de clustering como K-Means. Úsalo para la exploración visual, y luego aplica un algoritmo de clustering dedicado si es necesario.",
        type: 'tip'
    },
    {
        title: "Experimenta con la perplejidad",
        description: "Este es el hiperparámetro más importante. Un valor bajo se enfoca en la estructura local, mientras que uno alto considera la global. Prueba varios valores (ej. 5, 30, 50) para entender mejor tus datos.",
        type: 'tip'
    },
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
    {
        term: "Perplejidad",
        definition: "Un parámetro que equilibra la atención que t-SNE presta a los puntos cercanos frente a los lejanos. En la práctica, se puede pensar en él como una estimación del número de vecinos cercanos que tiene cada punto."
    },
    {
        term: "Embedding",
        definition: "El proceso de mapear o representar datos de un espacio de alta dimensionalidad a uno de baja dimensionalidad (como 2D o 3D). El resultado es el 'embedding' o la 'incrustación' de los datos."
    },
    {
        term: "Divergencia de Kullback-Leibler (KL)",
        definition: "Una medida de cómo una distribución de probabilidad es diferente de otra. t-SNE la utiliza para minimizar la diferencia entre las similitudes de los puntos en el espacio de alta y baja dimensión."
    },
    {
        term: "Reducción de Dimensionalidad",
        definition: "El proceso de reducir el número de variables (dimensiones) en un conjunto de datos, conservando la mayor cantidad de información relevante posible. Es útil para la visualización y para mejorar el rendimiento de otros algoritmos."
    },
    {
        term: "Distribución t de Student",
        definition: "Un tipo de distribución de probabilidad que t-SNE utiliza en el espacio de baja dimensión para calcular las similitudes entre puntos. Sus 'colas pesadas' ayudan a separar mejor los clústeres distintos."
    },
    {
        term: "Clúster",
        definition: "Un grupo de puntos de datos que son más similares entre sí que con los puntos de otros grupos. El objetivo de t-SNE es hacer que estos clústeres sean visualmente identificables."
    }
];

export const LEARN_MORE_LINKS: LinkData[] = [
    { name: 'Paper Original de t-SNE', url: 'https://www.jmlr.org/papers/v9/vandermaaten08a.html', type: 'paper' },
    { name: 'Visualización de t-SNE (Distill)', url: 'https://distill.pub/2016/misread-tsne/', type: 'video' },
    { name: 'Curso de Machine Learning (Coursera)', url: 'https://www.coursera.org/learn/machine-learning', type: 'course' },
];

const CLUSTER_COLORS = ['#64ffda', '#ff6b6b', '#f9c74f'];
const generateClusterPoints = (cx: number, cy: number, numPoints: number, radius: number, clusterIndex: number) => 
    Array.from({ length: numPoints }, () => {
        const angle = Math.random() * 2 * Math.PI;
        const r = Math.sqrt(Math.random()) * radius;
        return {
            x: cx + r * Math.cos(angle),
            y: cy + r * Math.sin(angle),
            cluster: clusterIndex,
        };
    });

const basePoints = [
    ...generateClusterPoints(50, 50, 20, 25, 0),
    ...generateClusterPoints(130, 80, 20, 25, 1),
    ...generateClusterPoints(80, 150, 20, 25, 2),
];

export const COMPARISON_DATA: ComparisonData[] = [
    {
        algorithm: 'PCA',
        title: 'PCA (Análisis de Componentes Principales)',
        description: 'Busca la dirección de máxima varianza en los datos y la proyecta, simplificando la estructura general.',
        pros: ['Muy rápido y computacionalmente barato.', 'Determinista (siempre da el mismo resultado).', 'Bueno para preservar la estructura global.'],
        cons: ['No es efectivo para visualizar clústeres complejos.', 'Puede mezclar clústeres que son no-lineales.'],
        points: basePoints.map(p => ({
            ...p,
            x: p.x * 0.8 + p.y * 0.6 - 20,
            y: 100 + (p.x * 0.1 - p.y * 0.1) + (Math.random() - 0.5) * 20,
        }))
    },
    {
        algorithm: 't-SNE',
        title: 't-SNE (El nuestro)',
        description: 'Se enfoca en mantener los vecinos cercanos juntos, siendo excelente para visualizar la agrupación de datos.',
        pros: ['Excelente para visualizar clústeres bien separados.', 'Revela la estructura local de los datos de forma muy clara.'],
        cons: ['Computacionalmente intensivo.', 'Las distancias entre clústeres no son significativas.', 'Puede ser sensible a los hiperparámetros.'],
        points: basePoints.map(p => {
            let newCenter = { x: 0, y: 0 };
            if (p.cluster === 0) newCenter = { x: 40, y: 50 };
            if (p.cluster === 1) newCenter = { x: 150, y: 70 };
            if (p.cluster === 2) newCenter = { x: 90, y: 160 };
            return {
                ...p,
                x: newCenter.x + (p.x - (p.cluster === 0 ? 50 : p.cluster === 1 ? 130 : 80)) * 0.5,
                y: newCenter.y + (p.y - (p.cluster === 0 ? 50 : p.cluster === 1 ? 80 : 150)) * 0.5,
            };
        })
    },
    {
        algorithm: 'UMAP',
        title: 'UMAP (Uniform Manifold Approximation)',
        description: 'Un algoritmo moderno que balancea la preservación de la estructura local con la global, y es muy rápido.',
        pros: ['Muy rápido, a menudo más que t-SNE.', 'Buen balance entre estructura local y global.', 'Preserva mejor las distancias entre clústeres.'],
        cons: ['Es más reciente y menos establecido que PCA/t-SNE.', 'La interpretación puede ser compleja.'],
        points: basePoints.map(p => {
            let newCenter = { x: 0, y: 0 };
            if (p.cluster === 0) newCenter = { x: 50, y: 60 };
            if (p.cluster === 1) newCenter = { x: 140, y: 80 };
            if (p.cluster === 2) newCenter = { x: 80, y: 150 };
            return {
                ...p,
                x: newCenter.x + (p.x - (p.cluster === 0 ? 50 : p.cluster === 1 ? 130 : 80)) * 0.4,
                y: newCenter.y + (p.y - (p.cluster === 0 ? 50 : p.cluster === 1 ? 80 : 150)) * 0.4,
            };
        })
    },
];

export const VISUAL_COLORS = CLUSTER_COLORS;