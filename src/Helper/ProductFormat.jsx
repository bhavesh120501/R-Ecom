export const ProductFormat = ({price}) => {
    return Intl.NumberFormat("en-IN",{
        style:"currency",
        currency:"INR",
        maximumFractionDigits:2,
    }).format(price/100);
}
