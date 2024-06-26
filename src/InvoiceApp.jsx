import { Clientview } from "./components/Clientview";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";
import { getInvoice } from "./services/getInvoice";


export const InvoiceApp = () => {

    const { total, id, name, client, company, items } = getInvoice();

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
                        <form action="">
                            <input type="text" name="product" placeholder="Producto" className="form-control m-3"
                                onChange={event => {
                                    console.log(event.target.value);
                                }} />
                            <input type="text" name="price" placeholder="Precio" className="form-control m-3"
                                onChange={event => {
                                    console.log(event.target.value);
                                }} />
                            <input type="text" name="quantity" placeholder="Cantidad" className="form-control m-3"
                                onChange={event => {
                                    console.log(event.target.value);
                                }} />

                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
