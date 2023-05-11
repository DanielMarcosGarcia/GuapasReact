const ItemListContainer = ({ stock }) => {

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <div className="alert alert-danger" role="alert">
                    {stock}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ItemListContainer;