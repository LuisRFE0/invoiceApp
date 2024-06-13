import React from 'react'
import { invoice } from '../data/invoice'
import { getInvoice } from '../services/getInvoice'

export const InvoiceApp = () => {

    const invoice = getInvoice();
    return (
        <>

            <h1>Factura</h1>
            <ul>
                <li>ID: {invoice.id}</li>
                <li>Name: {invoice.name}</li>
            </ul>

        </>
    )
}
