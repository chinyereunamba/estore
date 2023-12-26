interface Products {
    "id": number,
    "name": string,
    "product_id": string,
    "description": string,
    "price": string,
    "quantity": number,
    "weight": number,
    "brand": {
        "id": number,
        "brand": string,
        "date_created": string
    },
    "category": {
        "id": number,
        "category": string,
        "date_created": string
    },
    "image": string,
    "product_images": string[]
}