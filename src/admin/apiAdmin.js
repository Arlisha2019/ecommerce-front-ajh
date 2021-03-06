import {API_AUTH} from '../config';



export const createCategory = (userId, token, category) => {
    // console.log(name, email, password);
    return fetch(`${API_AUTH}/category/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`

        },
        body: JSON.stringify(category)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err)
    })
}


export const createProduct = (userId, token, product) => {
    // console.log(name, email, password);
    return fetch(`${API_AUTH}/product/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err)
    })
}


export const getCategories = () => {
    return fetch(`${API_AUTH}/categories` , {
        method: 'GET'
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const listOrders = (userId, token) => {
    return fetch(`${API_AUTH}/order/list/${userId}` , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}


export const getStatusValues = (userId, token) => {
    return fetch(`${API_AUTH}/order/status-values/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
  ///order/:orderId/status/:userId
export const updateOrderStatus = (userId, token, orderId, status) => {
    return fetch(`${API_AUTH}/order/${orderId}/status/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ 
            status,
            orderId
        })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};




/** 
 * to perform CRUD on products 
 * get all products
 * get a single product 
 * update single product
 * delete sigle product
 */

export const getProducts = () => {
    return fetch(`${API_AUTH}/products?limit=undefined` , {
        method: 'GET'
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const getProduct = (productId) => {
    return fetch(`${API_AUTH}/product/${productId}` , {
        method: 'GET'
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const deleteProduct = (productId, userId, token) => {
    return fetch(`${API_AUTH}/product/${productId}/${userId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
       
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateProduct = (productId, userId, token, product) => {
    return fetch(`${API_AUTH}/product/${productId}/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
       
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
