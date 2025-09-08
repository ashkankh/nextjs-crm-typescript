import { FormInputType } from "@/types/form.type"

function FormInput({ label, name, type, onChange, value, disabled, readonly }: FormInputType) {
    return (
        <div className="flex flex-col py-2 gap-1">
            <label htmlFor={name}>{label}</label>
            <input className="flex w-full text-gray-200 bg-gray-800 py-3 px-4 rounded-md focus:outline-none" readOnly={readonly} disabled={disabled} type={type} value={value} onChange={onChange} name={name}/>
        </div>
    )
}

export default FormInput