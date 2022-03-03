import toast, { ToastBar, Toaster } from 'react-hot-toast';
export const ToastNotify = () => {
    return (
        <Toaster
            position="bottom-right"
            reverseOrder={false}
            containerClassName="toastMain"
            toastOptions={{
                className: ' ',
                success: {
                    duration: 10000,
                    className: 'commonParent toastSuccess text-white py-3 mb-2 px-4',
                    theme: {
                        primary: 'green',
                        secondary: 'black'
                    }
                },

                error: {
                    duration: 10000,
                    className: 'commonParent toastError text-white py-3 mb-2 px-4 w-100',
                    theme: {
                        primary: 'green',
                        secondary: 'black'
                    }
                }
            }}
        >
            {(t) => (
                <ToastBar toast={t}>
                    {({ message }) => (
                        <div className="flex items-center">
                            {t.type === 'success' ? (
                                <i className="cursorPointer fa-solid fa-circle-check" onClick={() => toast.dismiss(t.id)} />
                            ) : (
                                <i onClick={() => toast.dismiss(t.id)} className="fa-solid fa-circle-xmark cursorPointer" />
                            )}
                            <span className="message">{message}</span>
                        </div>
                    )}
                </ToastBar>
            )}
        </Toaster>
    );
};
