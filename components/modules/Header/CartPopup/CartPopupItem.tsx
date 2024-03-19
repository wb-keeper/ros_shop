import Image from "next/image";
import Link from "next/link";
import DeleteCartItemBtn from "../../../../../../Download/rostelecom-shop-main/components/elements/DeleteCartItemBtn/DeleteCartItemBtn";
import { useCartItemAction } from "../../../../../../Download/rostelecom-shop-main/hooks/useCartItemAction";
import { formatPrice } from "../../../../../../Download/rostelecom-shop-main/lib/utils/common";
import { ICartItem } from "../../../../../../Download/rostelecom-shop-main/types/cart";
import ProductCounter from "../../../../../../Download/rostelecom-shop-main/components/modules/ProductsListItem/ProductCounter";

const CartPopupItem = ({ item }: { item: ICartItem }) => {
  const {
    deleteSpinner,
    increasePriceWithAnimation,
    decreasePriceWithAnimation,
    count,
    setCount,
    animatedPrice,
    handleDeleteCartItem,
  } = useCartItemAction(item);

  return (
    <>
      <DeleteCartItemBtn
        btnDisabled={deleteSpinner}
        callback={handleDeleteCartItem}
      />
      <div className="cart-list__item__img">
        <Image src={item.image} alt={item.name} width={96} height={96} />
      </div>
      <div className="cart-list__item__inner">
        <Link
          href={`/catalog/${item.category}/${item.productId}`}
          className="cart-list__item__title"
        >
          <span>
            {item.name.replace(".", "")}
            {item.size ? ", " : ""}
          </span>
          <span>{item.size.toLocaleUpperCase()}</span>
        </Link>
        <div className="cart-list__item__bottom">
          <ProductCounter
            className="cart-list__item__counter"
            count={count}
            setCount={setCount}
            increasePrice={increasePriceWithAnimation}
            decreasePrice={decreasePriceWithAnimation}
            cartItem={item}
            updateCountAsync
          />
          <span className="cart-list__item__price">
            {formatPrice(animatedPrice)} ₽
          </span>
        </div>
      </div>
    </>
  );
};

export default CartPopupItem;
