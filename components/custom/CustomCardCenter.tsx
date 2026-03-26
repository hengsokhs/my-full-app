import { Card, CardTitle, CardContent, CardHeader } from '@/components/ui/card';

type CustomCardCenterProps = {
    title: string;
    content: React.ReactNode;
    className?: string;
}

export function CustomCardCenter({ title, content, className = "" }: CustomCardCenterProps) {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <Card className={`mx-auto w-full max-w-sm ${className}`} size='sm'>
                <CardHeader>
                    <CardTitle className='flex justify-center'>
                        <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>{title}</h3>
                    </CardTitle>
                </CardHeader>
                <CardContent>{content}</CardContent>
            </Card>
        </div>
    );
}