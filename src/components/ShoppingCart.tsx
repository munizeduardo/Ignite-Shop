import { CartContainer, CartItem, CartItemDetails, CartItemIconContainer, CartItemsContainer, CloseCart, ConfirmDetails } from "../styles/components/ShoppingCart";
import * as Dialog from '@radix-ui/react-dialog'
import Image from "next/image";
import { X } from "phosphor-react";
import { useShoppingCart } from "use-shopping-cart";
import axios from "axios";

export function ShoppingCart() {
  const { cartDetails, cartCount, formattedTotalPrice, decrementItem } = useShoppingCart()
  const cartItems = Object.values(cartDetails)

  async function handleCheckout() {
    try {
      const response = await axios.post('/api/checkout', {
        priceId: cartItems.map(item => {
          return {
            price: item.id,
            quantity: item.quantity
          }
        }),
      })

      const { checkoutUrl } = response.data
      
      window.location.href = checkoutUrl
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <CartContainer>
      <Dialog.Title>
        Shopping cart
      </Dialog.Title>

      <CloseCart>
        <X size={24} weight="bold" />
      </CloseCart>

      <CartItemsContainer>
        {cartItems.map(product => {
          return (
            <CartItem key={product.id}>
              <CartItemIconContainer>
                <Image src={product.image} alt="" width={102} height={94} />
              </CartItemIconContainer>

              <CartItemDetails>
                <span>{product.name}</span>
                <span className="itemQuantity">Quantity: {product.quantity}</span>
                <strong>{product.formattedValue}</strong>
                <button onClick={() => decrementItem(product.id)}>Remove</button>
              </CartItemDetails>
            </CartItem>
          )
        })}
      </CartItemsContainer>

      <ConfirmDetails>
        <div>
          <span className="quantityText">Quantity</span>
          <span className="quantity">{cartCount} item(s)</span>
        </div>
        <div>
          <strong className="priceText">Total</strong>
          <strong className="price">{formattedTotalPrice}</strong>
        </div>

        <button onClick={() => handleCheckout()}>
          Proceed to checkout
        </button>
      </ConfirmDetails>
    </CartContainer>
  )
}