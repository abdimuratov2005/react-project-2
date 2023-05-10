import { toast } from 'react-toastify';

export const callToast = ({
    message = '',
    type = 'success',
    position = 'TOP_RIGHT',
    isDangerouslySetInnerHTML = false,
}) => {
    if (isDangerouslySetInnerHTML) {
        const _message = (
            <div>
                <div dangerouslySetInnerHTML={{ __html: message }} />
            </div>
        );

        toast[type](_message, {
            position: toast.POSITION[position],
        });
    } else {
        toast[type](message, {
            position: toast.POSITION[position],
        });
    }
};
