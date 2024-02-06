interface IProps {
    userId: string;
    setUserId: (id: string) => void;
    signIn: (id: string) => void;
}

export function Auth({ userId, setUserId, signIn }: IProps) {
    return (
        <div className="flex h-screen justify-center items-center bg-gray-100">
            <div className="max-w-sm w-full mx-auto p-20 bg-white rounded-lg shadow-md">
                <div className="flex justify-center">
                    <img src="https://carybit.s3.us-east-1.amazonaws.com/images/Logo%20Dark.png" alt="Logo" width={180} />
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-1" onSubmit={() => {}}>
                        <div>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="id"
                                type="text"
                                value={userId}
                                onChange={(event) => setUserId(event.target.value)}
                                placeholder="ID"
                            />
                        </div>
                        <div className="mt-5">
                            <button
                                onClick={() => signIn(userId)}
                                className="w-full px-4 py-2 text-base font-medium text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
