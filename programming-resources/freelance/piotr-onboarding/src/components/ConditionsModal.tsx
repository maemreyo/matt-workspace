import { Modal } from "@mui/material";

interface IProps {
    isVisible: boolean;
    conditions: string;
    handleConditionsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    hide: () => void;
}

export function ConditionsModal({ isVisible, hide, handleConditionsChange, conditions }: IProps) {
    return (
        <Modal open={isVisible} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <div className="flex items-center justify-center min-h-screen">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 border p-4">
                    <div className="flex items-start justify-between m-4 mb-2 rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            What conditions should decide when to show the question?
                        </h3>
                    </div>
                    <div className="p-3 space-y-6 flex justify-center">
                        <input
                            className="appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight "
                            type="text"
                            value={conditions}
                            onChange={(event) => handleConditionsChange(event)}
                            placeholder="Enter your conditions..."
                        />
                    </div>
                    <div className="flex items-center justify-center space-x-2 rounded-b">
                        <button
                            onClick={hide}
                            type="button"
                            className="text-white bg-blue-500 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
