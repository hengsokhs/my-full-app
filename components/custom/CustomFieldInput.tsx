import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

interface CustomFieldInputProps {
    label: string;
    name: string;
    id: string;
    type?: string;
    className?: React.ReactNode;
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string
    required?: boolean
}

export function CustomFieldInput({
        label
        , name
        , id
        , type='text'
        , className
        , value
        , onChange
        , placeholder
        , required=false
    }: CustomFieldInputProps) {
    return(
        <Field className='my-3'>
            <FieldLabel htmlFor={id}>{label}</FieldLabel>
            <Input
                type={type}
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`${className}`}
                required={required}
            />
        </Field>
    );
}