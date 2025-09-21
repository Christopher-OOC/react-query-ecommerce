function CreateUser() {
    return (
        <div>
            <h1>Create User</h1>
            <form>
                <div>
                    <label>Full Name: </label>
                    <input type="text" />
                </div>
                <div>
                    <label>Date of Birth: </label>
                    <input type="date" />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" />
                </div>
                <div>
                    <button>Create User</button>
                </div>
            </form>
        </div>
    );
}

export default CreateUser;
