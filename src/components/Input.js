import { useEffect, useState, useRef } from "react"

export default function ({ label, type = 'text', ...props }) {

    const inputRef = useRef();
    const [show, setShow] = useState(false)
    const [inputType, setType] = useState(type)

    useEffect(() => {
        if(show) {
            setType('text')
            inputRef.current.focus()
        } else if(type === 'password') {
            setType('password')
            inputRef.current.focus()
        }
    }, [show])

    return (
        <label className="block relative flex bg-zinc-50 rounded-sm focus-within:border-gray-600 ">
            <input ref={inputRef} required={true} type={inputType} className=" border px-2 outline-none text-xs w-full h-[38px] valid:pt-[10px] peer" {...props} />
            <small className="absolute top-1/2 left-[9px] text-xs cursor-text pointer-events-none text-gray-500 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">{label}</small>
            {type === 'password'&& props?.value &&(
                <button type="button" onClick={() => setShow(show => !show)} className="h-full flex items-center text-sm font-semibold">
                    {show ? 'Hide' : 'Show'}
                </button>
            )}
        </label>
    )
}