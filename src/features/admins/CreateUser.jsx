import { useForm } from "react-hook-form";

function CreateUser() {
    const { register, handleSubmit, getValues, formState, reset } = useForm();

    const { errors } = formState;

    console.log(errors);

    function onSubmit(data) {
        console.log("DATA: ", data);
        reset();
    }

    function onError(errors) {
        console.log("ERRORS: ", errors);
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit, onError)}
                className="flex flex-col items-center gap-5"
            >
                <h1>Create User</h1>
                <div>
                    <label>Full Name: </label>
                    <input
                        id="fullName"
                        {...register("fullName", {
                            required: "Full Name is required",
                        })}
                        className="w-[200px] rounded-lg border border-gray-300 px-4 py-2 text-gray-700 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        type="text"
                    />
                </div>
                <div>
                    <label>Date of Birth: </label>
                    <input
                        id="dateOfBirth"
                        {...register("dateOfBirth", {
                            required: "Date of Birth is required",
                        })}
                        className="w-[200px] rounded-lg border border-gray-300 px-4 py-2 text-gray-700 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        type="date"
                    />
                </div>
                <div>
                    <label>Email: </label>
                    <input
                        id="email"
                        {...register("email", {
                            required: "Email is required",
                        })}
                        className="w-[200px] rounded-lg border border-gray-300 px-4 py-2 text-gray-700 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        type="text"
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        id="password"
                        {...register("password", {
                            required: "Password is required",
                        })}
                        className="w-[200px] rounded-lg border border-gray-300 px-4 py-2 text-gray-700 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        type="password"
                    />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input
                        id="confirmPassword"
                        {...register("confirmPassword", {
                            required: "Confirm Password is required",
                            validate: (value) =>
                                value === getValues().password ||
                                "Password does not match",
                        })}
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
