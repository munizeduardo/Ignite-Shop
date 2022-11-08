import Image from "next/image";
import logoImg from '../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { HeaderContainer, ToggleCart } from "../styles/components/Header";
import { Handbag } from "phosphor-react";
import { useShoppingCart } from "use-shopping-cart";

export function Header() {
  const { cartCount } = useShoppingCart()

  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" />
      
        <ToggleCart>
          <Handbag size={32} color="white" weight="bold" />
          {cartCount > 0 && <span>{cartCount}</span>}
        </ToggleCart>
      
    </HeaderContainer>
  )
}