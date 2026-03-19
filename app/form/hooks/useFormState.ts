import { useState } from "react"
import { FieldValues, UseFormReset } from "react-hook-form"

export function useFormState(reset:  UseFormReset<FieldValues>) {
    const [isSending, setIsSending] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const afterSubmit = () => {
        setIsSending(true)
        setIsSuccess(false)
    }

    const onSuccess = () => {
        setIsSending(false)
        setIsSuccess(true)
        reset()
    }

    const onError = () => {
        setIsSuccess(false)
        setIsSending(false)
    }

    return {
        isSending,
        isSuccess,
        onSuccess,
        onError,
        afterSubmit
    }

}