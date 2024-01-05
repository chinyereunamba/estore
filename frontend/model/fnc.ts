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

export {getBrand, getCategory, getProduct}