function CreateProduct() {
    return (
        <div>
            <form>
                <div className="flex gap-5 md:flex-col">
                    <label>Name: </label>
                    <input />
                </div>
                <div className="flex gap-5 md:flex-col">
                    <label>Description: </label>
                    <input />
                </div>
                <div className="flex gap-5 md:flex-col">
                    <label>Price: </label>
                    <input />
                </div>
                <div className="flex gap-5 md:flex-col">
                    <label>Quantity: </label>
                    <input />
                </div>
            </form>
        </div>
    );
}

export default CreateProduct;
