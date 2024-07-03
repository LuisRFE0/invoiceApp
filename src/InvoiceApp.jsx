import { useState } from "react";
import { Clientview } from "./components/Clientview";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";
import { getInvoice } from "./services/getInvoice";


export const InvoiceApp = () => {

    const { total, id, name, client, company, items: itemsInitial } = getInvoice();
    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');

    const [items, setItems] = useState(itemsInitial);

    const [counter, setCounter] = useState(4);


    return (
        <>

            <div className='container'>
                <div className='card my-3'>
                    <div className='card-header'>Factura</div>
                    <div className='card-body'>
                        <InvoiceView id={id} name={name} />
                        <div className='row my-3'>
                            <div className='col'>
                                <Clientview client={client} />
                            </div>
                            <div className='col'>
                                <CompanyView company={company} />
                            </div>
                        </div>
                        <ListItemsView items={items} />
                        <TotalView total={total} />
                        <form className="w-50" onSubmit={event => {
                            event.preventDefault();
                            setItems([...items, { id: counter, product: productValue, price: priceValue, quantity: quantityValue }])
                            setPriceValue('');
                            setProductValue('');
                            setQuantityValue('');
                            setCounter(counter + 1);
                        }}>
                            <input type="text" name="product" value={productValue} placeholder="Producto" className="form-control m-3"
                                onChange={event => {
                                    console.log(event.target.value);
                                    setProductValue(event.target.value);
                                }} />
                            <input type="text" name="price" value={priceValue} placeholder="Precio" className="form-control m-3"
                                onChange={event => {
                                    console.log(event.target.value);
                                    setPriceValue(event.target.value);

                                }} />
                            <input type="text" name="quantity" value={quantityValue} placeholder="Cantidad" className="form-control m-3"
                                onChange={event => {
                                    console.log(event.target.value);
                                    setQuantityValue(event.target.value);

                                }} />

                            <button type="submit" className="btn btn-primary m-3">Nuevo item</button>

                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
