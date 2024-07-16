"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { useFormState } from "react-dom";
import { validate } from "../lib/data";

const Search = () => {
    const { replace } = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString());
    const [rollNo, setRollNo] = useState(params.get('roll-no') || '');

    const initialState = { message: '', errors: {} };
    const [state, dispatch] = useFormState(validate, initialState);  


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRollNo(e.target.value);
        if (e.target.value !== '') {
            params.set('roll-no', e.target.value);
        } else {
            params.delete('roll-no');
        }
        replace(pathname + '?' + params.toString());
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        params.set('roll-no', rollNo);
        replace(pathname + '?' + params.toString());
    };

    return (
        <form action={dispatch} onSubmit={handleSubmit}>

            <div className="flex gap-5">
                <input
                    type="number"
                    name="roll-no"
                    id="roll-no"
                    value={rollNo}
                    onChange={handleChange}
                    aria-describedby="roll-no-error"
                    placeholder="Enter your roll no"
                    className="md:w-96 py-1 px-2 rounded-md border border-black text-lg"
                />
                <button
                    type="submit"
                    className="bg-green-300 active:bg-green-400 active:scale-95 active:shadow-xl shadow-lg text-md md:text-lg px-3 md:px-4 border border-black rounded-lg font-bold">
                    Search
                </button>
            </div>

            <div id="roll-no-error" aria-live="polite" aria-atomic="true">
                {state.errors?.rollNo && 
                    state.errors.rollNo.map((error: string) => (
                        <p className="mt-2 ml-2 text-sm text-red-500" key={error}>
                            {error}
                        </p>
                    ))
                }
            </div>
        </form>
    );
};

export default Search;
