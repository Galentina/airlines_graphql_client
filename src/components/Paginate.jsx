

export const Paginate = (props) => {
    const {itemsPerPage, totalItems, pageCounter} = props;
    const pageNumbers=[];

    for (let i=1; i<=Math.ceil(totalItems/itemsPerPage); i++) { pageNumbers.push(i) };

    return (
        <>
            <ul className='pagination'>
                { pageNumbers.map(num =>
                    <li key={num} className='page-item'>
                        <a onClick={() => pageCounter(num)}>{num}</a>
                    </li>
                )}
            </ul>
        </>
    )
}
