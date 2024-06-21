import { Clientview } from "./components/Clientview";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { getInvoice } from "./services/getInvoice";


export const InvoiceApp = () => {

    const { id, name, client, company, items } = getInvoice();

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
                    </div>
                </div>
            </div>

        </>
    )
}
