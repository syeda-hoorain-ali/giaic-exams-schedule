import { z } from 'zod';

export type State = {
    errors?: { rollNo?: string[] };
    message?: string | null;
};

export interface StudentData {
    'Roll Number'?: number;
    'Date'?: Date;
    'Day'?: string;
    'Time'?: string;
}

//* Give it a good name if you see it :)
interface Data {
    data?: StudentData;
    error?: unknown
}

export const fetchExams = async (rollNo: number): Promise<Data> => {
    try {
        const res = await fetch(`${process.env.BASE_URL as string}/api`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ rollNo }),
        });

        const data: StudentData = await res.json();
        return {data};

    } catch (error) {
        return {error};
    }
};


const FormSchema = z.object({
    rollNo: z.string()
        .min(1, 'Roll number is required')
        .max(8, 'Enter a valid roll number')
})

export const validate = async (prevState: State, formData: FormData) => {
    const validatedFields = FormSchema.safeParse({
        rollNo: formData.get('roll-no'),
    });


    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Search.'
        };
    }
    return {};
}









