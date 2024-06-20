import React from 'react'
import { getInvoice } from '../services/getInvoice'
import { InvoiceView } from './InvoiceView';
import { Clientview } from './Clientview';
import { CompanyView } from './CompanyView';

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


                        <h4>Productos de la factura</h4>
                        <table className='table table-striped table-hover'>
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(({ id, product, price, quantity }) =>
                                (
                                    <tr key={id}>
                                        <td>{product}</td>
                                        <td>{price}</td>
                                        <td>{quantity}</td>
                                    </tr>
                                )
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}
