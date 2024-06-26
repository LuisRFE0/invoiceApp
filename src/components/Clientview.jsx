
export const Clientview = ({ client }) => {
    const {
        name: nameClient,
        lastName,
        address: {
            country,
            city,
            street,
            number }
    } = client


    return (
        <>
            <h3>Datos del cliente</h3>
            <ul className='list-group'>
                <li className='list-group-item active'>{nameClient} {lastName}</li>
                <li className='list-group-item'>{country} / {city}</li>
                <li className='list-group-item'>{number}</li>
            </ul>
        </>
    )
}
