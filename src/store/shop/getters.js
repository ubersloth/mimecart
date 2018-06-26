// Profile getters
export const fullName = state => {
  return `${state.profile.data.firstName} ${state.profile.data.lastName}`.trim()
}

// Cart getters
export const cartProducts = state => {
  return state.shoppingCart.added.map(({ productId, qty }) => {
    const product =
      state
        .products.all
        .find(product => product.id === productId)

    return {
      ...product,
      quantity: qty
    }
  })
}

export const itemsQuantity = state => {
  return cartProducts(state).reduce((quantity, item) => {
    return quantity + item.quantity
  }, 0)
}

export const subtotal = state => {
  const sum = cartProducts(state).reduce((subtotal, item) => {
    return subtotal + item.price * item.quantity
  }, 0)

  return sum
}

export const taxes = state => subtotal(state) * 0.005

export const shipping = state => {
  const shippings = cartProducts(state).map(item => item.shipping)

  if (!shippings.length || subtotal(state) > 100) {
    return 0
  } else {
    return shippings.reduce((cost, shipping) => cost + shipping)
  }
}

export const total = state => {
  return subtotal(state) + taxes(state) + shipping(state)
}
