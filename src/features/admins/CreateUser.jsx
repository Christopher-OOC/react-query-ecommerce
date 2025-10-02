function CreateUser() {
    return (
        <div>
            <form className="flex flex-col items-center gap-5">
                <h1>Create User</h1>
                <div>
                    <label>Full Name: </label>
                    <input
                        className="w-[200px] rounded-lg border border-gray-300 px-4 py-2 text-gray-700 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        type="text"
                    />
                </div>
                <div>
                    <label>Date of Birth: </label>
                    <input
                        className="w-[200px] rounded-lg border border-gray-300 px-4 py-2 text-gray-700 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        type="date"
                    />
                </div>
                <div>
                    <label>Email: </label>
                    <input
                        className="w-[200px] rounded-lg border border-gray-300 px-4 py-2 text-gray-700 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        type="text"
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        className="w-[200px] rounded-lg border border-gray-300 px-4 py-2 text-gray-700 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        type="password"
                    />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input
                        className="w-[200px] rounded-lg border border-gray-300 px-4 py-2 text-gray-700 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        type="password"
                    />
                </div>
                <div>
                    <button className="m-6 bg-blue-500 p-4">Create User</button>
                </div>
            </form>
        </div>
    );
}

export default CreateUser;
