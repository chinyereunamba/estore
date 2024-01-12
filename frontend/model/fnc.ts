async function getCategory(): Promise<Category[]> {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}v1/categories`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    const data = await response.json();
    return data;
}

const getBrand = async (): Promise<Brand[]> => {
    const response = await fetch(`${process.env.NEXTAUTH_BACKEND_URL}v1/brands`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();
    return data;
};
const getProduct = async (): Promise<Products[]> => {
    const response = await fetch(`${process.env.NEXTAUTH_BACKEND_URL}v1/products`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();
    return data;
};

type OrderProps = {
    quantity: number,
    product: number,
}

const getOrderItemsList = async (): Promise<Order[]> => {
    const res = await fetch(process.env.NEXTAUTH_BACKEND_URL + "v1/order", {
        method: 'GET',

        headers: {
            'Content-Type': "application/json"
        }
    })
    const data = await res.json()
    return data
}

const getProductById = async (id: number): Promise<Products> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}v1/products/${id}`, {
        headers: {
            'Content-Type': "application/json"
        },
        method: "GET",
    })
    const product = await res.json()
    return product
}

const deleteOrderItem = async (id: number): Promise<Order> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}v1/order/${id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "DELETE"
    })
    const orderItem = await res.json()
    return orderItem
}

type AddToCartProps = {
    user: number | null,
    quantity: number,
    product: number

}


const addToCart = async (body: AddToCartProps): Promise<Order> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}v1/order`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(body)
    })
    const cart = await response.json()
    return cart
}


export { getBrand, getCategory, getProduct, getOrderItemsList, getProductById, deleteOrderItem, addToCart }

export type { AddToCartProps }