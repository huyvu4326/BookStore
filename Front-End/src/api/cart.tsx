import instance from "./instance"

export const getCartOfUser = () => {
    return instance.get("/cart", {
        headers: {
            Authorization:`Bearer ${JSON.parse(localStorage.getItem('token')!)}`
          },
    })
}
export const addItemCart = (itemNew: any) => {
    return instance.post("/cart", itemNew, {
        headers: {
            Authorization:`Bearer ${JSON.parse(localStorage.getItem('token')!)}`
          },
    })
}
export const removeItemProductCart = (itemNew: any) => {
    return instance.post("/cart/removeProductItem", itemNew, {
        headers: {
            Authorization:`Bearer ${JSON.parse(localStorage.getItem('token')!)}`
          }
    })
}
export const removeItem = (itemNew: any) => {
    return instance.post("/cart/removeItem", itemNew, {
        headers: {
            Authorization:`Bearer ${JSON.parse(localStorage.getItem('token')!)}`
          },
    })
}