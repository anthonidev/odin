import {
    GET_PRODUCT_OK,
    GET_PRODUCT_FAIL,
    GET_PRODUCTS_HOME_OK,
    GET_PRODUCTS_HOME_FAIL,

    GET_PRODUCTS_OK,
    GET_PRODUCTS_FAIL,
    GET_PRODUCTS_BY_ARRIVAL_OK,
    GET_PRODUCTS_BY_ARRIVAL_FAIL,
    GET_PRODUCTS_BY_SOLD_OK,
    GET_PRODUCTS_BY_SOLD_FAIL,

    FILTER_PRODUCTS_OK,
    FILTER_PRODUCTS_FAIL
} from "./types"

import axios from "axios";

export const get_products_frontpage = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/frontpage`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_PRODUCTS_HOME_OK,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_PRODUCTS_HOME_FAIL
            });
        }

    } catch (err) {
        dispatch({
            type: GET_PRODUCTS_HOME_FAIL
        });
    }
}

export const get_product = (productId) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/product/${productId}`, config);

        if (res.status === 200) {

            dispatch({
                type: GET_PRODUCT_OK,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_PRODUCT_FAIL
            });
        }

    } catch (err) {
        dispatch({
            type: GET_PRODUCT_FAIL
        });
    }
}


export const get_pages_products = (url,search, color_id,category_id, price_range, sort_by, order) => async dispatch => {

    if(search!=='' ||color_id!=='0' ||category_id!=='0' ||price_range!== 'Any' ||sort_by!=='created' || order !== 'desc' ){
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };

        const body = JSON.stringify({
            color_id,
            category_id,
            price_range,
            sort_by,
            order,
            search
        });
    
        try {
            const res = await axios.post(`${url}`,  body, config);
    
            if (res.status === 200 ) {
                dispatch({
                    type: FILTER_PRODUCTS_OK,
                    payload: res.data
                });
            } else {
                dispatch({
                    type: FILTER_PRODUCTS_FAIL
                });
            }
        } catch (err) {
            dispatch({
                type: FILTER_PRODUCTS_FAIL
            });
        }
    }else{
        const config = {
            headers: {
                'Accept': 'application/json'
            }
        };
    
        try {
            const res = await axios.get(`${url}`, config);
    
            if (res.status === 200) {
                dispatch({
                    type: GET_PRODUCTS_OK,
                    payload: res.data
                });
            } else {
                dispatch({
                    type: GET_PRODUCTS_FAIL
                });
            }
    
        } catch (err) {
            dispatch({
                type: GET_PRODUCTS_FAIL
            });
        }
    }

    
}



export const get_products_by_arrival = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/get-products?sortBy=date_created&order=desc&limit=3`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_PRODUCTS_BY_ARRIVAL_OK,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_PRODUCTS_BY_ARRIVAL_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_PRODUCTS_BY_ARRIVAL_FAIL
        });
    }
}

export const get_products_by_sold = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/get-products?sortBy=sold&order=desc&limit=3`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_PRODUCTS_BY_SOLD_OK,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_PRODUCTS_BY_SOLD_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_PRODUCTS_BY_SOLD_FAIL
        });
    }
}

export const get_products = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/get-products`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_PRODUCTS_OK,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_PRODUCTS_FAIL
            });
        }

    } catch (err) {
        dispatch({
            type: GET_PRODUCTS_FAIL
        });
    }
}


export const get_filtered_products = (search, color_id,category_id, price_range, sort_by, order) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({
        color_id,
        category_id,
        price_range,
        sort_by,
        order,
        search
    });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/product/by/search`, body, config);

        if (res.status === 200 && !res.data.error) {
            dispatch({
                type: FILTER_PRODUCTS_OK,
                payload: res.data
            });
        } else {
            dispatch({
                type: FILTER_PRODUCTS_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: FILTER_PRODUCTS_FAIL
        });
    }
}

