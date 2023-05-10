import { callToast } from "shared/lib/callToast";

export const useCopy = () => {
    const copy = async (copyItem, message = "Скопировано", type = "success") => {
        console.log(copyItem);

        if (copyItem !== null && copyItem !== undefined && copyItem.length !== 0) {
            await navigator.clipboard.writeText(String(copyItem));
            callToast({ message: `${message}`, type: type });
        } else {
            callToast({ message: "Нечего копировать", type: "error" });
        }
    };

    return {
        copy,
    };
};
