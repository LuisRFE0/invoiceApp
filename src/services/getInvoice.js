import { invoice } from "../data/invoice"

export const getInvoice = () => {

    // let total = 0;
    // invoice.items.forEach(item => {
    //     total = total + item.price * item.quantity
    // });

    const total = recalculateTotal(invoice.items);



    return { ...invoice, total };
}

export const recalculateTotal = (items = []) => {

    return items
        .map(item => item.price * item.quantity)
        .reduce((accumalator, currentValue) => accumalator + currentValue, 0)

}