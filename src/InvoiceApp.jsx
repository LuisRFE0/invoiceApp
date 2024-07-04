import { useEffect, useState } from "react";
import { Clientview } from "./components/Clientview";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";
import { getInvoice } from "./services/getInvoice";

const invoiceInitial = {
    id: 0,
    name: '',
    client: {
        name: '',
        lastName: '',
        address: {
            country: '',
            city: '',
            street: '',
            number: 0
        }
    },
    company: {
        name: '',
        fiscalNumber: 0,
    },
    items: []
}

export const InvoiceApp = () => {

    const [invoice, setInvoice] = useState(invoiceInitial);

    const [items, setItems] = useState([]);

    useEffect(() => {
        const data = getInvoice();
        setInvoice(data);
        setItems(data.items)
    }, [])

    const { total, id, name, client, company, items: itemsInitial } = invoice;
    const [invoiceItemsState, setInvoiceItemsState] = useState({
        product: '',
        price: '',
        quantity: '',
    });

    const { product, price, quantity } = invoiceItemsState;



    const [counter, setCounter] = useState(4);


    const onInputChange = ({ target: { name, value } }) => {


        setInvoiceItemsState({
            ...invoiceItemsState,
            [name]: value
        });
    }



    const onInvoiceSubmit = (event) => {
        event.preventDefault();
        setItems([...items, { id: counter, product, price, quantity }])
        setInvoiceItemsState({
            product: '',
            price: '',
            quantity: '',
        });

        setCounter(counter + 1);
    }

    // *****************************************************************HTML

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
                        <form className="w-50" onSubmit={onInvoiceSubmit}>
                            <input type="text" name="product" value={product} placeholder="Producto" className="form-control m-3"
                                onChange={onInputChange} />
                            <input type="text" name="price" value={price} placeholder="Precio" className="form-control m-3"
                                onChange={onInputChange} />
                            <input type="text" name="quantity" value={quantity} placeholder="Cantidad" className="form-control m-3"
                                onChange={onInputChange} />

                            <button type="submit" className="btn btn-primary m-3">Nuevo item</button>

                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
