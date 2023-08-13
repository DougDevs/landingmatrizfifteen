interface IProperties {
    title: string
    price: string
}

export const propertiesData: IProperties[] = [
    {
        title: 'Casa de luxo com 3 quartos',
        price: '$ 1,200,000.00'
    }, {
        title: 'Casa de luxo com 8 quartos',
        price: '$ 6,000,000.00'
    }, {
        title: 'Casa de luxo com 2 quartos',
        price: '$ 1,000,000.00'
    }, {
        title: 'Casa de luxo com 4 quartos',
        price: '$ 2,500,000.00'
    }, {
        title: 'Casa de luxo com 9 quartos',
        price: '$ 8,800,000.00'
    }, {
        title: 'Casa de luxo com 7 quartos',
        price: '$ 5,500,000.00'
    }
]

interface ITestimonial {
    title: string
    fecha: string
}

export const testimonialsData: ITestimonial[] = [
    {
        title: 'Estupendo',
        fecha: '10 de agosto, 2023'
    }, {
        title: 'Alta gama',
        fecha: '20 de setembro, 2023'
    }, {
        title: 'Titulo',
        fecha: '30 de novembro, 2023'
    }
]